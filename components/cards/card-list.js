import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import classNames from 'classnames';
import Image from 'next/image';

import subscriptionData from '../../data/subscription-data';
import styles from './card.module.css';

function MediaAndEntertainment() {
    const theme = useTheme();

    const list = subscriptionData.data.filter(item => item.subscription_type === "digital_media");

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

function Food() {
    const theme = useTheme();

    const list = subscriptionData.data.filter(item => item.subscription_type === "food");

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

function HealthAndWellness() {
    const theme = useTheme();

    const list = subscriptionData.data.filter(item => item.subscription_type === "health");

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

function AllSubscription() {
    const theme = useTheme();

    return (
        <div style={{ width: '40vh' }}>
            {
                subscriptionData.data.map((item, index) => {
                    return (
                        <Card className={classNames(styles.cardroot, styles.margin)}>
                            <div>
                                <Image className={classNames("w-full aspect-video ...")} src="/image/card-list.gif" width={100} height={100} alt="asf" />
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


export default function CardList() {
    //   const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={styles.width}>
            <AppBar position="static" color="primary">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Media &amp; Entertainment" {...a11yProps(1)} />
                    <Tab label="Food" {...a11yProps(2)} />
                    <Tab label="Health &amp; wellness" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <AllSubscription />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <MediaAndEntertainment />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Food />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <HealthAndWellness />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
};

