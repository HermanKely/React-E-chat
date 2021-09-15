import React from 'react';
import Premier from './component/premier';
import Message from './component/Message';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import { Login } from './component/Login';
import { Inscription } from './component/Inscription';
import { Actif } from './component/actif';


function App() {
  return (
      <Router>
        <div>
          <Route exact path='/Premier' component={Premier}/>
          <Route  path='/Message' component={Message}/>
          <Route exact path='/' component={Login}/>
          <Route exact path='/Inscription' component={Inscription}/>
          <Route exact path='/Actif' component={Actif}/>
        </div>
      </Router>
  );
}

export default App;
