import React from 'react';
import Menu from '../components/Menu/Menu';
import TitlePage from '../components/TitlePage/TitlePage';
import MyContacts from '../components/MyContacts/MyContacts';

function Contacts () {
  return (
    <>
      <TitlePage title="Зв'язатись"/>
      <MyContacts />
      <Menu />
    </>
  );
}

export default Contacts;
