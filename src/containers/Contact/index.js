import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Formik } from "formik";

export default function Contact() {
  return (
    <>
      <header>
        {/* NAV COMPONENT */}
        <Navbar />
      </header>
      <main style={{ textAlign: "center", margin: "11px 0" }}>
        {/* HEADER COMPONENT */}
        {/* FORM  */}
        <h6
          style={{
            textAlign: "center",
            margin: "0 0px",
            fontWeight: "inherit",
            fontSize: "15px",
          }}
        >
          Dear Sumant,
        </h6>
        <Formik
          initialValues={{ message: "", name: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.email = "";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.name = "Invalid name address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <textarea
                style={{ width: "50vw", height: "50vh" }}
                type="text"
                name="Message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && errors.message}
              <h6
                style={{
                  textAlign: "left",
                  margin: "0 308px",
                  fontWeight: "inherit",
                  fontSize: "15px",
                }}
              >
                Best,
              </h6>
              <br />
              <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                enterKeyHint="Your email"
              />
              {errors.email && touched.email && errors.email}
              <br />
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  color: "grey",
                  backgroundBlendMode: true,
                  background: "transparent",
                  padding: "5px",
                  margin: "5px 0",
                }}
              >
                Send email
              </button>
            </form>
          )}
        </Formik>
        <p
          style={{
            textAlign: "right",
            fontWeight: "inherit",
            fontSize: "11px",
            margin: "0 5px",
            color: "grey",
          }}
        >
          Or find me at{" "}
          <a href="{{sumanttulshibagwale@gmail.com}}">
            sumanttulshibagwale@gmail.com
          </a>
          .
        </p>
      </main>
      <footer>
        {/* FOOTER COMPONENT */}
        <Footer />
      </footer>
    </>
  );
}
