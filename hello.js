import fs from "fs";
import { argv } from "process";

const getProcessArg = () => {
  console.log(process.argv[0]);
  return argv[2];
};

const writeHello = (input) => {
  fs.appendFile(`${input}`, "\nHello World", function (err) {
    if (err) console.log("error", err);
  });
};

writeHello(getProcessArg());
