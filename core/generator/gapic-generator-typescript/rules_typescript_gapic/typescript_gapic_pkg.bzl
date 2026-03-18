# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

load("@rules_gapic//:gapic_pkg.bzl", "construct_package_dir_paths")

def _typescript_gapic_src_pkg_impl(ctx):
    proto_srcs = []
    gapic_srcs = []

    for dep in ctx.attr.deps:
        if ProtoInfo in dep:
            proto_srcs.extend(dep[ProtoInfo].check_deps_sources.to_list())
        else:
            gapic_srcs.extend(dep.files.to_list())

    paths = construct_package_dir_paths(ctx.attr.package_dir, ctx.outputs.pkg, ctx.label.name)

    script = """
    set -e pipefail
    echo -e "{gapic_srcs}" | while read gapic_src; do
        mkdir -p "{package_dir_path}"
        unzip -q -o "$gapic_src" -d "{package_dir_path}"
    done
    echo -e "{proto_srcs}" | while read proto_src; do
        dirname=`dirname "$proto_src"`
        mkdir -p "{package_dir_path}/protos/$dirname"
        cp -f "$proto_src" "{package_dir_path}/protos/$dirname"
    done
    COMPILE_PROTOS=$(realpath "{compile_protos}")
    CWD=$(pwd)
    cd "{package_dir_path}"
    if [ -e esm/src ]; then $COMPILE_PROTOS "esm/src" "--esm"; else $COMPILE_PROTOS "src"; fi
    cd $CWD
    rm -f "{package_dir_path}/proto.list"
    tar cfz "{pkg}" -C "{package_dir_path}/.." "{package_dir}"
    rm -rf "{package_dir_path}"
    """.format(
        gapic_srcs = "\\n".join([f.path for f in gapic_srcs]),
        proto_srcs = "\\n".join([f.path for f in proto_srcs]),
        package_dir_path = paths.package_dir_path,
        package_dir = paths.package_dir,
        pkg = ctx.outputs.pkg.path,
        compile_protos = ctx.executable.compile_protos.path,
    )

    ctx.actions.run_shell(
        inputs = proto_srcs + gapic_srcs,
        command = script,
        outputs = [ctx.outputs.pkg],
        tools = [ctx.executable.compile_protos],
    )

_typescript_gapic_src_pkg = rule(
    attrs = {
        "deps": attr.label_list(allow_files = True, mandatory = True),
        "package_dir": attr.string(mandatory = True),
        "compile_protos": attr.label(
            executable = True,
            cfg = "exec",
            allow_files = True,
            default = Label("//:compile_protos_binary"),
        ),
    },
    outputs = {"pkg": "%{name}.tar.gz"},
    implementation = _typescript_gapic_src_pkg_impl,
)

def typescript_gapic_assembly_pkg(name, deps, assembly_name = None):
    package_dir = name
    if assembly_name:
        package_dir = "%s-%s" % (assembly_name, name)
    _typescript_gapic_src_pkg(
        name = name,
        deps = deps,
        package_dir = package_dir,
    )
