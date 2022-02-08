const React = require('react');
const classNames = require('classnames');

const styles = require('./header.module.css');


const Header = () => {
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
                        <div>Login</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = Header;
