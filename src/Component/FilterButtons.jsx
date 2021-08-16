import React from "react";
import { useDispatch } from "react-redux";
import { filters, setFilter } from "../actions";

const FilterButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="btns">
      <div className="btn">
        <input
          id="all"
          type="radio"
          value="all"
          name="filter"
          defaultChecked
          onClick={() => dispatch(setFilter(filters.SHOW_ALL))}
        />
          <label for="all">All</label>
      </div>

      <div className="btn">
        <input
          id="complete"
          type="radio"
          value="completed"
          name="filter"
          onClick={() => dispatch(setFilter(filters.SHOW_COMPLETED))}
        />
          <label for="all">Completed</label>
      </div>

      <div className="btn">
        <input
          id="incomplete"
          type="radio"
          value="incomplete"
          name="filter"
          onClick={() => dispatch(setFilter(filters.SHOW_INCOMPLETE))}
        />
          <label for="all">Incomplete</label>
      </div>
    </div>
  );
};

export default FilterButtons;
