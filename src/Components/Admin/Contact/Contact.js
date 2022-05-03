import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [contact, setContact] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("Token");

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/contactUs",

        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        if (data.status) {
          setContact(data.data.contactusdata);
        }
      })
      .catch((err) => {
        setError(err.response.data);
        toast.error(error);
      });
  }, []);

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:5000/api/contactUs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.status) {
          toast.warn(data.data.message);
          axios
            .get(
              `http://localhost:5000/api/contactUs`,

              {
                headers: {
                  authorization: `Bearer ${token}`,
                },
              }
            )
            .then((data) => {
              if (data.status) {
                setContact(data.data.contactusdata);
              }
            })
            .catch((err) => {
              setError(err.response.data);
              toast.error(error);
            });
        }
      })
      .catch((err) => {
        setError(err.response.data);
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
                      Contact Information
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pt-4 p-3">
              {contact.map((contact, index) => {
                return (
                  <ul className="list-group" key={contact._id}>
                    <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                      <div className="d-flex flex-column">
                        <span className="mb-2 text-xs">
                          ID:
                          <span className="text-dark font-weight-bold ms-sm-2">
                            {index + 1}
                          </span>
                        </span>
                        <span className="mb-2 text-xs">
                          Name:
                          <span className="text-dark font-weight-bold ms-sm-2">
                            {contact.name}
                          </span>
                        </span>
                        <span className="mb-2 text-xs">
                          Email Address:
                          <span className="text-dark ms-sm-2 font-weight-bold">
                            {contact.email}
                          </span>
                        </span>
                        <span className="text-xs mb-2">
                          Subject:
                          <span className="text-dark ms-sm-2 font-weight-bold">
                            {contact.subject}
                          </span>
                        </span>
                        <span className="mb-2 text-xs">
                          message:
                          <span className="text-dark ms-sm-2 font-weight-bold">
                            {contact.message}
                          </span>
                        </span>
                      </div>
                      <div className="ms-auto text-end">
                        <a
                          style={{ fontSize: "100%" }}
                          className="btn btn-link text-danger text-gradient px-3 mb-0"
                          onClick={() => deleteContact(contact._id)}
                        >
                          <i
                            className="material-icons  me-2"
                            style={{ fontSize: "100%" }}
                          >
                            delete
                          </i>
                          Delete
                        </a>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
