import React, { useState, useEffect } from "react";
import axios from "axios";
const Contact = () => {
  const [contact, setContact] = useState([]);
  const token = localStorage.getItem("Token");
  //console.log(token, "token");
  useEffect(() => {
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
       console.log("response", data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  //console.log(contact, "contact");
  const DeleteContact = () => {
    // console.log()
  };
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
                      Contact Information
                    </h4>
                  </div>
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
                        Name
                      </th>
                      <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                        email
                      </th>
                      <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                        subject
                      </th>
                      <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                        Message
                      </th>
                      <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contact.map((contact, index) => {
                    
                      return (
                        <tr>
                          <td className="align-middle text-center text-sm">
                            <p className="text-lg font-weight-bold mb-0">
                              {index}
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <p className="text-lg font-weight-bold mb-0">
                              {contact.name}
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <p className="text-lg font-weight-bold mb-0">
                              {contact.email}
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <p className="text-lg font-weight-bold mb-0">
                              {contact.subject}
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm ">
                            <p className="text-lg font-weight-bold mb-0 ">
                              {contact.message}
                            </p>
                          </td>
                          <td className="align-middle text-center text-lg">
                            <button
                              className="badge badge-sm bg-gradient-danger"
                              type="submit"
                              onClick={DeleteContact}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
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

export default Contact;
