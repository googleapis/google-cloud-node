load("@rules_gapic//:gapic_pkg.bzl", "construct_package_dir_paths")

def _typescript_gapic_combined_pkg_impl(ctx):
    srcs = []

    for dep in ctx.attr.deps:
        srcs.extend(dep.files.to_list())

    paths = construct_package_dir_paths(ctx.attr.package_dir, ctx.outputs.pkg, ctx.label.name)

    # 1. Check if templates_excludes is NOT None and NOT empty.
    # The Starlark attr.string_list defaults to [], which is falsy in Starlark.
    if ctx.attr.templates_excludes:
        # 2. If it's valid, join the list with newlines.
        templates_excludes_var = "\\n".join(ctx.attr.templates_excludes)
    else:
        # 3. If it's empty or None, use an empty string.
        templates_excludes_var = ""

    args = [
        paths.package_dir,
        ctx.attr.default_version,
        templates_excludes_var,
        ctx.outputs.pkg.path,
        ctx.executable.compile_protos.path,
        ctx.executable.combine_libraries.path,
        ctx.attr.release_level,
    ]
    args.extend([f.path for f in srcs])

    ctx.actions.run(
        executable = ctx.executable._script,
        arguments = args,
        inputs = srcs,
        outputs = [ctx.outputs.pkg],
        tools = [
            ctx.executable.compile_protos,
            ctx.executable.combine_libraries,
        ],
    )

_typescript_gapic_combined_pkg = rule(
    attrs = {
        "deps": attr.label_list(allow_files = True, mandatory = True),
        "package_dir": attr.string(mandatory = True),
        "default_version": attr.string(mandatory = False),
        "templates_excludes": attr.string_list(mandatory = False),
        "release_level": attr.string(mandatory = False),
        "compile_protos": attr.label(
            executable = True,
            cfg = "exec",
            allow_files = True,
            default = Label("//:compile_protos_binary"),
        ),
        "combine_libraries": attr.label(
            executable = True,
            cfg = "exec",
            allow_files = True,
            default = Label("//:combine_libraries_binary"),
        ),
        "_script": attr.label(
            executable = True,
            cfg = "exec",
            allow_files = True,
            default = Label("//rules_typescript_gapic:combine_script"),
        ),
    },
    outputs = {"pkg": "%{name}.tar.gz"},
    implementation = _typescript_gapic_combined_pkg_impl,
)

def typescript_gapic_combined_pkg(name, deps, default_version = None, templates_excludes = None, release_level = None, assembly_name = None):
    package_dir = name
    default_version = default_version
    templates_excludes = templates_excludes
    release_level = release_level
    if assembly_name:
        package_dir = "%s-%s" % (assembly_name, name)
    _typescript_gapic_combined_pkg(
        name = name,
        deps = deps,
        templates_excludes = templates_excludes,
        default_version = default_version,
        package_dir = package_dir,
        release_level = release_level
    )
