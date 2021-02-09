import fs from "fs";

export const getHome = (req, res) => {
  res.render("home");
};
export const postHome = (req, res) => {
  const filePath = req.file.path;
  fs.readFile(`${filePath}`, "utf8", (err, data) => {
    if (err) throw err;
    res.render("home", { data });
  });
};
