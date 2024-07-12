import { readFileSync, writeFileSync, globSync } from "node:fs";

const fnFiles = globSync(".vercel/output/static/_worker.js/**/*.func.js");

for (const file of fnFiles) {
  let content = readFileSync(file, "utf-8");

  // Patch Webpack init to only run once globally
  content = content
    .replace(
      /;\(\(\)=>{"use strict";var .={},.={};function .\(.\){/,
      ";if (!globalThis.__PATCHED_WEBPACK__) { globalThis.__PATCHED_WEBPACK__ = true; $&"
    )
    .replace(/\.push\.bind\(.\)\)}\)\(\)}\)\(\);/, "$& }");

  // Patch _ENTRIES to not overwrite
  content = content.replace(
    "globalThis._ENTRIES={};",
    "globalThis._ENTRIES??={};"
  );

  writeFileSync(file, content);

  console.log("Patched", file);
}
