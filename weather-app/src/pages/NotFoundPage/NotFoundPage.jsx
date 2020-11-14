import React from "react";
import { Link } from "react-router-dom";
//import { Test } from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/main">Volver a Main</Link>
      Not Found
    </div>
  );
};

export default NotFoundPage;
