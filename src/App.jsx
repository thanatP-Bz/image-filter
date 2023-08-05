/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect } from "react";
import TagButton from "./TagButton";
import { img } from "../src/Image";
import Navbar from "./Navbar";

function App() {
  const [tag, setTag] = useState("render");
  const [filteredImage, setFilterImage] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilterImage(img)
      : setFilterImage(img.filter((item) => item.tag === tag));
  }, [tag]);

  const handlerSetTag = () => {};

  return (
    <>
      <div>
        <Navbar>
          <TagButton name="all" handlerSetTag={setTag}></TagButton>
          <TagButton name="3d" handlerSetTag={setTag}></TagButton>
          <TagButton name="design" handlerSetTag={setTag}></TagButton>
          <TagButton name="render" handlerSetTag={setTag}></TagButton>
        </Navbar>

        {filteredImage.map((item) => (
          <div key={item.id} className="image-container">
            <img src={item.link} alt={item.tag} className="img" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
