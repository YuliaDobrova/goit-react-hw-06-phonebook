import React from "react";
import styles from "./FIlter.module.css";
import { connect } from "react-redux";
import { setFilter } from "../../redux/phonebook/phonebookActions";

const Filter = ({ value, setFilter }) => {
  return (
    <>
      <label className={styles.filterName}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={value}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </>
  );
};

export default connect(null, { setFilter: setFilter })(Filter);
