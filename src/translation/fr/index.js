import about from './about.json';
import home from './home.json';
import works from './works.json';
import studycases from './studycases.json';


const fr = {
    ...about, ...home, ...works, ...studycases,//On concatène tous nos objets JSON en un seul
};


export default fr;