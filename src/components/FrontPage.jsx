import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Mid from './Mid';
import Black from './Black';
import Feed from './Feed';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

export default function FrontPage() {
  return (
    <>

    <Header></Header>
    <Mid></Mid>
    <Black></Black>
    <Feed></Feed>
    <Footer></Footer>
    
    </>
  )
}
