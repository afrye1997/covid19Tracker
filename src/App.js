import React from 'react';
import './App.css';
import Home  from './Pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ComparerPage from './Pages/Comparer';



function App() {
  return (

    <div> 
      <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Compare" component={ComparerPage} />
          </div>
     </Router>
    </div> 
  
  );
}

export default App;