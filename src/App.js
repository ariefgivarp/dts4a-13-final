import React from "react";
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import NewsList from "./containers/NewsList";

function App() {
  return (
    <div className="app">
    <NavBar />
    <NewsList />
    <Footer />
    </div>
  );
}

export default App;
