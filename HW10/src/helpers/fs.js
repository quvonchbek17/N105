import fs from "fs";
import path from "path";

const readFile = async (nameFile) => {
  return JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "src", "data", `${nameFile}.json`))
  );
};

const writeFile = async (nameFile, database) => {
  return fs.writeFileSync(
    path.join(process.cwd(), "src", "data", `${nameFile}.json`),
    JSON.stringify(database, null, 4)
  );
};

export { readFile, writeFile };
