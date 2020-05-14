import React, {useState, useEffect} from 'react';
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

const [language, setLanguage] = useState('fr');

useEffect(() => {
  localStorage.setItem('langue', JSON.stringify(language))
}, [language])

useEffect(() => {
  const localLanguage = localStorage.getItem('lang');
  if (localLanguage)
    setLanguage(localLanguage);
}, []);

 

  const changeLanguage = (language) => {
    if (language === 'fr') {
      setLanguage('fr')
      localStorage.setItem('lang', 'fr')
    } else if (language === 'en') {
      setLanguage('en');  
      localStorage.setItem('lang', 'en')
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
                <About changeLanguage={changeLanguage} language={language}/>
              </Route>
              <Route path="/works">
                <Works changeLanguage={changeLanguage} language={language}/>
              </Route>
              <Route exact path="/">
                <Home changeLanguage={changeLanguage} language={language}/>
              </Route>
            </Switch>
          </Router>     
        </IntlProvider>
        </languageContext.Provider>
    </div>
  );
}

export default App;
