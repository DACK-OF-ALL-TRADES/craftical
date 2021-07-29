import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../../utils/mutations";
import { GET_PHOTO } from "../../utils/queries";

export default function PhotoUpload(props) {
  const [file, setFile] = useState({});
  const [uploadFile] = useMutation(UPLOAD_IMAGE);

  const handleUpload = async () => {
    if (file) {
      uploadFile({
        variables: { file },
        refetchQueries: [{ query: GET_PHOTO, variables: file }],
      });
      setFile({});
      console.log("Uploaded successfully: ", file);
    } else {
      console.log("No files to upload");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFile) => {
      setFile(
        // convert preview string into a URL
        Object.assign(acceptedFile[0], {
          preview: URL.createObjectURL(acceptedFile[0]),
        })
      );
    },
  });

  useEffect(() => {
    URL.revokeObjectURL(file.preview);
  }, [file]);

  return (
    <section className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some file here, or click to select file</p>
      </div>
      <aside>
        <div key={file.name}>
          <div>
            <img src={file.preview} alt={file.length && "img"} />
          </div>
        </div>
        <button
          type="submit"
          style={{ display: file && !Object.keys(file).length && "none" }}
          onClick={handleUpload}
        >
          Upload
        </button>
      </aside>
    </section>
  );
}
