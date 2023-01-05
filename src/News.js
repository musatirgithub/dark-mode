import { useState } from "react";
import { data } from "./data";
import SingleData from "./SingleData";

const getTheme = () => {
  let theme;
  localStorage.getItem("theme")
    ? (theme = localStorage.getItem("theme"))
    : (theme = "light-theme");
  return theme;
};

const News = () => {
  const [theme, setTheme] = useState(getTheme());

  return (
    <main>
      <button>{`${
        theme === "light-theme" ? "dark-theme" : "light-theme"
      }`}</button>
      {data.map((item) => {
        return <SingleData key={item.id} {...item} />;
      })}
    </main>
  );
};

export default News;
