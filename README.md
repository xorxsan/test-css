# test-css

Repo to reproduce a CSS issue.

## Developing

To develop on Cross Sell Studio

1. Ensure your node is consistent with the `.nvmrc`.
1. Ensure your git is configured to use SymLinks. On windows, there are strict steps to follow [here](https://vistaprint.atlassian.net/wiki/spaces/PT/pages/702186664/Use+SymLink+on+Windows)
1. `pnpm install`
1. `pnpm lerna run watch --scope "test-css"`
1. Wait for `[0] created dist/esm, dist/cjs in 9.8s`, then in a new terminal window

   `pnpm lerna run start --scope "example-app"`
