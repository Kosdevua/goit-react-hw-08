import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too long")
      .trim(),
    number: yup
      .string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too long")
      .trim(),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form className={s.form_wrapper}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage
          className={s.error_message}
          name="name"
          component="span"
        />
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" />
        <ErrorMessage
          className={s.error_message}
          name="number"
          component="span"
        />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
