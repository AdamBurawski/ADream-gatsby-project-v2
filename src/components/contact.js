import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { check } from "prettier";

const ContactForm = () => (
  <div>
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        message: "",
        check: false,
      }}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Podaj swój e-mail";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.name) {
          errors.name = "Podaj swoje imię";
        }
        if (!values.phone) {
          errors.phone = "Podaj swoj nr telefonu";
        }
        if (!values.message) {
          errors.message = "Uzupełnij treść wiadomości";
        }
        if (!values.check) {
          errors.check = "Pole wymagane";
        }
        return errors;
      }}
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
        setTimeout(() => {
          alert("Twoja wiadomość została wysłana");
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
          {errors.name && touched.name && errors.name}
          <input
            name="phone"
            type="tel"
            placeholder="Telefon"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone && errors.phone}
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
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
          {errors.message && touched.message && errors.message}

          <div className="checkBoxWrapper">
            <label>
              <input
                className="check"
                name="check"
                type="checkbox"
                onChange={handleChange}
                checked={values.check}
              ></input>
              Wyrażam dobrowolną zgodę na przetwarzanie moich<br></br> danych
              osobowych
            </label>
            {errors.check && touched.check && errors.check}
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
