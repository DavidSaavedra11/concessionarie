import React, { useState, useEffect } from 'react';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import Admin from 'pages/admin/Index';
import Clientes from 'pages/admin/Clientes';
import Productos from 'pages/admin/Productos';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'styles/styles.css';
import {DarkModeContext} from 'context/darkMode'


function App() {
const [darkMode, setDarkMode] = useState(false);
useEffect(() => {
  console.log('modo dark: ',darkMode)
}, [darkMode]);


  return (
    <div classname='App'>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <Switch>

            <Route path={['/admin', '/admin/productos', '/admin/clientes']}>
              <PrivateLayout>
                <Switch>
                  <Route path='/admin/productos'>
                    <Productos />
                  </Route>
                  <Route path='/admin/clientes'>
                    <Clientes/>
                  </Route>
                  <Route path='/admin'>
                    <Admin/>
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>


            <Route path={['/login', '/registro']}>
              <AuthLayout>
                <Switch>
                  <Route path='/login'> 
                    <Login/>
                  </Route>
                  <Route path='/registro'>
                    <Registro/>
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>

            <Route path={['/']}>
              <PublicLayout>
                <Switch>
                  <Route path='/'>
                    <Index/>
                  </Route>
                </Switch>
              </PublicLayout>
            </Route>

          </Switch>
        </Router>
      </DarkModeContext.Provider>

    </div>
  );
}

export default App;
