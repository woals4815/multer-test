import multer from "multer";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = " | convert text";
  next();
};

const multerText = multer({ dest: "text/" });

export const uploadText = multerText.single("textFile");
