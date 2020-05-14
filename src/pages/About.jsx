import React from 'react';
import {FormattedMessage} from 'react-intl';
import LanguageContext from '../Context';
import imgFr from "../assets/img/fr.png"
import imgEn from "../assets/img/en.png"



const About = ({changeLanguage, language}) => {
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
                <FormattedMessage id="about.title"/>
            </h1>
            <p> 
                <FormattedMessage id="about.content"/>
            </p>
        </div>
            )}
        </LanguageContext.Consumer>
    )
}

export default About;