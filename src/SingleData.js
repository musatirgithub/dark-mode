import React from "react";

const SingleData = ({ id, title, date, length, description }) => {
  return (
    <article className="single-data">
      <h4>{title}</h4>
      <h5>{`Publication date: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</h5>
      <h5>{`Estimated Read Duration: ${length} mins`}</h5>
      <p>{description}</p>
    </article>
  );
};

export default SingleData;
