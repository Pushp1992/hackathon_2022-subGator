const React = require('react');
const classNames = require('classnames');
const { auth } = require('../login');

import Router from 'next/router';

const UserLogout = () => {
    
    const handleLogOut = (event) => {
        event.preventDefault();
        auth.signOut()
            .then(() => {
                Router.push('/')
            }).catch((err) => {
                console.log(err, 'something wrong while logging out!');
            });
    };
    return (
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full 
        border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent
         focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={e => handleLogOut(e)}
        >
            Logout
        </button>
    );
};

module.exports = UserLogout;