import React from "react";

const Filter = ({ value, filterHandle }) => (
  <div>
    Find countries: <input value={value} onChange={filterHandle} />
  </div>
);

export default Filter;
