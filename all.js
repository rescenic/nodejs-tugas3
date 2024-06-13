const { exec } = require("child_process");

const files = [
  "./src/variables.js",
  "./src/looping.js",
  "./src/functions.js",
  "./src/arrays.js",
  "./src/objects.js",
];

files.forEach((file) => {
  exec(`node ${file}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${file}: ${error}`);
      return;
    }
    console.log(`Output of ${file}:\n${stdout}`);
    if (stderr) {
      console.error(`Error output of ${file}:\n${stderr}`);
    }
  });
});
