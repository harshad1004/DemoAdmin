import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                  <div
                    className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        "./assets/img/illustrations/illustration-signup.jpg"
                      })`,

                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                  <div className="card">
                    <div className="card card-plain">
                      <div
                        className="card-header"
                        style={{ color: " #D81B60" }}
                      >
                        <h4 className="font-weight-bolder">Sign In</h4>
                        <p className="mb-0">
                          Enter your email and password To Login
                        </p>
                      </div>
                      <div
                        className="card-body"
                        style={{ marginBottom: "50px" }}
                      >
                        <form role="form">
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" />
                          </div>
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" />
                          </div>

                          <div
                            className="text-center"
                            style={{ paddingLeft: "55%" }}
                          >
                            <Link to="/reset">
                              <span>Forgot Password?</span>
                            </Link>
                          </div>
                          <div className="text-center">
                            <button
                              type="button"
                              className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                            >
                              Admin Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;