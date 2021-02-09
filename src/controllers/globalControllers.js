import fs from "fs";
let filePath;
export const getHome = (req, res) => {
  res.render("home");
};
export const postHome = (req, res) => {
  const {
    file: { path },
  } = req;
  fs.readFile(`${path}`, "utf8", (err, data) => {
    if (err) throw err;
    filePath = path;
    res.redirect("/read");
  });
};

export const getRead = (req, res) => {
  fs.readFile(`${filePath}`, "utf8", (err, data) => {
    if (err) throw err;
    res.render("read", { data });
  });
};
