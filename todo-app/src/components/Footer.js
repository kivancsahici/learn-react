import React, { useState } from "react";
import { connect } from "react-redux";

import * as todoActions from "../redux/actions/todoActions";

const mapDispatchToProps = {
  setVisibilityFilter: todoActions.setVisibilityFilter
};

const Footer = ({
  setVisibilityFilter,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) => {
  const [buttonStatus, setActive] = useState([true, false, false]);
  return (
    <div className="footer">
      <span
        className={`${buttonStatus[0] === true ? "active" : ""}`}
        onClick={() => {
          setVisibilityFilter("SHOW_ALL");
          setActive([true, false, false]);
        }}
      >
        All
      </span>
      <span
        className={`${buttonStatus[1] === true ? "active" : ""}`}
        onClick={() => {
          setVisibilityFilter("SHOW_ACTIVE");
          setActive([false, true, false]);
        }}
      >
        Active
      </span>
      <span
        className={`${buttonStatus[2] === true ? "active" : ""}`}
        onClick={() => {
          setVisibilityFilter("SHOW_COMPLETED");
          setActive([false, false, true]);
        }}
      >
        Completed
      </span>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Footer);
