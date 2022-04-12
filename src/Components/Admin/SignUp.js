import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
const SignUp = () => {
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
    } else if (email.length === "") {
      toast.error("email and password is required", toastOptions);
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
            alert("success");
            toast.success("Login Succussfully");
            localStorage.setItem("user", JSON.stringify(data));
            // navigate("/dashboard");
          }
        })
        .catch((err) => {
          alert("catc");
          console.log("catch", err.response.data);
          toast.error(err.response.data.message, toastOptions);
        });
      // try {
      //   const { status, data } = axios.post("http://localhost:5000/api/auth/login",{email,password})
      //   if (status === 200) {
      //     alert('try')
      //     toast.success("Login Succussfully");
      //     localStorage.setItem('user', JSON.stringify(data));
      //     navigate("/dashboard");;
      //   } else {
      //     alert('else')
      //   }
      // } catch (err) {
      //   alert()
      //   console.log(err.response.data.message,"error")

      // }
    }
    // if(handlevalidation()) {
    //   alert('if')
    //      axios.post("http://localhost:5000/api/auth/login",{email,password}).then((data) => {
    //        try {
    //        console.log(data,"data");

    //          alert('try')
    //         toast.success("Login Succussfully");
    //         localStorage.setItem('user', JSON.stringify(data));
    //         navigate("/dashboard");
    //        } catch (error) {
    //          alert()
    //           console.log(error.response.data.message,"error")
    //        }
    //       //  if(data.status === 200){

    //       //    toast.success("Login Succussfully");
    //       //    localStorage.setItem('user', JSON.stringify(data));
    //       //    navigate("/dashboard");
    //       //  }
    //       //  else {
    //       //   toast.error("Invalid Credential", toastOptions);
    //       //  }
    //     //  }).catch((err) => {

    //     //    console.log(err.response.data.message)
    //      })
    // }
  };
  //   await  axios
  //   .post("http://localhost:5000/api/auth/login", {
  //     email: email,
  //     password: password,
  //   }).then((data) =>{
  //  console.log(data)
  //  console.log(42,dat
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
    </>
  );
};

export default SignUp;
