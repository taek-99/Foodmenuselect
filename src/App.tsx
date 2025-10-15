import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Layout from "./Layout";
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Pages/Login";
import FoodMap from "./Pages/FoodMap";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/foodmap/:name" element={<FoodMap/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
