import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = ["Click me", "Click me please", "Hit me", "Press me"];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}

      {/* //!Тоже самое, что и метод map выше//   */}
      {/* {[
        <Button onClick={incrementCount} text={texts[0]} />,
        <Button onClick={incrementCount} text={texts[1]} />,
        <Button onClick={incrementCount} text={texts[2]} />,
        <Button onClick={incrementCount} text={texts[3]} />,
      ]} */}
    </div>
  );
}

export default App;
