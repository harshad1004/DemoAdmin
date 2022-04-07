import React from "react";

const Slider = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <div className="row">
                  <div className="col-md-11">
                    <h4 className="text-white text-capitalize ps-3">
                      Slider Table
                    </h4>
                  </div>
                  <div className="col-md-1 text-white text-capitalize ps-3">
                    <i className="material-icons opacity-10">post_add</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Id
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Image
                      </th>

                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th>

                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">1</p>
                      </td>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-2.jpg"
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user1"
                            />
                          </div>
                        </div>
                      </td>

                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-success">
                          Active
                        </span>
                      </td>

                      <td className="align-middle">
                        <a
                          href="javascript:;"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Delete
                        </a>
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
  );
};

export default Slider;
