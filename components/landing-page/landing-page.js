const React = require('react');
const classNames = require('classnames');
const Logincard = require('../login');
const Header = require('../header');
const Footer = require('../footer/footer');
// const Image = require('next/image');
import Image from 'next/image';
const styles = require('./landing-page.module.css');

const LandingPage = () => {
    return (
        <div className={classNames("md:fluid md:mx-auto", styles.main)}>
            <Header />
            <div className={classNames("container mx-auto px-8", styles.container)}>
                <div className={classNames("grid", styles.justifiedContentLeft)}>
                    <p className="text-justify">
                        <span id={styles.content1}>Manage your Subscriptions</span>
                        <span id="content2">with Just a single Tap</span>
                    </p>
                </div>

                <div className={classNames("grid", styles.justifiedContentRight, styles.contentTop)}>
                    <div className={classNames(styles.loginCard)}>
                        <Logincard />
                    </div>
                </div>

                <div className={classNames('grid', styles.animateBounce)}>
                    <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>

                <div className={classNames("grid grid-rows-3 grid-flow-col gap-7", styles.justifiedContentCenter, styles.contentTop)}>
                    <div className="row-start-2 row-span-2 ...">
                        <Image className={classNames("w-full aspect-video ...", styles.imageD6imension)} src="/image/mobile-img.png" width={300} height={500} alt="asf" />
                    </div>
                    <div className="row-end-3 row-span-2 ...">
                        <Image className={classNames("w-full aspect-video ...", styles.imageDimension)} src="/image/mobile-img.png" width={300} height={500} alt="asf" />
                    </div>
                    <div className="row-start-2 row-span-2 ...">
                        <Image className={classNames("w-full aspect-video ...", styles.imageDimension)} src="/image/mobile-img.png" width={300} height={500} alt="asf" />
                    </div>
                </div>

                <div className={classNames("grid grid-rows-3 grid-flow-col gap-4", styles.contentTop)}>
                    <div className="col-span-2 ...">
                        <p className="text-justify">
                            <span id={styles.content1}>Manage your Subscriptions</span>
                            <span id="content2">with Just a single Tap</span>
                        </p>
                    </div>
                    <div className="row-span-2 col-span-2 ...">
                        <ul>
                            <li>Track all your subscriptions in one go.</li>
                            <li>Manage all recurring subscription payments in one place</li>
                            <li>Track how much money you are spending on overall subscriptions</li>
                        </ul>
                    </div>
                    <div className="row-span-3 ...">
                        <Image className={classNames("hover:skew-y-6 w-full aspect-video ...", styles.imageDimension)} src="/image/mobile-img.png" width={300} height={500} alt="asf" />
                    </div>
                </div>

                <div className={classNames("grid grid-rows-3 grid-flow-col gap-4", styles.contentTop)}>
                    <div className="row-span-3 ...">
                        <Image className={classNames("hover:skew-y-6 w-full aspect-video ...", styles.imageDimension)} src="/image/mobile-img.png" width={300} height={500} alt="asf" />
                    </div>
                    <div className="col-span-2 ...">
                        <p className="text-justify">
                            <span id={styles.content1}>Manage your Subscriptions</span>
                            <span id="content2">with Just a single Tap</span>
                        </p>
                    </div>
                    <div className="row-span-2 col-span-2 ...">
                        <ul>
                            <li>Track all your subscriptions in one go.</li>
                            <li>Manage all recurring subscription payments in one place</li>
                            <li>Track how much money you are spending on overall subscriptions</li>
                        </ul>
                    </div>
                </div>

                <div className={classNames("grid grid-rows-3 grid-flow-col gap-4", styles.contentTop)}>
                    <div className="col-span-2 ...">
                        <p className="text-justify">
                            <span id={styles.content1}>Manage your Subscriptions</span>
                            <span id="content2">with Just a single Tap</span>
                        </p>
                    </div>
                    <div className="row-span-2 col-span-2 ...">
                        <ul>
                            <li>Track all your subscriptions in one go.</li>
                            <li>Manage all recurring subscription payments in one place</li>
                            <li>Track how much money you are spending on overall subscriptions</li>
                        </ul>
                    </div>
                    <div className="row-span-3 ...">
                        <Image className={classNames("hover:skew-y-6 w-full aspect-video ...", styles.imageDimension)} src="/image/mobile-img.png" width={300} height={500} alt="asf" />
                    </div>
                </div>

                <div className={classNames("grid grid-rows-3 grid-flow-col gap-4", styles.contentTop)}>
                    <div className="row-span-3 ...">
                        <Image className={classNames("hover:skew-y-6 w-full aspect-video ...", styles.imageDimension)} src="/image/mobile-img.png" width={300} height={500} alt="asf" />
                    </div>
                    <div className="col-span-2 ...">
                        <p className="text-justify">
                            <span id={styles.content1}>Manage your Subscriptions</span>
                            <span id="content2">with Just a single Tap</span>
                        </p>
                    </div>
                    <div className="row-span-2 col-span-2 ...">
                        <ul>
                            <li>Track all your subscriptions in one go.</li>
                            <li>Manage all recurring subscription payments in one place</li>
                            <li>Track how much money you are spending on overall subscriptions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

module.exports = LandingPage;