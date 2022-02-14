import React, { Component } from 'react'
import classNames from 'classnames';
import Router from 'next/router'
import { auth, firebase } from '../login';

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
                // Router.push('/')
                Router.push('/')
            }
        })
    }

    handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

        auth.signInOptions = [firebase.auth.GoogleAuthProvider.PROVIDER_ID],

            auth.signInWithPopup(provider)
                .then(() => {
                    console.log('you are signed in successfully')
                    Router.push('/home')
                })
                .catch(err => {
                    console.log(err, ' Something right not happened !')
                    Router.push('/')
                })
    }
    render() {
        return (
            <div id='loginCard' style={styles.loginCard}>
                {/* <Card style={styles.parent}>
                    <CardActionArea>
                        <CardMedia component="img" alt="previewImg"  image='/images/swiggy-banner.png' />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <span style={styles.textcol}>Badges Dashboard</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <button  className={classNames("rounded-full ...", styles.button)} onClick={this.handleSignIn}>Google SignIn</button>
                    </CardActions>
                </Card> */}
                   <button  className={classNames("rounded-full ...", styles.button)} onClick={this.handleSignIn}>Google SignIn</button>
            </div>
        )
    }
};