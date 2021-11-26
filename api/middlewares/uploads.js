import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "images/");
  },
  filename: function (req, file, callback) {
    let ext = path.extname(file.originalname);
    callback(null, Date.now() + ext);
  },
});

export const imageUpload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype === "image/jpg" || "image/png") callback(null, true);
    else console.log("only .jpg or .png files supported");
  },
  limits: {
    fieldSize: 1024 * 1024 * 2,
  },
}).fields([
  {
    name: "image",
    maxCount: 1,
  },
  {
    name: "thumbnail",
    maxCount: 1,
  },
]);
