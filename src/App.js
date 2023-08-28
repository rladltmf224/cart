import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import axios from "axios"; // 설치 후 import

class App extends Component {
  state = {
    loading: false,
    ItemList: [],
  };
  loadItem = async () => {
    axios
      .get("./SearchJson.json")
      .then(({ data }) => {
        this.setState({
          loading: true,
          ItemList: data.Item,
        });
      })
      .catch((e) => {
        // API 호출이 실패한 경우
        console.error(e); // 에러표시
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code>
        </p>
      </div>
    );
  }
}
export default App; //외부에서 import로 불러오기 위해 export
