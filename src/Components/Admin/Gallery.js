import React from "react";
import AddGallery from "./AddGallery";

const Gallery = () => {
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <div className="row">
                    <div className="col-md-11">
                      <h4 className="text-white text-capitalize ps-3">
                        Gallery Table
                      </h4>
                    </div>
                    <div className="col-md-1 text-white text-capitalize ps-3">
                      <i
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="material-icons opacity-10"
                        style={{ fontSize: "40px" }}
                      >
                        post_add
                      </i>
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
                          ID
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
                      <tr>
                        <td className="align-middle text-center text-sm">
                          <p className="text-lg font-weight-bold mb-0">1</p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <div>
                            <img
                              src="../assets/img/team-2.jpg"
                              className="avatar avatar-xl me-3 border-radius-lg"
                              alt="user1"
                            />
                          </div>
                        </td>
                        <td className="align-middle text-center text-lg">
                          <span className="badge badge-sm bg-gradient-success">
                            Active
                          </span>
                        </td>
                        <td className="align-middle text-center text-lg">
                          <button className="badge badge-sm bg-gradient-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddGallery></AddGallery>
    </>
  );
};

export default Gallery;
