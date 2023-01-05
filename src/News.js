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

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <main>
      <button onClick={toggleTheme}>{`${
        theme === "light-theme" ? "dark-theme" : "light-theme"
      }`}</button>
      {data.map((item) => {
        return <SingleData key={item.id} {...item} />;
      })}
    </main>
  );
};

export default News;
