import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Components/Headers";
import { Container } from "react-bootstrap"; 
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Headers/>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact/>
          </Routes>
          <Routes>
            <Route path="/product/:id" element={<ProductScreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
