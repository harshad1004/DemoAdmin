import axios from "axios";
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

const AddSlider = (props) => {
  const navigate = useNavigate();
  const [file, setFiles] = useState([]);
  // const [closeModel, setCloseModel] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles, "acceptedFiles line no 34");
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({ onDrop, accept: "image/jpeg, image/png" });
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
  // clean up _______________________

  useEffect(
    () => () => {
      file.forEach((file) => URL.revokeObjectURL(file.preview));
      // setFiles((file) =>[...file, files])
    },
    [file]
  );
  const slideAddHandler = (e) => {
    const body = new FormData();
    e.preventDefault();
    console.log(file, "file");
    props.sliderData(file);
    navigate("/slider");
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.classList.remove("modal-backdrop"));
    // setCloseModel(true);
    setFiles([]);
    // const uploadData = () => {
    const token = localStorage.getItem("Token");
    console.log(token, "TokenToken");
    console.log(file, "files type");
    for (let i = 0; i < file.length; i++) {
      body.append("file", file[i]);
    }
    axios
      .post(
        "http://localhost:5000/api/slider/upload",
        body,

        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
        // file
      )
      .then((data) => {
        if (data.status) {
          alert();
          console.log(data, "uploaded sucessfully");
          setFiles([file]);
        }
      })
      .catch((err) => {
        console.log(err.response.data.Error, "error in upload");
      });
    // };
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Slides
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>Add Image</h6>
              <div {...getRootProps(style)}>
                <input {...getInputProps()} />
                <div className="">Drag and drops files here</div>
              </div>
              <br></br>
              <div className="avatar avatar-xl me-3 border-radius-lg rounded float-start ">
                {previewSlide}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => slideAddHandler(e)}
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSlider;
