import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";


import { ToastContainer, toast } from "react-toastify";
const SignUp = () => {
  const  {user, login} =  useContext(UserContext)
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toastOptions = {
    position: "bottom-center",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const notify = () => toast("Wow so easy!");
  const handlevalidation = () => {
    if (password === "") {
      toast.error("password is Required", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("email   is required", toastOptions);
      return false;
    }
    return true;
  };
  const SignInHandler = (event) => {
    event.preventDefault();

    if (handlevalidation()) {
      axios
        .post("http://localhost:5000/api/auth/login", { email, password })
        .then(({ status, data }) => {
          if (status === 200) {
           //lert("success");
           console.log(data)
            toast.success("Login Succussfully");
            login()
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/dashboard");
          }
        })
        .catch((err) => {
         // alert("catc");
          console.log("catch", err.response.data);
          toast.error(err.response.data.message, toastOptions);
        });
    }
  };

  return (
    <div className="container">
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
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
                {/* <div className="col-md-6 d-sm ms-auto h-100 pe-0 ms-auto"> */}
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                  <div className="card" style={{ padding: "36px" }}>
                    <div className="card card-plain">
                      <div
                        className="card-header"
                        style={{ color: " #D81B60" }}
                      >
                        <h4 className="font-weight-bolder">Sign In</h4>
                        {/* <p className="mb-0">
                          Enter your email and password To Login
                        </p> */}
                      </div>
                      <div
                        className="card-body"
                        style={{ marginBottom: "50px" }}
                      >
                        <form role="form" onSubmit={SignInHandler}>
                          {/* <div className="input-group input-group-outline mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                          </div> */}
                          <label className="form-label">Email</label>
                          <div className="input-group input-group-outline mb-3">
                            <input
                              type="email"
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <label className="form-label">Password</label>
                          <div className="input-group input-group-outline mb-3">
                            <input
                              type="password"
                              className="form-control"
                              onChange={(e) => setPassword(e.target.value)}
                            />
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
                              type="submit"
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
      <ToastContainer />
    </div>
  );
};

export default SignUp;
