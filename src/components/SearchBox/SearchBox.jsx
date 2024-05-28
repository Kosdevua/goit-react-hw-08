import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  const handleFilteredData = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={s.search_wrapper}>
      <label htmlFor="search">Find contact by name</label>
      <input
        value={searchValue}
        name="search"
        type="search"
        className={s.searchInput}
        onChange={handleFilteredData}
      />
    </div>
  );
};

export default SearchBox;
