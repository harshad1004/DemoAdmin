import React from "react";

const Contact = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-7 mt-4">
          <div className="card">
            <div className="card-header pb-0 px-3">
              <h6 className="mb-0">Billing Information</h6>
            </div>
            <div className="card-body pt-4 p-3">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Oliver Liam</h6>
                    <span className="mb-2 text-xs">
                      Company Name:{" "}
                      <span className="text-dark font-weight-bold ms-sm-2">
                        Viking Burrito
                      </span>
                    </span>
                    <span className="mb-2 text-xs">
                      Email Address:{" "}
                      <span className="text-dark ms-sm-2 font-weight-bold">
                        oliver@burrito.com
                      </span>
                    </span>
                    <span className="text-xs">
                      VAT Number:{" "}
                      <span className="text-dark ms-sm-2 font-weight-bold">
                        FRB1235476
                      </span>
                    </span>
                  </div>
                  <div className="ms-auto text-end">
                    <a
                      className="btn btn-link text-danger text-gradient px-3 mb-0"
                      href="javascript:;"
                    >
                      <i className="material-icons text-sm me-2">delete</i>
                      Delete
                    </a>
                    <a
                      className="btn btn-link text-dark px-3 mb-0"
                      href="javascript:;"
                    >
                      <i className="material-icons text-sm me-2">edit</i>Edit
                    </a>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Lucas Harper</h6>
                    <span className="mb-2 text-xs">
                      Company Name:{" "}
                      <span className="text-dark font-weight-bold ms-sm-2">
                        Stone Tech Zone
                      </span>
                    </span>
                    <span className="mb-2 text-xs">
                      Email Address:{" "}
                      <span className="text-dark ms-sm-2 font-weight-bold">
                        lucas@stone-tech.com
                      </span>
                    </span>
                    <span className="text-xs">
                      VAT Number:{" "}
                      <span className="text-dark ms-sm-2 font-weight-bold">
                        FRB1235476
                      </span>
                    </span>
                  </div>
                  <div className="ms-auto text-end">
                    <a
                      className="btn btn-link text-danger text-gradient px-3 mb-0"
                      href="javascript:;"
                    >
                      <i className="material-icons text-sm me-2">delete</i>
                      Delete
                    </a>
                    <a
                      className="btn btn-link text-dark px-3 mb-0"
                      href="javascript:;"
                    >
                      <i className="material-icons text-sm me-2">edit</i>Edit
                    </a>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Ethan James</h6>
                    <span className="mb-2 text-xs">
                      Company Name:{" "}
                      <span className="text-dark font-weight-bold ms-sm-2">
                        Fiber Notion
                      </span>
                    </span>
                    <span className="mb-2 text-xs">
                      Email Address:{" "}
                      <span className="text-dark ms-sm-2 font-weight-bold">
                        ethan@fiber.com
                      </span>
                    </span>
                    <span className="text-xs">
                      VAT Number:{" "}
                      <span className="text-dark ms-sm-2 font-weight-bold">
                        FRB1235476
                      </span>
                    </span>
                  </div>
                  <div className="ms-auto text-end">
                    <a
                      className="btn btn-link text-danger text-gradient px-3 mb-0"
                      href="javascript:;"
                    >
                      <i className="material-icons text-sm me-2">delete</i>
                      Delete
                    </a>
                    <a
                      className="btn btn-link text-dark px-3 mb-0"
                      href="javascript:;"
                    >
                      <i className="material-icons text-sm me-2">edit</i>Edit
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Contact;
