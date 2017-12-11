# Create Mono Module

> Create a [Mono](https://github.com/terrajs/mono) app in seconds

## Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since NPM `5.2.0`)

```bash
npx create-mono-app <my-mono-app>
```

Or with [yarn](https://yarnpkg.com/en/):

```bash
yarn create mono-app <my-mono-app>
```

Or you can also install it globally with:

```bash
npm install -g create-mono-app
# Then you can run
create-mono-app <my-mono-app>
```

## ESLint

The module will ask you if you want to add [ESLint](https://eslint.org) in your project.

## Test

Your Mono app is ready to be tested with [AVA](https://github.com/avajs/ava), [nyc](https://github.com/istanbuljs/nyc) and [mono-test-utils](https://github.com/terrajs/mono-test-utils) by running:

```bash
npm test
```

## License

MIT &copy; [terrajs](github.com/terrajs)