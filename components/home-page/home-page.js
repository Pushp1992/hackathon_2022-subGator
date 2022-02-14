const React = require('react');
const classNames = require('classnames');
const WithAuth = require('../login/helper/withAuth');
const Header = require('../header');

const styles = require('./home-page.module.css');

const HomePage = () => {
    return (
        <div className={classNames("md:fluid md:mx-auto", styles.main)}>
            <Header />

        </div>
    );
};

module.exports = WithAuth(HomePage);