import nextConnect from "next-connect";
import multer from "multer";
import { fromPath } from "pdf2pic";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, "source.pdf"),
  }),
});

const options = {
  density: 100,
  saveFilename: "source",
  savePath: "./public/uploads/",
  format: "png",
  width: 794,
  height: 1123,
};
const storeAsImage = fromPath("./public/uploads/source.pdf", options);

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// apiRoute.use(upload.single("theFiles"));
apiRoute.use(storeAsImage.bulk(-1));

apiRoute.post((req, res) => {
  res.status(200).json({ data: "success" });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};