import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Не коректна ел.адреса")
    .required("An email address is required"),

  password: Yup.string()
    .min(8, "ім'я профілю має бути мінімум 3 символи")
    .max(16, "ім'я профілю має бути меньшим за 16 символів")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = { email: "", password: "" };
  const handleSubmit = (values) => {
    dispatch(apiLogin(values));
    
  };

  return (
    <div>
      <h2 className={css.title}>Registration form</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        <Form className={css.container}>
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
            Login
          </button>
          {error && <p className={css.error}>{error}</p>}
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm