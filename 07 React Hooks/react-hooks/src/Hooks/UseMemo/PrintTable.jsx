import React, { useEffect, useState } from "react";

const PrintTable = ({ calculateTable }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    console.log("Print Table");
    setRows(calculateTable());
  }, [calculateTable]);

  return rows.map((row, index) => <p key={index}>{row}</p>);
};

export default PrintTable;
