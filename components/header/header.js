const React = require('react');
const classNames = require('classnames');
const UserLogout = require('../logout');

const { auth, firebase } = require('../login');

const styles = require('./header.module.css');


const Header = () => {
    console.log('currentuser', auth.currentUser)
    return (
        <div className={classNames("md:fluid md:mx-auto", styles.main)}>
            <div className="flex justify-between ...">
                <div>
                    <div className={classNames("flex justify-start ...", styles.leftContent)}>
                        <div className={classNames(styles.prefix)}>sub</div>
                        <div className={classNames(styles.suffix)}>Gator</div>
                        <div className={styles.pipe}>
                            <span className={styles.pipeContent}>|</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classNames("flex justify-end ...", styles.rightContent)}>
                        <div>Products</div>
                        <div>Shop</div>
                        {
                            auth.currentUser === null ?
                                <div>Login</div> :
                                <div>
                                    <UserLogout />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = Header;
