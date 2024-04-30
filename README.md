# Setup NodeJS Projects

# Usage

Run:

- npm install
- npm run husky:prepare

# How to created this setup? (Tutotial)

## Git && GitHub
Run:

> Initialize the git repository.

- git init

Configure your git repository with .gitignore.
Pattern commits: [Convetional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

> Initialize a node project.

- npm init -y

## Dependences

> Install all dependences.

- npm i typescript @types/node -D
- npm i ts-node-dev nodemon -D
- npm i eslint eslint-config-prettier @eslint/js prettier typescript-eslint -D
- npm i husky lint-staged -D

## Documentations

[typescript](https://www.typescriptlang.org/docs/)
[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
[nodemon](https://www.npmjs.com/package/nodemon)
[eslint](https://eslint.org/docs/latest/)
[prettier](https://prettier.io/docs/en/)
[lint-staged](https://www.npmjs.com/package/lint-staged/v/12.3.2)
[husky](https://typicode.github.io/husky/)

> Create tsconfig file.

- tsc --init

## Environment configs

Configure the tsconfig file like this:

{
    "compilerOptions": {
        "target": "ES2016",
        "module": "CommonJS",
        "rootDir": "src",
        "outDir": "./dist",
        "moduleResolution": "Node",
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
    }
}

> Config package.json scripts.

{
    "scripts": {
        "start:dev": "nodemon --watch 'src/' --exec 'ts-node-dev --inspect --ignore-watch node_module src/index.ts' -e ts",
        "husky:prepare": "husky install",
    }
}

Create src/index.ts file.

## Eslint and Prettier configs


