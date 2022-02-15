import React, { Component } from 'react'
import classNames from 'classnames';
import Router from 'next/router'
import { auth, firebase } from '../login';

import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const styles = {
    loginCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    parent: {
        maxWidth: 545,
        height: 300,
        padding: 40,
    },
    textcol: {
        color: 'black'
    },
    button: {
        color: 'green'
    }
}

export default class Login extends Component {

    componentDidMount() {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.setState({ status: 'SIGNED_IN' })
                Router.push('/home')
            } else {
                Router.push('/')
            }
        })
    }

    uiConfig = {
        // var provider = new firebase.auth.GoogleAuthProvider()
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image', // 'audio'
                    size: 'normal', // 'invisible' or 'compact'
                    badge: 'bottomleft', //' bottomright' or 'inline' applies to invisible.
                    defaultCountry: 'GB',
                    loginHint: '+11234567890'
                },
            }
        ],

        // callbacks: {
        //     signIn
        // },
        signInSuccessUrl: '/home'

            // auth.signInWithPopup(provider)
            //     .then(() => {
            //         console.log('you are signed in successfully')
            //         Router.push('/home')
            //     })
            //     .catch(err => {
            //         console.log(err, ' Something right not happened !')
            //         Router.push('/')
            //     })
    };

    render() {
        // ui.start('#firebaseui-auth-container', this.handleSignIn);
        return (
            <div id='loginCard' style={styles.loginCard}>
                {/* <button  className={classNames("rounded-full ...", styles.button)} onClick={this.handleSignIn}>Google SignIn</button> */}
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
    }
};