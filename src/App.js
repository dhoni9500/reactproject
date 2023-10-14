import logo from './logo.svg';
import './App.css';
import MyContext from './context';
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function App() {
  const [selectedUser,setSelectedUser]=useState("venkat")
  return (
    <MyContext.Provider value={{selectedUser}}>
        <Header/>
        <Content/>
        <Footer/>
    </MyContext.Provider>
  );
}

export default App;
