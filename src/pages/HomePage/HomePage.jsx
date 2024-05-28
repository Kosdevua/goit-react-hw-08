import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    // className={s.container}
    <div>
      <h1 className={s.title}>Welcome to the Phonebook App</h1>
      {/* className={s.description} */}
      <p>This application allows you to manage your contacts efficiently.</p>
    </div>
  );
};

export default HomePage;
