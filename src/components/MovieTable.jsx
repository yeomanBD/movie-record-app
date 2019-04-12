import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const MovieTable = () => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default MovieTable;
