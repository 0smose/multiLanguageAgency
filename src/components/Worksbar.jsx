import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import works from "./studycases/studycase";

const Worksbar = () => {
  let { url } = useRouteMatch();
  return (
    <>
      <ul style={{listStyle:" none"}}>
          {works.map(({ id, slug, name }) => (
            <li key={id}>
              <Link to={`${url}/${slug}-study-case`}>{name}</Link>
            </li>
          ))}
        </ul>
    </>
  );
};
export default Worksbar;