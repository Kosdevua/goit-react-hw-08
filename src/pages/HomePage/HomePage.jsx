import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    // className={s.container}
    <div className={s.wrapper}>
      <h1 className={s.title}>Contact book application</h1>
      <p className={s.description}>Create your own contact list</p>
    </div>
  );
};

export default HomePage;
