import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { apiRegister } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthError } from "../../redux/auth/selectors";

const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Profile name is required")
    .min(2, "ім'я профілю має бути мінімум 3 символи")
    .max(50, "ім'я профілю має бути меньшим за 50 символів"),

  email: Yup.string()
    .email("Не коректна ел.адреса")
    .required("An email address is required"),

  password: Yup.string()
    .min(8, "ім'я профілю має бути мінімум 3 символи")
    .max(16, "ім'я профілю має бути меньшим за 16 символів")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const error = useSelector(selectAuthError)
  const dispatch = useDispatch();
  const INITIAL_VALUES = { name: "", email: "", password: "" };
  const handleSubmit = (values) => {
    console.log(values)
    dispatch(apiRegister(values));
   
  };

  return (
    <div>
      <h2 className={css.title}>Registration form</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={registerValidationSchema}
      >
        <Form className={css.container}>
          <label className={css.label}>
            <span>Name:</span>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="John Snow"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>

          <label className={css.label}>
            <span>Email:</span>
            <Field
              className={css.field}
              type="text"
              name="email"
              placeholder="JS@gmail.com"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>

          <label className={css.label}>
            <span>Password:</span>
            <Field
              className={css.field}
              type="text"
              name="password"
              placeholder="**********"
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>

          <button className={css.btnSubmit} type="submit">
            Register
          </button>
          {error && <p className={css.error}>{error}</p>}
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
