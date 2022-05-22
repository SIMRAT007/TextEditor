
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  // Theme toggle
  const toggleTheme = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode has been enabled", "success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = "#1a333d";
      showAlert("Dark mode has been enabled", "success")
    }
  }



  return (
    <>
      <Router>
      <Navbar title='TextEditor' mode={mode} toggleTheme={toggleTheme} />
      <Alert alert={alert} />
      <div className='container'>
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <Textarea heading='Enter the text to start editing...' mode={mode} showAlert={showAlert} />
          </Route>
          <Route component="{NotFound}" status = {404}></Route>
        </Switch>

      </div>
      </Router>
      <Footer/>


    </>
  );
}

export default App;
