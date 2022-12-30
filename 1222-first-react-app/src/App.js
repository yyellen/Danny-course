// eslint-disable-next-line
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Block from "./Block";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
}

export default App;
