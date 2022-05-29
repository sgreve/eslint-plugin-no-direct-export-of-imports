# Disallow direct export of imports (no-direct-export-of-imports)

Prevent direct exporting of imports.

## Rule Details
---

### Examples of **incorrect** code for this rule:

```js

import somethingDefault from 'someImport'
export { somethingDefault }

```

```js

import somethingDefault from 'someImport'
export default omethingDefault

```

```js

import { somethingNamed } from 'someImport'
export { somethingNamed }

```
----

### Examples of **correct** code for this rule:

```js

import somethingDefault from 'someImport'
export { somethingDefault as newNamed }

```

```js

import { somethingDefault } from 'someImport'
const otherVariable = somethingDefault
export { otherVariable }

```
