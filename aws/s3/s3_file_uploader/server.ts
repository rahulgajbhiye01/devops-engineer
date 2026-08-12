import express, { Request, Response } from "express";
import multer, { StorageEngine } from "multer";
import path from "path";
import cors from "cors";
import { v4 as uuidv4 } from "uuid"; // For unique filenames (optional)

const app = express();
app.use(cors());

// Set up multer for file storage
const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, "uploads/"); // Folder where files will be stored
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`); // Rename file with a unique ID and file extension
  },
});

const upload = multer({ storage });

// File upload route
app.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ message: "No file uploaded" });
    return;
  }
  res.json({
    fileName: req.file.filename,
    filePath: `/uploads/${req.file.filename}`,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
