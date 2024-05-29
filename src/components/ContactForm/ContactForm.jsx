import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form_wrapper}>
        <div>
          <label htmlFor="name">{"Name"}</label>
          <Field type="text" name="name" id="name" autoComplete="false" />
          <ErrorMessage
            name="name"
            component="span"
            className={s.error_message}
          />
        </div>
        <div>
          <label htmlFor="number">{"Number"}</label>
          <Field
            type="phone"
            name="number"
            id="number"
            autoComplete="false"
            className={s.number}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.error_message}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
