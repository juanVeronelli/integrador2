import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import MovieDetail from "./components/MovieDetail"

function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/movie/:id" element={<MovieDetail/>} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default Router