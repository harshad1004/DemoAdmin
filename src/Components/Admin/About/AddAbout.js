import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validate = (values) => {
  const errors = {};
  const phoneno = /^\d{10}$/;

  if (!values.title) {
    errors.title = "Feild is Required";
  } else if (values.title.length > 20) {
    errors.title = "Must be 20 characters or less";
  }

  if (!values.text) {
    errors.text = "Feild is Required";
  } else if (values.text.length > 20) {
    errors.text = "Must be 20 characters or less";
  }
  if (!values.addresses) {
    errors.addresses = "Feild is Required";
  } else if (values.addresses.length > 70) {
    errors.addresses = "Must be 70 characters or less";
  }
  if (!values.contactNumber) {
    errors.contactNumber = "Can not be Blank contact No";
  } else if (values.contactNumber.length !== 10) {
    errors.contactNumber = "Must be 10 digit";
  }

  if (!values.email) {
    errors.email = "Feild is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const AddAbout = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("Token");
  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
      addresses: "",
      contactNumber: "",
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      props.aboutData(values);
      navigate("/about");
      resetForm();

      document
        .getElementById("exampleModal")
        .classList.remove("show", "d-block");
      document
        .querySelectorAll(".modal-backdrop")
        .forEach((el) => el.classList.remove("modal-backdrop"));
    },
  });

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
                Add New About Us
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title" className="col-form-label">
                    Title
                  </label>
                  <input
                    name="title"
                    id="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    style={{ border: "1px solid" }}
                    type="text"
                    className="form-control"
                  />
                </div>
                {formik.errors.title ? (
                  <div style={{ color: "red" }}>{formik.errors.title}</div>
                ) : null}
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Text
                  </label>
                  <input
                    name="text"
                    id="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.text}
                    style={{ border: "1px solid" }}
                    type="text"
                    className="form-control"
                  />
                </div>
                {formik.errors.text ? (
                  <div style={{ color: "red" }}>{formik.errors.text}</div>
                ) : null}

                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Address
                  </label>
                  <textarea
                    name="addresses"
                    id="addresses"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.addresses}
                    rows={3}
                    style={{ border: "1px solid" }}
                    className="form-control"
                  />
                </div>
                {formik.errors.addresses ? (
                  <div style={{ color: "red" }}>{formik.errors.addresses}</div>
                ) : null}

                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Contact No
                  </label>
                  <input
                    name="contactNumber"
                    id="contactNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contactNumber}
                    style={{ border: "1px solid" }}
                    type="telephone"
                    className="form-control"
                  />
                </div>
                {formik.errors.contactNumber ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.contactNumber}
                  </div>
                ) : null}
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={{ border: "1px solid" }}
                    type="email"
                    className="form-control"
                  />
                </div>
                {formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                      !(formik.isValid && formik.dirty && formik.handleSubmit)
                    }
                  >
                    Add
                  </button>
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddAbout;
