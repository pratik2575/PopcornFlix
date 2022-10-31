// import Navbar from "component/Navbar"
import Movies from "component/Movies"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieDetails from 'component/MovieDetails';
import 'assets/main.css'
import HomePage from "component/HomePage";
import Login from "component/login/Login";
import SignUp from "component/login/SignUp";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          <Routes>
            {/* -----------------------Login/SignUp---------------- */}
            <Route exact path="/" element={<SignUp/>} />
            <Route exact path="/Login" element={<Login/>} />
            {/* --------------------Type--------------------> */}
            <Route exact path="/movies" element={<Movies key="movies" type="movies" />} />
            <Route exact path="/series" element={<Movies key="series" type="series" />} />
            {/* ---------------------MovieDetails-------------- */}
            <Route exact path="/MovieDetails" element={<MovieDetails />} />
            {/* ======================HomePage========================= */}
            <Route exact path="/homePage" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
