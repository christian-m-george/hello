import fs from "fs";
import { argv } from "process";

const writeHello = (input) => {
  fs.appendFile(`${input}`, "\nHello World", function (err) {
    if (err) console.log("error", err);
  });
};

writeHello(argv[2]);
