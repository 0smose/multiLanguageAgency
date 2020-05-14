import React from 'react';
import {FormattedMessage} from 'react-intl';
import LanguageContext from '../Context';
import imgFr from "../assets/img/fr.png"
import imgEn from "../assets/img/en.png"



const Home = ({changeLanguage, language}) => {
    let imgFlag;
    let name;

    language === 'fr' ? imgFlag = imgEn : imgFlag = imgFr; 
    language === 'fr' ? name = 'en' : name = 'fr';
  
    return (
        <LanguageContext.Consumer>
            {value => (
        <div>
            <img src={imgFlag} style={{width:'50px', height:'auto'}} name={name} onClick={e => changeLanguage(e.target.name)}></img>
            <h1>
                <FormattedMessage id="home.title"/>
            </h1>
            <p> 
                <FormattedMessage id="home.content"/>
            </p>
        </div>
            )}
        </LanguageContext.Consumer>
    )
}

export default Home;