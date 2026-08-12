import { useState } from "react";
import axios from "axios";

import "./App.css";

interface UploadedFile {
  fileName: string;
  filePath: string;
}

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const onFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post<UploadedFile>(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={onFileUpload}>
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>

      {uploadedFile && (
        <div>
          <h3>{uploadedFile.fileName}</h3>
          <a
            href={uploadedFile.filePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            View File
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
