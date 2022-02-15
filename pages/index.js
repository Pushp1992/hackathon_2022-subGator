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
