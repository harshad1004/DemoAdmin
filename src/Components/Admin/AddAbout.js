import React from "react";

const AddAbout = () => {
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
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Image
                  </label>
                  <input
                    // style={{ border: "1px solid" }}
                    type="file"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Description
                  </label>
                  <input
                    style={{ border: "1px solid" }}
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
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

export default AddAbout;
