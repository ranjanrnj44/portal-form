import "./App.css";
import { FormComponent } from "./Form";
import { useState } from "react";

export default function App() {
  let [show, setShow] = useState(false);
  return (
    <div className="App">
      <br />
      <h1>Portal with Form</h1>
      <br />
      <button type="button" onClick={() => setShow(!show)}>
        open
      </button>
      <FormComponent show={show} closeIt={() => setShow(false)} />
    </div>
  );
}
