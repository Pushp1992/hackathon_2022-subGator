import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Route } from 'react'
import LandingPage from '../components/landing-page';

const { useEffect } = require('react');
const Router = require('next/router');

const Main = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

module.exports = Main;

// const Main = () => {
//   useEffect(() => {
//     const { pathname } = Router
//     if (pathname === '/') Router.push('/home');
//   }, []);
//   return null;
// };



// const Home = () => {
//   useEffect(() => {
//     const { pathname } = Router
//     if (pathname === '/') Router.push('/login')
//   }, [])
//   return null

// }
// export default Home