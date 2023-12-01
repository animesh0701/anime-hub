import React from "react";

import useData from "../user-services/consumet-anime";
import { episode } from "../user-services/consumet-anime";

const MainSection = () => {
  const data = useData();
  return (
    <ul className="list-group">
      <h1>Users List</h1>
      {data.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between"
        >
          {item.id}
          <img src={item.image} />
        </li>
      ))}
    </ul>
  );
};

export default MainSection;
