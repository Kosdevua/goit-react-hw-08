import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectFilter);

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
