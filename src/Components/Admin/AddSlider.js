import React, { useState } from "react";

const AddSlider = (props) => {
  const [slider, setSlider] = useState({
    image: "",
  });
  const sliderAddHandler = () => {
    console.log("slider from addslider", slider);
    props.sliderData(slider);
  };
  const handleChnage = (e) => {
    e.preventDefault();
    console.log(e.target.files[0].name, "e file");
    setSlider(e.target.files[0]);
  };
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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>Add Image</h6>
              <input onChange={handleChnage} type="file" name="image"></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={sliderAddHandler}
              >
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

export default AddSlider;
