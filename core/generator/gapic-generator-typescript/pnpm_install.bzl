def _pnpm_install_impl(repository_ctx):
    workspace_root = str(repository_ctx.workspace_root)
    
    # Get the path to the pnpm.cjs entry point inside @pnpm external repo
    pnpm_cjs_path = str(repository_ctx.path(Label("@pnpm//:package/dist/pnpm.cjs")))
    
    # Run the equivalent of `bazelisk run -- @pnpm//:pnpm --dir $PWD install --lockfile-only`
    # using node and the path to pnpm.cjs
    result = repository_ctx.execute(
        ["node", pnpm_cjs_path, "--dir", workspace_root, "install", "--lockfile-only"],
        working_directory = workspace_root,
    )
    
    if result.return_code != 0:
        fail("Failed to run pnpm install --lockfile-only: %s" % result.stderr)
        
    repository_ctx.file("pnpm_install.bzl", "PNPM_INSTALL_STATUS = 'success'")
    repository_ctx.file("BUILD.bazel", "exports_files(['*'])")

pnpm_install = repository_rule(
    implementation = _pnpm_install_impl,
)
