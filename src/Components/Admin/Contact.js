import React from "react";

const Contact = () => {
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-middle text-center text-sm">
                        <p className="text-lg font-weight-bold mb-0">1</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <p className="text-lg font-weight-bold mb-0">
                          dhara khojiji
                        </p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <p className="text-lg font-weight-bold mb-0">
                          dhara khojiji@gmail.com
                        </p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <p className="text-lg font-weight-bold mb-0">
                          never give up
                        </p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <p className="text-lg font-weight-bold mb-0">
                          never give up
                        </p>
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

export default Contact;
