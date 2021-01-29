import React from "react";

// Statelsess : 상태없는
// State : 상태 State Class

class PropsState extends React.Component {
  constructor(props) {
    super(this.props);
    this.state = {
      props,
      lang: "js",
      date: new Date(),
    };
  }
  render() {
    const { lang, date } = this.state;
    return <>{lang}</>;
  }
}

// Event

function App() {
  const handleClick = (param) => {
    e.preventDefault();
    console.log("button is clicked");
    console.log(param);
  };

  const newHandleClick = () => {
    e.preventDefault();
    console.log("wrapper is clicked");
  };

  return (
    <div onClick={newHandleClick}>
      <button onClick={handleClick}>button</button>
      <button onClick={() => handleClick("test")}>button</button>
    </div>
  );
}

// Key warning

function App() {
  const iter = [0, 1, 2];
  return (
    <div>
      {iter.map((item) => (
        <h1 key={item}>item</h1>
      ))}
    </div>
  );
}

export default App;

// setState

import React from "react";

class Timer extends React.Component {
  constructor(props) {
    this.state = {
      time: new Date(),
      front: "react",
    };
  }

  componentDidMount() {
    this.tick();
    this.setState((prevState) => console.log(prevState));
    this.setState({ front: "react.js" }, () => {
      console.log(this.state);
    });
  }

  tick() {
    this.setState(
      {
        time: new Date(),
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(this.state);
  }

  render() {
    const { time } = this.state;
    return <div>{time.date.toLocalerTimeString()}</div>;
  }
}

export default App;
