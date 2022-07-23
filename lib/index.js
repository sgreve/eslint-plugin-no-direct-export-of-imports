/**
 * @fileoverview Plugin for disallowing export of imports
 * @author Sven
 */
"use strict";

const noDirectExportOfImports = require("./rules/no-direct-export-of-imports");

module.exports = {
    rules: {
        "no-direct-export-of-imports": noDirectExportOfImports
    }
}



