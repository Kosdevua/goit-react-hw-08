import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

export const RegistrationFormForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        email: form.elements.email.value,
        name: form.elements.name.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("register success");
      })
      .catch(() => {
        console.log("register error");
      });
    form.reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input type="name" name="name" className={s.input} />
      </label>
      <label className={s.label}>
        Email
        <input type="email" name="email" className={s.input} />
      </label>
      <label className={s.label}>
        Password
        <input type="password" name="password" className={s.input} />
      </label>
      <button type="submit" className={s.button}>
        SignUp
      </button>
    </form>
  );
};
