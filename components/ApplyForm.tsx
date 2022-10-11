import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Alert from "./Alert";
import { database } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function ApplyForm({
  job,
  children,
}: {
  job: string;
  children: any;
}) {
  const [coverLetter, setCoverLetter] = useState<Blob>(new Blob());
  const [pdf, setPdf] = useState<Blob>(new Blob());
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pdf: "",
      coverLetter: "",
    },
    onSubmit: (values: any) => {
      const dbInstance = collection(database, "applicants");

      addDoc(dbInstance, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      })
        .then(() => {
          const reader = new FileReader();
          const reader2 = new FileReader();
          reader.onload = () => {
            reader2.onload = () => {
              axios.post("/api/applicant", {
                values: {
                  ...values,
                  pdf: String(reader.result).split(",")[1],
                  coverLetter: String(reader2.result).split(",")[1],
                  job,
                },
              });
            };
          };
          reader.readAsDataURL(pdf);
          reader2.readAsDataURL(coverLetter);
        })
        .then(() => {
          // formik.resetForm();
        });
    },
    validationSchema: yup.object({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      phone: yup.string().required("required"),
      email: yup.string().email().required("required"),
    }),
  });
  return (
    <div
      className="overflow-hidden bg-white py-10 px-4 sm:px-6 lg:px-8"
      style={{ background: "url(../images/form-bg.jpg)" }}
    >
      {children}
      <div className="relative mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="text-start">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100">
            Apply
          </h2>
        </div>
        <div className="contact_form mx-auto lg:w-2/3 ">
          <form
            id="contactForm"
            name="sentMessage"
            onSubmit={formik.handleSubmit}
          >
            <div className="row ">
              <div className="col-md-12">
                <div className="flex gap-4 ">
                  <div className="form-group w-1/2">
                    <input
                      className="form-control npt-l w-full"
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      autoComplete="first-name"
                      placeholder="First Name"
                    />
                    <p className="help-block text-danger">
                      {formik.errors.firstName && formik.touched.firstName ? (
                        <Alert alert={formik.errors.firstName} />
                      ) : null}
                    </p>
                  </div>
                  <div className="form-group w-1/2">
                    <input
                      className="form-control npt-r "
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      autoComplete="last-name"
                      placeholder="Last Name"
                    />
                    <p className="help-block text-danger">
                      {formik.errors.lastName && formik.touched.lastName ? (
                        <Alert alert={formik.errors.lastName!} />
                      ) : null}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="form-group w-1/2">
                    <input
                      className="form-control npt-l"
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      autoComplete="email"
                      placeholder="Email"
                    />
                    <p className="help-block text-danger">
                      {formik.errors.email && formik.touched.email ? (
                        <Alert alert={formik.errors.email} />
                      ) : null}
                    </p>
                  </div>
                  <div className="form-group w-1/2">
                    <input
                      className="form-control npt-r"
                      type="text"
                      name="phone"
                      id="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      placeholder="Your Phone"
                    />
                    <p className="help-block text-danger">
                      {formik.errors.phone && formik.touched.phone ? (
                        <Alert alert={formik.errors.phone} />
                      ) : null}
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    name="pdf"
                    id="pdf"
                    onChange={(e) => setPdf(e.currentTarget.files![0])}
                    className="form-control npt-l"
                  />
                  <p className="help-block text-danger">
                    {/* {formik.errors.message && formik.touched.message ? (
                      <Alert alert={formik.errors.message} />
                    ) : null} */}
                  </p>
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    name="coverLetter"
                    id="coverLetter"
                    onChange={(e) => setCoverLetter(e.currentTarget.files![0])}
                    className="form-control npt-l"
                  />
                  <p className="help-block text-danger">
                    {/* {formik.errors.message && formik.touched.message ? (
                      <Alert alert={formik.errors.message} />
                    ) : null} */}
                  </p>
                </div>
                <button
                  id="sendMessageButton"
                  className="sim-btn hvr-bounce-to-top m-auto btn-bg-i"
                  type="submit"
                >
                  Apply Now

                </button>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
