import React from 'react';
import {FormattedMessage} from 'react-intl';
import LanguageContext from '../Context';
import imgFr from "../assets/img/fr.png"
import imgEn from "../assets/img/en.png"
import { Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import Worksbar from "../components/Worksbar";
import StudyCase from "../components/studycases/studycases";

const Works = ({changeLanguage, language}) => {

    let imgFlag;
    let name;

    language === 'fr' ? imgFlag = imgEn : imgFlag = imgFr; 
    language === 'fr' ? name = 'en' : name = 'fr';
  
    let { path } = useRouteMatch();
    console.log(path);
  
    return (
      <div>
        <div>
        <img src={imgFlag} style={{width:'50px', height:'auto'}} name={name} onClick={e => changeLanguage(e.target.name)}></img>
          <h1>
            <FormattedMessage id="works.title" />
          </h1>
          <p>
            <FormattedMessage id="works.content" />
          </p>
        </div>
        <div>
          <Worksbar />
          <Switch>
            <Route path={`${path}/:studyCaseId`}>
              <StudyCase />
            </Route>
          </Switch>
        </div>
      </div>
    );
  };
  
  export default Works;