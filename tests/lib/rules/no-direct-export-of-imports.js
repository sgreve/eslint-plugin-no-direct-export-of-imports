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
        code: 
		`import somethingDefault from 'someImport'
         export { somethingDefault as newNamed }`
    },
	{
        code: 
		`import { somethingNamed } from 'someImport'
         export { somethingNamed as newNamed }`
    },
	{
        code: 
		`import { somethingDefault } from 'someImport'
		 const otherVariable = somethingDefault
         export { otherVariable }`
    },
  ],

  invalid: [
    {
      code: 
      `import somethingDefault from 'someImport'
       export { somethingDefault }`,
      errors: [{ message: "Imports are not allowed to be exported directly: somethingDefault", type: "ExportNamedDeclaration" }],
    },
	{
		code: 
		`import { somethingNamed } from 'someImport'
		 export { somethingNamed }`,
		errors: [{ message: "Imports are not allowed to be exported directly: somethingNamed", type: "ExportNamedDeclaration" }],
	},
	{
		code: 
		`import { somethingNamed } from 'someImport'
		 export default somethingNamed`,
		errors: [{ message: "Imports are not allowed to be exported directly: somethingNamed", type: "ExportDefaultDeclaration" }],
	}
  ],
});