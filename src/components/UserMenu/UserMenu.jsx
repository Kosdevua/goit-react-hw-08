import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) return null;
  return (
    //className={s.userMenu}
    <div className={s.wrapper}>
      <span className={s.user_name}>Welcome, {user.name}.</span>
      <button className={s.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
