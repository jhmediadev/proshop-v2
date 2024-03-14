import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="px-4">
        <main className="py-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
