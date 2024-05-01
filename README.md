# Setting Up Node.js Projects

## Overview

This guide outlines the steps to set up a Node.js project with TypeScript, ESLint, Prettier, Husky, and lint-staged for consistent code quality and formatting.

### Usage

Run the following commands after cloning the repository:

```bash
npm install
```

```bash
npm run husky:prepare
```

## How to Create this Setup?

### Git & GitHub

Initialize the git repository:

```bash
git init
```

Configure your git repository with .gitignore and pattern commits following Conventional Commits:
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Node Project Initialization
---

Initialize a Node project:

```bash
npm init -y
```

### Dependencies
---

Install all dependencies:

```bash
- npm i typescript @types/node -D
```

```bash
npm i ts-node-dev nodemon -D
```

```bash
npm i eslint eslint-config-prettier @eslint/js prettier typescript-eslint -D
```

```bash
npm i husky lint-staged -D
```

### Documentation
---

- [typescript](https://www.typescriptlang.org/docs/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [ESLint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/)
- [lint-staged](https://www.npmjs.com/package/lint-staged/v/12.3.2)
- [Husky](https://typicode.github.io/husky/)

### TypeScript Configuration
---

Create a tsconfig file:

```bash
tsc --init
```

Configure the tsconfig file like this:

~~~
{
    "compilerOptions": {
        "target": "ES2016",
        "module": "CommonJS",
        "rootDir": "src",
        "outDir": "./dist",
        "moduleResolution": "Node",
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true
    }
}
~~~

### Environment configs
---

Configure package.json scripts:

~~~
{
    "scripts": {
        "start:dev": "nodemon --watch 'src/' --exec 'ts-node-dev --inspect --ignore-watch node_module src/index.ts' -e ts",
        "husky:prepare": "husky install"
    }
}
~~~

Create src/index.ts file.

### ESLint and Prettier configs
---

Configure eslint:

```bash
npx eslint --init
```

On eslint file add this configs:

~~~
"jest": true
"project": ["./tsconfig.json"]
~~~

Create a file ".prettierrc.json and config it:

~~~
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2
}
~~~

> Configure "format on save".

> Press "ctrl + ," and search "format on save" and mark checkbox.

> Search "default formatter" and select "Prettier - Code formatter".

On eslint file, write config:

```bash
"prettier"
```

like this:

~~~
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
}
~~~

### Husky and lint-staged config
---

Run:

```bash
npm run husky:prepare
```

Create file ".lintstagedrc.json" and write this config:

~~~
{
  "*.ts": ["npx eslint --fix 'src/**'", "npx prettier --check 'src/**'"]
}
~~~

on pre-commit file of husky directory, write this:

```bash
npx lint-staged
```

All commands into this file are executed when you commit.

> chmod +x .husky/commit-msg > Comando para marcar um arquivo como "executável".
> echo ".git/hooks/commit-msg \$1" > .husky/commit-msg > Cria um novo hook do husky para commit-msg