/**
 * @fileoverview Disallow direct export of imports
 * @author Sven
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Disallow direct export of imports",
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    const allImports = []

    const isInImport = (specifier) => {
        console.log(allImports)
        console.log(specifier.exported.name)
        return (allImports.includes(specifier.exported.name))
    }

    return {
      ImportDeclaration(node) { 
          allImports.push(...node.specifiers.map(specifier => specifier.local.name))
      },
      ExportNamedDeclaration(node) {
          node.specifiers.forEach(specifier => {
              if(isInImport(specifier))
                context.report({
                    node,
                    message: 'Imports are not allowed to be exported directly',
                    data: specifier.exported.name
                })
          })
      }
    };
  },
};
