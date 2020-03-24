const fs = require("fs");
const pkg = require("./package.json");
const filename = "assets/js/main.min.js";
const script = fs.readFileSync(filename);
const padStart = str => ("0" + str).slice(-2);
const dateObj = new Date();
const date = `${dateObj.getFullYear()}-${padStart(
  dateObj.getMonth() + 1
)}-${padStart(dateObj.getDate())}`;
const banner = `/*!
 * COVID-19 Updates ${pkg.version} by ${pkg.author}
 * Copyright ${dateObj.getFullYear()} David Kisamfu - thedextazlab.com | @thedextazlab
 * Licensed under ${pkg.license}
 */
`;

if (script.slice(0, 3) != "/**") {
  fs.writeFileSync(filename, banner + script);
}
