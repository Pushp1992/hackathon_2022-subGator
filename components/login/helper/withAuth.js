const React = require('react');
import Router from 'next/router';
const { auth } = require('../../login');
const SkeletonSkin = require('../utils/skeletonSkin');

const styles = {
    root: {
        width: '100%',
    }
};

const WithAuth = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                status: 'LOADING'
            }
        };

        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                if (authUser) {
                    this.setState({ status: 'SIGNED_IN' })
                } else {
                    Router.push('/')
                }
            })
        };

        renderContent() {
            const { status } = this.state
            if (status === 'LOADING') {
                return (
                    <div style={styles.root}>
                        {/* <SkeletonSkin /> */}
                    </div>
                )
            } else if (status === 'SIGNED_IN') {
                return <Component {...this.props} />
            }
        };

        render() {
            return (
                <>
                    {this.renderContent()}
                </>
            )
        };
    };
};

module.exports = WithAuth;