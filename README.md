# test-css

Repo to reproduce a CSS issue.

## Developing

To develop on test-css:

1. Ensure your node is consistent with the `.nvmrc`.
1. Ensure your git is configured to use SymLinks.
1. `pnpm install`
1. `pnpm lerna run watch --scope "test-css"`
1. Wait for `[0] created dist/esm, dist/cjs in 9.8s`, then in a new terminal window

   `pnpm lerna run start --scope "example-app"`
