import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const FormValidation = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Name is required"),
  number: Yup.string()
    .matches(/^[\d\s\+\-\(\)]*$/, "Number cannot contain letters!")
    .min(5, "Too short!")
    .max(15, "Too Long!")
    .required(),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(7),
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormValidation}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field id={nameFieldId} name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field id={numberFieldId} name="number" />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
