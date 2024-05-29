import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    // className={s.container}
    <div className={s.wrapper}>
      <h1 className={s.title}>Contact book application</h1>
      <p className={s.description}>Create a username and using phone number</p>
    </div>
  );
};

export default HomePage;
