import React from "react";

interface Props {
  name: string;
  onClick: () => void;
}

// Tests react/recommended rules
const Greeting = (props: Props) => {
  var count = 0; // no-var
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <button onClick={props.onClick}>Click</button>
      <img src="test.png" />
    </div>
  );
};

export default Greeting;
