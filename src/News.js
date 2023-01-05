import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <div className="headers">
        <h1>Breaking News</h1>
        <button
          onClick={toggleTheme}
          className={`${theme === "light-theme" ? "btn" : "dark-btn"}`}
        >{`${theme === "light-theme" ? "dark-theme" : "light-theme"}`}</button>
      </div>
      {data.map((item) => {
        return <SingleData key={item.id} {...item} />;
      })}
    </main>
  );
};

export default News;
