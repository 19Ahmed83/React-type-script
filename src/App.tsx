import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

function App() {

  const menuheader=[
    {
      id:1,
      link:'/home',
      text:'Home'
    },
    {
      id:2,
      link:'/search',
      text:'Search'
    },
    {
      id:3,
      link:'/products',
      text:'Products'
    },
    {
      id:4,
      link:'/prices',
      text:'Prices'
    }
  ];

  const menufooter=[
    {
      id:1,
      link:'/homes',
      text:'Homes'
    },
    {
      id:2,
      link:'/2bedroom',
      text:'2Bedroom'
    },
    {
      id:3,
      link:'3bedroom',
      text:'3Bedroom'
    },
    {
      id:4,
      link:'/4bedroom',
      text:'4Bedroom'
    }
  ];

  const menuproducts=[
    {
      id:1,
      link:'/trucks',
      text:'Trucks'
    },
    {
      id:2,
      link:'/cars',
      text:'Cars'
    },
    {
      id:3,
      link:'/semitrucks',
      text:'Semitrucks'
    },
    {
      id:4,
      link:'/ramtrukcs',
      text:'Ramtrucks'
    }
  ];

  return (
    <div className="App">
      <Header menuheader={menuheader} menufooter={menufooter} menuproducts={menuproducts}/>
      <Footer menufooter={menufooter} menuheader={menuheader}/>
      <Products   menuproducts={menuproducts} menufooter={menufooter} menuheader={menuheader}/>
    </div>
  );
}

export default App;
