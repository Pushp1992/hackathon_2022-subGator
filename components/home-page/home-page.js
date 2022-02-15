const React = require('react');
const classNames = require('classnames');
const WithAuth = require('../login/helper/withAuth');
const Header = require('../header');

// const ActiveCard  = require('../cards');
import ActiveCard from '../cards/active-expired-card';
import CardList from '../cards/card-list';

const styles = require('./home-page.module.css');

const HomePage = () => {
    return (
        <div className={classNames("md:fluid md:mx-auto", styles.main)}>
            <Header />
            <div className={classNames("container mx-auto px-8", styles.container, styles.primaryContainer)}>
                <ActiveCard />
            </div>
            {/* <div className={classNames("container mx-auto px-8", styles.container)}><hr /></div> */}

            <div className={classNames("container mx-auto px-8", styles.container)}>
                <div>Explore by brands:</div> <br/>
                <CardList />
            </div>

        </div>
    );
};

module.exports = WithAuth(HomePage);