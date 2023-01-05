import React from "react";

const SingleData = ({ id, title, date, length, description }) => {
  return (
    <article className="single-data">
      <h2>{title}</h2>
      <h3>{`Publication date: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</h3>
      <h5>{`Estimated Read Duration: ${length} mins`}</h5>
      <p>{description}</p>
    </article>
  );
};

export default SingleData;
