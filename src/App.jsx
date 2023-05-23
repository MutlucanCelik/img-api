import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Api from "./services/Api";
import ImageList from "./components/ImageList";

function App() {
  const [imgs, setImgs] = useState([]);
  const images = new Api();

  const handleSubmit = async (value) => {
    const result = await images.getImages(value);
    setImgs(result);
  };
  return (
    <div className="main">
      <Header submit={handleSubmit} />
      <ImageList myImages={imgs} />
    </div>
  );
}

export default App;
