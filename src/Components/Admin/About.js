import React, { useState } from "react";
import AddAbout from "./AddAbout";

const About = () => {
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
                        About Table
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
                          name
                        </th>
                        <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                          Description
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
                            <div>
                              <img
                                src="../assets/img/team-2.jpg"
                                className="avatar avatar-xl me-3 border-radius-lg"
                                alt="user1"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <p className="text-lg font-weight-bold mb-0">
                            dhara khojiji
                          </p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <p className="text-lg font-weight-bold mb-0">
                            never give up
                          </p>
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
      <AddAbout></AddAbout>
    </>
  );
};

export default About;
