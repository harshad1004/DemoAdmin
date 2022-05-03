// import React, { useEffect, useState } from "react";
// import AddAbout from "./AddAbout";
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";
// import EditAbout from "./EditAbout";
// import { Toast } from "bootstrap";
// const About = () => {
//   const [error, setError] = useState("");
//   const [about, setAbout] = useState([]);
//   const [edit, setEdit] = useState("");
//   const token = localStorage.getItem("Token");

//   // add about us ___________________________________________________
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/aboutUs/", {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((data) => {
//         if (data.status) {
//           setAbout(data.data.aboutusdata);
//         }
//       })
//       .catch((err) => {
//         setError(err.response.data.message);
//         toast.error(error);
//       });
//   }, []);
//   const aboutDataHandler = (values) => {
//     axios
//       .post("http://localhost:5000/api/aboutUs", values, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((data) => {
//         if (data.status) {
//           toast.success(data.data.message);
//           console.log(data, "aboutdata added sucessfully");
//           console.log("about", values);
//           resetForm();
//         }
//       })
//       .catch((err) => {
//         toast.error(err.response.aboutData.Error);
//         console.log(err.response.message);
//       });
//   };

//   // delete about us_________________________________________
//   const deleteAbout = (aboutId) => {
//     axios
//       .delete(`http://localhost:5000/api/aboutUs/${aboutId}`, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((dataAbout) => {
//         if (dataAbout.status) {
//           toast.success(dataAbout.data.message);
//           axios
//             .get("http://localhost:5000/api/aboutUs/", {
//               headers: {
//                 authorization: `Bearer ${token}`,
//               },
//             })
//             .then((data) => {
//               if (data.status) {
//                 console.log(about, "about");
//                 setAbout(data.data.aboutusdata);
//               }
//             })
//             .catch((err) => {
//               setError(err.response.data.message);
//               toast.error(error);
//             });
//         }
//       })
//       .catch((err) => {
//         setError(err.response.dataAbout);
//         toast.error(error);
//       });
//   };
//   // edit about us__________________________
//   const editDataHandler = (editData) => {
//     axios
//       .patch(`http://localhost:5000/api/aboutUs/${editData._id}`, editData, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((data) => {
//         if (data.status) {
//           toast.success(data.data.message);
//         }
//       })
//       .catch((err) => {
//         setError(err.response.aboutData.Error);
//         toast.error(error);
//       });
//   };

//   return (
//     <div className="container-fluid py-4">
//       <div className="row py-4">
//         <div className="col-md-12 mt-4 ">
//           <div className="card">
//             <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
//               <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
//                 <div className="row">
//                   <div className="col-md-11">
//                     <h4 className="text-white text-capitalize ps-3">
//                       About Information
//                     </h4>
//                   </div>
//                   <div className="col-md-1 text-white text-capitalize ps-3">
//                     <i
//                       data-bs-toggle="modal"
//                       data-bs-target="#exampleModal"
//                       className="material-icons opacity-10"
//                       style={{ fontSize: "40px" }}
//                       about={about}
//                     >
//                       post_add
//                     </i>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card-body pt-4 p-3">
//               {about?.map((about) => {
//                 return (
//                   <ul className="list-group" key={about._id}>
//                     <div className="row">
//                       <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
//                         {" "}
//                         <div className="col-md-9 d-flex flex-column">
//                           <span className="mb-3 text-xl">
//                             Title:
//                             <span className="text-dark font-weight-bold ms-sm-">
//                               {about.title}
//                             </span>
//                           </span>
//                           <span className="mb-3 text-xl">
//                             Text:
//                             <span className="text-dark font-weight-bold ms-sm-2">
//                               {about.text}
//                             </span>
//                           </span>
//                           <span className="mb-3 text-xl">
//                             Address:
//                             <span className="text-dark ms-sm-2 font-weight-bold">
//                               {about.addresses}
//                             </span>
//                           </span>
//                           <span className=" mb-3 text-xl">
//                             Contact No:
//                             <span className="text-dark ms-sm-2 font-weight-bold">
//                               {about.contactNumber}
//                             </span>
//                           </span>
//                           <span className="mb-3 text-xl">
//                             Email:
//                             <span className="text-dark ms-sm-2 font-weight-bold">
//                               {about.email}
//                             </span>
//                           </span>
//                         </div>
//                         <div className="col-md-3">
//                           <div className="ms-auto text-end">
//                             <a
//                               data-bs-toggle="modal"
//                               data-bs-target="#exampleModalEdit"
//                               className="btn btn-link text-danger text-gradient mb-0"
//                               onClick={() => setEdit(about)}
//                             >
//                               <i className="material-icons text-sm me-2">
//                                 edit
//                               </i>
//                               edit
//                             </a>
//                           </div>
//                           <div className="ms-auto text-end">
//                             <a
//                               style={{ fontSize: "100%" }}
//                               className="btn btn-link text-danger text-gradient px-3 mb-0"
//                               onClick={() => deleteAbout(about._id)}
//                             >
//                               <i
//                                 style={{ fontSize: "100%" }}
//                                 className="material-icons me-2"
//                               >
//                                 delete
//                               </i>
//                               Delete
//                             </a>
//                           </div>
//                         </div>
//                       </li>
//                     </div>
//                   </ul>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <ToastContainer />
//       </div>
//       <AddAbout aboutData={aboutDataHandler}></AddAbout>
//       <EditAbout edit={edit} editData={editDataHandler}></EditAbout>
//     </div>
//   );
// };

// export default About;
import React, { useEffect, useState } from "react";
import AddAbout from "./AddAbout";
import EditAbout from "./EditAbout";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const About = () => {
  const token = localStorage.getItem("Token");
  const [about, setAbout] = useState([]);
  const [edit, setEdit] = useState("");
  const [error, setError] = useState("");

  // show about us data on about page ___________________________________________________
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/aboutUs/", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.status) {
          setAbout(data.data.aboutusdata);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        toast.error(error);
      });
  }, []);

  //add new data on about page _____________________________________

  const aboutDataHandler = (data) => {
    axios
      .post("http://localhost:5000/api/aboutUs", data, {
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
            .get("http://localhost:5000/api/aboutUs/", {
              headers: {
                authorization: `Bearer ${token}`,
              },
            })
            .then((data) => {
              if (data.status) {
                setAbout(data.data.aboutusdata);
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

  // delete about us_________________________________________
  const deleteAbout = (aboutId) => {
    axios
      .delete(`http://localhost:5000/api/aboutUs/${aboutId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((dataAbout) => {
        if (dataAbout.status) {
          toast.warn(dataAbout.data.message);
          axios
            .get("http://localhost:5000/api/aboutUs/", {
              headers: {
                authorization: `Bearer ${token}`,
              },
            })
            .then((data) => {
              if (data.status) {
                setAbout(data.data.aboutusdata);
              }
            })
            .catch((err) => {
              setError(err.response.data.message);
              toast.error(error);
            });
        }
      })
      .catch((err) => {
        setError(err.response.dataAbout);
        toast.error(error);
      });
  };

  // edit data handler _______________________________
  const editDataHandler = (editData) => {
    axios
      .patch(`http://localhost:5000/api/aboutUs/${editData._id}`, editData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.status) {
          toast.success(data.data.message);
          axios
            .get("http://localhost:5000/api/aboutUs/", {
              headers: {
                authorization: `Bearer ${token}`,
              },
            })
            .then((data) => {
              if (data.status) {
                setAbout(data.data.aboutusdata);
              }
            })
            .catch((err) => {
              setError(err.response.data.message);
              toast.error(error);
            });
        }
      })
      .catch((err) => {
        setError(err.response.message);
        toast.error(error);
      });
  };

  return (
    <div className="container-fluid py-4">
      <div className="row py-4">
        <div className="col-md-12 mt-4 ">
          <div className="card">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <div className="row">
                  <div className="col-md-11">
                    <h4 className="text-white text-capitalize ps-3">
                      About Information
                    </h4>
                  </div>
                  <div className="col-md-1 text-white text-capitalize ps-3">
                    <i
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="material-icons opacity-10"
                      style={{ fontSize: "40px" }}
                      about={about}
                    >
                      post_add
                    </i>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body pt-4 p-3">
              {about?.map((about) => {
                return (
                  <ul className="list-group" key={about._id}>
                    <div className="row">
                      <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                        {" "}
                        <div className="col-md-9 d-flex flex-column">
                          <span className="mb-3 text-xl">
                            Title:
                            <span className="text-dark font-weight-bold ms-sm-">
                              {about.title}
                            </span>
                          </span>
                          <span className="mb-3 text-xl">
                            Text:
                            <span className="text-dark font-weight-bold ms-sm-2">
                              {about.text}
                            </span>
                          </span>
                          <span className="mb-3 text-xl">
                            Address:
                            <span className="text-dark ms-sm-2 font-weight-bold">
                              {about.addresses}
                            </span>
                          </span>
                          <span className=" mb-3 text-xl">
                            Contact No:
                            <span className="text-dark ms-sm-2 font-weight-bold">
                              {about.contactNumber}
                            </span>
                          </span>
                          <span className="mb-3 text-xl">
                            Email:
                            <span className="text-dark ms-sm-2 font-weight-bold">
                              {about.email}
                            </span>
                          </span>
                        </div>
                        <div className="col-md-3">
                          <div className="ms-auto text-end">
                            <a
                              style={{ fontSize: "15px" }}
                              className="btn btn-link text-danger text-gradient mb-0"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalEdit"
                              onClick={() => setEdit(about)}
                            >
                              <i
                                className="material-icons me-2"
                                style={{ fontSize: "15px" }}
                              >
                                edit
                              </i>
                              Edit
                            </a>
                          </div>
                          <div className="ms-auto text-end">
                            <a
                              style={{ fontSize: "15px" }}
                              className="btn btn-link text-danger text-gradient px-3 mb-0"
                              onClick={() => deleteAbout(about._id)}
                            >
                              <i
                                className="material-icons  me-2"
                                style={{ fontSize: "15px" }}
                              >
                                delete
                              </i>
                              Delete
                            </a>
                          </div>
                        </div>
                      </li>
                    </div>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <AddAbout aboutData={aboutDataHandler}></AddAbout>
      <EditAbout edit={edit} editData={editDataHandler}></EditAbout>
    </div>
  );
};

export default About;
