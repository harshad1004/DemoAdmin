import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddGallery from "./AddGallery";
import { toast, ToastContainer } from "react-toastify";
import ToggleButton from "react-toggle-button";

const Gallery = () => {
  const token = localStorage.getItem("Token");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [gallery, setGallery] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  //fetch all gallery image_____________________________________
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gallery", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.status) {
          setGallery(data.data.data);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        toast.error(error);
      });
  }, []);
  //new gallery image add on gallery page___________________________________________
  const galleryData = (data) => {
    axios
      .post("http://localhost:5000/api/gallery/upload", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.status) {
          toast.success(data.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          axios
            .get("http://localhost:5000/api/gallery", {
              headers: {
                authorization: `Bearer ${token}`,
              },
            })
            .then((data) => {
              if (data.status) {
                setGallery(data.data.data);
              }
            })
            .catch((err) => {
              setError(err.response.data.message);
              toast.error(error);
            });
        }
      })
      .catch((err) => {
        setError(err.response.data.Error);
        toast.error(error);
      });
  };
  // gallery delete handler _______________________________
  const checkBoxHandler = (id) => {
    console.log(id, "id for gallery checkbox");
    axios
      .patch(`http://localhost:5000/api/gallery/update/${id}`, gallery, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.status) {
          toast.info(data.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          axios
            .get("http://localhost:5000/api/gallery", {
              headers: {
                authorization: `Bearer ${token}`,
              },
            })
            .then((data) => {
              if (data.status) {
                setGallery(data.data.data);
              }
            })
            .catch((err) => {
              setError(err.response.data.message);
              toast.error(error);
            });
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        toast.error(error);
      });
  };

  //delete gallery image ___________________
  const galleryDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/gallery/delete/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.status) {
          toast.warn(data.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          axios
            .get("http://localhost:5000/api/gallery", {
              headers: {
                authorization: `Bearer ${token}`,
              },
            })
            .then((data) => {
              if (data.status) {
                setGallery(data.data.data);
              }
            })
            .catch((err) => {
              setError(err.response.data.message);
              toast.error(error);
            });
        }
      })
      .catch((err) => {
        setError(err.response.data);
        toast.error(error);
      });
  };
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <div className="row">
                    <div className="col-md-10">
                      <h4 className="text-white text-capitalize ps-3">
                        Gallery Table
                      </h4>
                    </div>
                    <div className="col-md-2 text-white text-capitalize ps-3">
                      <Button
                        onClick={handleOpen}
                        style={{
                          paddingLeft: "50px",
                          fontSize: "150%",
                          color: "white",
                        }}
                      >
                        ADD
                      </Button>
                    </div>
                    <></>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                          NAME
                        </th>
                        <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                          IMAGE
                        </th>
                        <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                          STATUS
                        </th>
                        <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                          DELETE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {gallery?.map((dataItem, id) => {
                        return (
                          <tr key={id}>
                            <td className="align-middle text-center text-sm">
                              <p className="text-lg font-weight-bold mb-0">
                                {dataItem.name}
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <div>
                                <img
                                  src={`http://${dataItem.url}`}
                                  className="avatar avatar-xl me-3 border-radius-lg"
                                  alt="user1"
                                />
                              </div>
                            </td>
                            <td style={{ paddingLeft: "11%" }}>
                              <ToggleButton
                                value={dataItem.status || false}
                                onToggle={() => {
                                  checkBoxHandler(dataItem._id);
                                }}
                              />
                            </td>
                            <td className="align-middle text-center text-lg">
                              <button
                                className="badge badge-sm bg-gradient-danger"
                                onClick={() =>
                                  galleryDeleteHandler(dataItem._id)
                                }
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
        <AddGallery
          galleryData={galleryData}
          dialogData={open}
          setOpenData={setOpen}
        ></AddGallery>
      </div>
    </>
  );
};

export default Gallery;
