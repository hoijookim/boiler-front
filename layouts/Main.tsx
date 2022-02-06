import React from 'react';
import MainNavbar from '../components/Navbars/MainNavbar';

const Main = ({ children }: any) => {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
};

export default Main;
