import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Components/Headers";
import { Container } from "react-bootstrap"; 
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ErrorScreen from "./screens/ErrorScreen";
import AdminScreen from "./screens/AdminScreen";
import MovieScreen from "./screens/MovieScreen";
import WebseriesScreen from "./screens/WebseriesScreen";
import UpComingScreen from "./screens/UpComingScreen";
import RequestScreen from "./screens/RequestScreen";
import FaqScreen from "./screens/FaqScreen";
import WebSeriesList from "./screens/WebSeriesList";
import DocumentoryListScreen from "./screens/DocumentoryListScreen";
import MovieListScreen from "./screens/MovieListScreen";
import ShortListScreen from "./screens/ShortListScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";


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
          <Routes>
            <Route path="/errorpage" element={<ErrorScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/web-series" element={<WebseriesScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/movie" element={<MovieScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/up-coming" element={<UpComingScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/request" element={<RequestScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/faq" element={<FaqScreen/>}/>
          </Routes>

          <Routes>
            <Route path="/webserieslist" element={<WebSeriesList/>}/>
          </Routes>
          <Routes>
            <Route path="/documentorylist" element={<DocumentoryListScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/movielist" element={<MovieListScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/shortfilmlist" element={<ShortListScreen/>}/>
          </Routes>

          <Routes>
            <Route path="/login" element={<LoginScreen/>}/>
          </Routes>
          <Routes>
            <Route path="/register" element={<RegisterScreen/>}/>
          </Routes>
          

          <Routes>
            <Route path="/dashboard" element={<AdminScreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
