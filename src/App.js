import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { IntlProvider } from 'react-intl';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import messagesEn from './translation/en/';
import messagesFr from './translation/fr/';
import languageContext from './Context'
import './App.css';


function App() {

  const messages = {
    en: messagesEn,
    fr: messagesFr,
};

  const [language, setLanguage] = useState('fr')

  const changeLanguage = (language) => {
    if (language === 'fr') {
      setLanguage('fr')
    } else if (language === 'en') {
      setLanguage('en');  
    }
  }
 
  return (
    <div className="App">
      <languageContext.Provider value={{fr:'fr', en:'en'}}>
        <IntlProvider locale={language} messages={messages[language]}>
          <Router>
            <Navbar/>
            <Switch>
              <Route path="/about">
                <About changeLanguage={changeLanguage}/>
              </Route>
              <Route path="/works">
                <Works changeLanguage={changeLanguage}/>
              </Route>
              <Route exact path="/">
                <Home changeLanguage={changeLanguage}/>
              </Route>
            </Switch>
          </Router>     
        </IntlProvider>
        </languageContext.Provider>
    </div>
  );
}

export default App;
