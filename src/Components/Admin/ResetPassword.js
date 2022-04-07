import React from "react";

const ResetPassword = () => {
  return (
    <main className="main-content  mt-0">
      <div
        className="page-header align-items-start min-vh-100"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "./assets/img/illustrations/illustration-signin.jpg"
          })`,
        }}
      >
        <span className="mask bg-gradient-dark opacity-6"></span>
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div
                className="card z-index-0 fadeIn3 fadeInBottom"
                style={{ paddingBottom: "30px" }}
              >
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 className="text-white font-weight-bolder text-center ">
                      NEW CREDENTIALS
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <form
                    role="form"
                    className="text-start"
                    style={{ padding: "20px" }}
                  >
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      <label className="form-label">Retype Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    {/* <div className="form-check form-switch d-flex align-items-center mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label mb-0 ms-2"
                        for="rememberMe"
                      >
                        Remember me
                      </label>
                    </div> */}
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn bg-gradient-primary w-100 my-4 mb-2"
                      >
                        reset password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
