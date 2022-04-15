import React, { useState, useId, useEffect, useRef } from "react";
import AddSlider from "./AddSlider";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  const [sliderAgain, setSliderAgian] = useState(slider);

  const sliderDataHandler = (data) => {
    console.log(data, "data line no 8");
    setSlider([...data, ...slider]);
    console.log(Array.isArray(slider), "slider");
    console.log(slider, "slider");
    setSliderAgian([...sliderAgain, ...data]);
  };
  const id = useId();
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <div className="row">
                    <div className="col-md-11">
                      <h4 className="text-white text-capitalize ps-3">
                        Slider Table
                      </h4>
                    </div>
                    <div className="col-md-1 text-white text-capitalize ps-3">
                      <i
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="material-icons opacity-10"
                        style={{ fontSize: "40px" }}
                      >
                        post_add
                      </i>
                    </div>
                    <></>
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
                          IMAGE
                        </th>
                        <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                          STATUS
                        </th>
                        <th className="text-center text-uppercase text-secondary font-weight-bolder opacity-7">
                          DELETE SLIDE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sliderAgain.map((slideItem, id) => {
                        return (
                          <tr key={id}>
                            <td className="align-middle text-center text-sm">
                              <p className="text-lg font-weight-bold mb-0">
                                {slideItem.name}
                              </p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <div>
                                <img
                                  src={slideItem.preview}
                                  className="avatar avatar-xl me-3 border-radius-lg"
                                  alt="user1"
                                />
                              </div>
                            </td>

                            <td className="align-middle text-center text-lg">
                              <span className="badge badge-sm bg-gradient-success">
                                Active
                              </span>
                            </td>
                            <td className="align-middle text-center text-lg">
                              <button className="badge badge-sm bg-gradient-danger">
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
      <AddSlider sliderData={sliderDataHandler}></AddSlider>
    </>
  );
};

export default Slider;
