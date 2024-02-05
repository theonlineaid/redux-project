// Breadcrumbs.js
import React from 'react';
import { useLocation, Link, Routes, Route } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div style={{textAlign: 'center'}}>
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name}>
            {' / '}
            {!isLast ? (
              <Link to={routeTo}>{name}</Link>
            ) : (
              name
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
