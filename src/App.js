import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Center from "./components/center/Center";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { UserProvider } from "./utils/UserContext";

function App() {
  let user = { name: "sanjay", age: 22, sal: 5000 };
  return (
    <UserProvider value={user}>
      <div>
        <BrowserRouter>
          <Header></Header>
          <Navbar></Navbar>
          <Center></Center>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
