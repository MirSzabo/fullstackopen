import React, { useContext } from "react";
import { userListContext } from "../App";

const SearchField = () => {
  const { input, handleSearch } = useContext(userListContext);

  return (
    <>
      <form>
        filter shown with
        <input
          type="text"
          value={input}
          placeholder="User name"
          onChange={handleSearch}
        />
      </form>
    </>
  );
};

export default SearchField;
