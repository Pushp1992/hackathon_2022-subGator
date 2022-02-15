import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from 'next/image';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import subscriptionData from '../../data/subscription-data';
import classNames from 'classnames';

import styles from './card.module.css';

function ActiveSubscription() {
    const theme = useTheme();

    const list = subscriptionData.data.filter(item => item.subscription_status === "active");

    return (
        <div style={{ width: '40vh' }}>
            {
                list.map((item, index) => {
                    return (
                        <Card className={classNames(styles.cardroot, styles.margin)}>
                            <div>
                                <Image className={classNames("w-full aspect-video ...")} src="/image/icon.gif" width={100} height={100} alt="asf" />
                            </div>
                            <div className={styles.details}>
                                <CardContent className={styles.content}>
                                    <Typography component="h5" variant="h5">
                                        {item.subscription_name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {item.subscription_status}
                                    </Typography>
                                </CardContent>
                                <div className={styles.controls}>
                                    {item.description}
                                </div>
                            </div>
                        </Card>
                    );
                })
            }
        </div>
    );
};

function ExpiredSubscription() {
    const theme = useTheme();

    const list = subscriptionData.data.filter(item => item.subscription_status === "expired");

    return (
        <div style={{ width: '40vh' }}>
            {
                list.map((item, index) => {
                    return (
                        <Card className={classNames(styles.cardroot, styles.margin)}>
                            <div>
                                <Image className={classNames("w-full aspect-video ...")} src="/image/icon.gif" width={100} height={100} alt="asf" />
                            </div>
                            <div className={styles.details}>
                                <CardContent className={styles.content}>
                                    <Typography component="h5" variant="h5">
                                        {item.subscription_name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {item.subscription_status}
                                    </Typography>
                                </CardContent>
                                <div className={styles.controls}>
                                    {item.description}
                                </div>
                            </div>
                        </Card>
                    );
                })
            }
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function ActiveCard() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={styles.root}>
            <AppBar position="static" color="primary">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Active subscription" {...a11yProps(0)} />
                    <Tab label="Expired subscription" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ActiveSubscription />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <ExpiredSubscription />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
};













// const React = require('react');
// import PropTypes from 'prop-types';
// const classNames = require('classnames');
// const { makeStyles, useTheme } = require('@material-ui/core/styles');

// const SwipeableViews = require('react-swipeable-views');
// const AppBar = require('@material-ui/core/AppBar');
// const Tabs = require('@material-ui/core/Tabs');
// const Tab = require('@material-ui/core/Tab');
// const Box = require('@material-ui/core/Box');
// const Typography = require('@material-ui/core/Typography');

// const styles = {
//     width: 500
// };
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`full-width-tabpanel-${index}`}
//             aria-labelledby={`full-width-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// };

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `full-width-tab-${index}`,
//         'aria-controls': `full-width-tabpanel-${index}`,
//     };
// };


// const ActiveCard = () => {

//     const theme = useTheme();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const handleChangeIndex = (index) => {
//         setValue(index);
//     };

//     return (
//         <div className={classNames(styles.width)}>
//             <AppBar position="static" color="default">
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     indicatorColor="primary"
//                     textColor="primary"
//                     variant="fullWidth"
//                     aria-label="full width tabs example"
//                 >
//                     <Tab label="Item One" {...a11yProps(0)} />
//                     <Tab label="Item Two" {...a11yProps(1)} />
//                     <Tab label="Item Three" {...a11yProps(2)} />
//                 </Tabs>
//             </AppBar>
//             <SwipeableViews
//                 axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//                 index={value}
//                 onChangeIndex={handleChangeIndex}
//             >
//                 <TabPanel value={value} index={0} dir={theme.direction}>
//                     Item One
//                 </TabPanel>
//                 <TabPanel value={value} index={1} dir={theme.direction}>
//                     Item Two
//                 </TabPanel>
//                 <TabPanel value={value} index={2} dir={theme.direction}>
//                     Item Three
//                 </TabPanel>
//             </SwipeableViews>
//         </div>
//     );

// };

// module.exports = ActiveCard;