import React from "react";
import { Formik } from "formik";
import axios from "axios";

const ContactForm = () => (
  <div>
    <Formik
      initialValues={{ name: "", phone: "", email: "", message: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        axios
          .post(
            "https://us-central1-adream-gatsby-project-form.cloudfunctions.net/sendEmail",
            values
          )
          .then((res) => {
            console.log(res);
            setSubmitting(false);
          })
          .catch((err) => {
            console.log(err);
            setSubmitting(false);
          });
        resetForm({ values: "" });
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="form"
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <span>Lorem ipsum Lorem ipsum lorem ipsum</span>
          <span>consectetur adipiscing elit. Ut auctor arcu</span>
          <span>Zostaw kontakt, zadzwonimy do Ciebie</span>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Imię i nazwisko"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Telefon"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            as="textarea"
            name="message"
            type="text"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder=" Lorem ipsum lorem ipsum"
          />

          <div className="checkBoxWrapper">
            <label>
              <input className="check" name="check" type="checkbox"></input>
              Wyrażam dobrowolną zgodę na przetwarzanie moich<br></br> danych
              osobowych
            </label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Wyślij
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default ContactForm;
