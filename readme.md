# vite-plugin-git-commit-hash
> insert a variable GIT_COMMIT_HASH that can be printed out in your console

This plugin defines a global variable `GIT_COMMIT_HASH` in your javascript/typescript. It is compatible with both commonjs and esm, with typescript declaration supplied.

## Install

```shell
pnpm add -D vite-plugin-git-commit-hash
```

## Usage

1. vite config
```typescript
import { defineConfig } from "vite";
import { gitCommitHashPlugin } from "vite-plugin-git-commit-hash";

export default defineConfig((config) => {
  return {
    plugins: [
      /**
       * ..your plugins
       */
      gitCommitHashPlugin(),
    ]
  };
});
```

2. in your typescript/javascript
```javascript
/**
 * use the variable GIT_COMMIT_HASH
 *
 * GIT_COMMIT_HASH is defined by vite-plugin-git-commit-hash
 */
console.info(GIT_COMMIT_HASH);
```

3. typescript declaration (optional)
```typescript
/**
 * in any of your typescript declaration files, for example global.d.ts
 * you will get typescript code autocompletion in your editor
 */
declare const GIT_COMMIT_HASH: string;
```
