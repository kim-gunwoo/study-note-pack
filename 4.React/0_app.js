import logo from "./logo.svg";
import "./App.css";

const data = [
  {
    title: "node",
    value: 0,
  },
  {
    title: "react",
    value: 1,
  },
];

const Head = (props) => <h1>{props.title}</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data.map((item) => (
          <>
            <p key={item.value}>
              {item.title},{item.value}
            </p>
          </>
        ))}
      </header>
      <Head title="this is a title" />
    </div>
  );
}

export default App;

//

import React from "react";

const Loading = () => <div>Loading ...</div>;

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  comment() {
    const con = 1;
    const res = con > 0 ? true : false;
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    return;
  }
}

//

import React from "react";

const Loading = () => <div>Loading ...</div>;

class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  comment() {
    const con = 1;
    const res = con > 0 ? true : false;
    const and = loading && <div>loading</div>;
  }

  render() {
    const { loading } = this.state;
    // return <>{loading ? <Loading /> : <div>webpage</div>}</>;
    return <>{loading && <Loading />}</>;
  }
}
