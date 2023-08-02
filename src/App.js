import "./styles.css";
import { useEffect, useState } from "react";
import MyCheckBox from "./MyCheckBox";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (text === "") return;
    setItems([{ text: text, checked: false }, ...items]);
    setText("");
  };

  const handleCheckChange = (e, i) => {
    console.log("check", e.target.checked);
    let newItems = [...items];
    let { text, checked } = newItems[i];
    console.log(text, checked);
    newItems[i] = { text, checked: !checked };
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="form">
        <input
          placeholder="Enter the task"
          className="inputBox"
          value={text}
          onChange={(e) => handleOnchange(e)}
        />
        <button className="button" onClick={(e) => handleClick(e)}>
          Create
        </button>
      </form>
      <div>
        <ul>
          {items &&
            items.map((item, i) => {
              return (
                <li key={i}>
                  <div>
                    <span className={item.checked ? "cross" : ""}>
                      {item.text}
                    </span>
                    <MyCheckBox
                      checked={item.checked}
                      onClick={(e) => handleCheckChange(e, i)}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
