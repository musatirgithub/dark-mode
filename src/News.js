import React from "react";
import { data } from "./data";
import SingleData from "./SingleData";

const News = () => {
  return (
    <main>
      {data.map((item) => {
        return <SingleData key={item.id} {...item} />;
      })}
    </main>
  );
};

export default News;
