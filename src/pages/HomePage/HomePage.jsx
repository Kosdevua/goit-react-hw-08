import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to the Phonebook Application</h1>
      <p className={s.description}>
        This application allows you to manage your contacts efficiently.
      </p>
    </div>
  );
};

export default HomePage;
