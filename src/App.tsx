import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import SubNav from "./components/subnav";
import Overview from "./components/overview";
import Program from "./components/program";
import Value from "./components/value";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SubNav />
      <Overview />
      <Program />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
