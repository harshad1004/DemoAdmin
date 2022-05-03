import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Navigate, useNavigate } from "react-router-dom";

const baseStyle = {
  display: "flex",
  flexdirection: "column",
  alignitems: "center",
  padding: "20px",
  borderwidth: 2,
  borderradius: 2,
  bordercolor: "#eeeeee",
  borderstyle: "dashed",
  backgroundcolor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const AddGallery = ({ dialogData, setOpenData, galleryData }) => {
  const navigate = useNavigate();
  const [file, setFiles] = useState([]);
  const [error, setError] = useState("");
  const handleClose = () => {
    setOpenData(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.length > 0
      ? setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      : setError("Large File");
  }, []);
  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragReject,
    rejectedFiles,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    minSize: 0,
    maxSize: 1000000,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragActive ? activeStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragActive, isDragReject]
  );
  const previewSlide = file.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name}></img>
    </div>
  ));

  useEffect(
    () => () => {
      file.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [file]
  );

  const galleryAddHandler = (e) => {
    const body = new FormData();
    e.preventDefault();

    for (let i = 0; i < file.length; i++) {
      body.append("file", file[i]);
    }
    galleryData(body);
    setFiles([]);
    navigate("/gallery");
    setOpenData(false);
  };
  return (
    <div style={{ marginTop: "10%", position: "relative" }}>
      <Dialog open={dialogData} onClose={handleClose} id="galleryDialog">
        <div
          style={{
            width: "80vh",
            height: "70%",
          }}
        >
          <DialogTitle>Add Gallery</DialogTitle>
          <DialogContent>
            <h6>Add Image</h6>
            <div className="dropzone" {...getRootProps(style)}>
              <input {...getInputProps()} />
              <div className="">Drag and drops files here</div>
            </div>
            <br></br>
            <div className="avatar avatar-xl me-3 border-radius-lg rounded float-start ">
              {file.length > 0 ? (
                previewSlide
              ) : (
                <h6 style={{ color: "red" }}>{error}</h6>
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              disabled={file?.length === 0 ? true : false}
              onClick={(e) => galleryAddHandler(e)}
            >
              Add
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default AddGallery;
