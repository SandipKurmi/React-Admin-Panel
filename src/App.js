import Home from './pages/home/Home'
import Login from './pages/login/Login'
import UsersList from './pages/usersList/UsersList'
import ProductsList from './pages/productsList/ProductsList'
import Single from './pages/single/Single'
import Stats from './pages/stats/Stats'
import New from './pages/new/New'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { userInputs, productInputs } from './formSource'
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";



function App() {

  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="stats" element={<Stats />} />
            <Route path='users'>
              <Route index element={<UsersList />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path='products'>
              <Route index element={<ProductsList />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
