# eslint-plugin-no-direct-export-of-imports
[![npm version](https://badge.fury.io/js/eslint-plugin-no-direct-export-of-imports.svg)](https://badge.fury.io/js/eslint-plugin-no-direct-export-of-imports)

Plugin for disallowing direct export of imports

### Fail
```js

import somethingDefault from 'someImport'
export { somethingDefault }

```

### Pass

```js

import somethingDefault from 'someImport'
export { somethingDefault as newNamed }

```

---
## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-direct-export-of-imports`:

```sh
npm install eslint-plugin-no-direct-export-of-imports --save-dev
```

## Usage

Add `no-direct-export-of-imports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-direct-export-of-imports"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-direct-export-of-imports/no-direct-export-of-imports": "error"
    }
}
```
