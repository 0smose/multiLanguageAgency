import React from 'react';
import {FormattedMessage} from 'react-intl';
import LanguageContext from '../Context';



const About = ({changeLanguage}) => {
  
    return (
        <div>
             <button style={{width: '118.26px', backgroundColor: '#f1f1f1'}} value="en" onClick={e => changeLanguage(e.target.value)}>En </button><br/>
             <button style={{width: '118.26px', backgroundColor: '#f1f1f1'}} value="fr" onClick={e => changeLanguage(e.target.value)}>Fr </button>
            <h1>
                <FormattedMessage id="about.title"/>
            </h1>
            <p> 
                <FormattedMessage id="about.content"/>
            </p>
        </div>
    )
}

export default About;