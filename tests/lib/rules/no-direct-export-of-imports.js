/**
 * @fileoverview Disallow direct export of imports
 * @author Sven
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-direct-export-of-imports"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig({
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    }
});

const ruleTester = new RuleTester();


ruleTester.run("no-direct-export-of-imports", rule, {
  valid: [
    {
        code: `import test from 'test'
         export { test as test2 }
        `,
    },
  ],

  invalid: [
    {
      code: 
      "import fs from 'fs/promises'\n" +
      "export { fs }",
      errors: [{ message: "Imports are not allowed to be exported directly", type: "ExportNamedDeclaration" }],
    },
  ],
});