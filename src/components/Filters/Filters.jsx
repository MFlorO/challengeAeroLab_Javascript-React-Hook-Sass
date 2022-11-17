import React from "react";
import styles from "./Filters.module.scss";

const filter = ["Most Recent", "Lowest Price", "Highest Price"]

const Filters = ({filters, setFilters}) => {

  return (
    <div className={styles.container}>
      <h5>Sorty By:</h5>
      <div className={styles.filter}>
       {filter.map(f => (
         <div key={f} >
           <button key={f} onClick={ () => setFilters(f) } className={f === filters ? styles.buttonActive : styles.button}>{f}</button>
         </div>
       ))}
      </div>
    </div>
  );
};

export default Filters;
