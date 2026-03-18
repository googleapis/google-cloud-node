workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "gapic_generator_typescript",
)
 
load("//:repositories.bzl", "gapic_generator_typescript_repositories", "NODE_VERSION")
gapic_generator_typescript_repositories()

load("@com_google_protobuf//:protobuf_deps.bzl", "protobuf_deps")
protobuf_deps()

load("@rules_python//python:repositories.bzl", "py_repositories")
py_repositories()

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")
rules_proto_dependencies()
rules_proto_toolchains()

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")
rules_ts_dependencies(
    ts_version_from = "//:package.json",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")
rules_js_dependencies()

load("@aspect_rules_js//js:toolchains.bzl", "DEFAULT_NODE_VERSION", "rules_js_register_toolchains")

rules_js_register_toolchains(node_version = DEFAULT_NODE_VERSION)

load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock", "pnpm_repository")


npm_translate_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
    update_pnpm_lock = True,
    data = ["//:package.json"],
)
pnpm_repository(name = "pnpm")
load("@npm//:repositories.bzl", "npm_repositories")
npm_repositories()

# To regenerate the lock file, run:
# bazelisk run -- @pnpm//:pnpm --dir $PWD install --lockfile-only
# More information: https://github.com/aspect-build/rules_js/blob/main/docs/faq.md#can-i-use-bazel-managed-pnpm

