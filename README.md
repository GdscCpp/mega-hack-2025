# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

### Apps and Packages

- `supabase`: the api repo
- `extension`: the chrome extension
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo


### Getting Started
Install the following tools:
- [Node.js](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)
- [Deno](https://docs.deno.com/runtime/getting_started/installation/)
- [Supabase cli](https://supabase.com/docs/guides/local-development/cli/getting-started)

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```
You can also run this command in each individual repository to only run one at a time.