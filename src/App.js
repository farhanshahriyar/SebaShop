import React from "react";
import Headers from "./Components/Headers";
import { Container } from "react-bootstrap"; //7:35
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Headers/>
      <main>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </> 
  );
}

export default App;
