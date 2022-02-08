const React = require('react');
import Image from 'next/image';
const classNames = require('classnames');
const styles = require("./footer.module.css");

const Footer = () => {
    return (
        <div className={classNames("md:fluid md:mx-auto", styles.main)}>
            <div className="md:container md:mx-auto">
                <div className={classNames("grid justify-center", styles.marginTop)}>
                    <span className={styles.header}>The NEW YORKER</span>
                </div>
                <div className={styles.lineMargin}><hr /></div>

                <div className="grid grid-rows-4 grid-flow-col gap-4">
                    <div><b>SECTIONS</b></div>
                    <div><span className={styles.spanText}>News</span></div>
                    <div><span className={styles.spanText}>Books &amp; Culture </span></div>
                    <div><span className={styles.spanText}>Fiction &amp; Poetry</span></div>
                    <div><span className={styles.spanText}></span></div>
                    <div><span className={styles.spanText}>Humor &amp; Cartoons</span></div>
                    <div><span className={styles.spanText}>Magazine</span></div>
                    <div><span className={styles.spanText}>Crossword</span></div>
                    <div><span className={styles.spanText}>Video</span></div>
                    <div><span className={styles.spanText}>Podcast</span></div>
                    <div><span className={styles.spanText}>Archives</span></div>
                    <div><span className={styles.spanText}>Going on</span></div>
                    <div><span>MORE</span></div>
                    <div><span className={styles.spanText}>Customer Care</span></div>
                    <div><span className={styles.spanText}>Shop The New Yorker</span></div>
                    <div><span className={styles.spanText}>Buy Covers and Cartoons</span></div>
                    <div><span className={styles.spanText}>Condé Nast Store</span></div>
                    <div><span className={styles.spanText}>Digital Access</span></div>
                    <div><span className={styles.spanText}></span></div>
                    <div><span className={styles.spanText}>Newsletters</span></div>
                    <div>Jigsaw Puzzle</div>
                    <div><span className={styles.spanText}>RSS</span></div>
                    <div><span className={styles.spanText}>Site Map</span></div>
                    <div><span className={styles.spanText}></span></div>
                    <div><span className={styles.spanText}></span></div>
                </div>

                <div className={styles.lineMargin}><hr /></div>

                <div class="grid grid-rows-2 grid-flow-col gap-4">
                    <div><span className={styles.spanText}>News</span> </div>
                    <div><span className={styles.spanText}>News</span></div>
                    <div><span className={styles.spanText}>Books &amp; Culture </span></div>
                    <div><span className={styles.spanText}>Fiction &amp; Poetry</span></div>
                    <div><span className={styles.spanText}></span></div>
                    <div><span className={styles.spanText}>Humor &amp; Cartoons</span></div>
                    <div><span className={styles.spanText}>Magazine</span></div>
                    <div><span className={styles.spanText}>Crossword</span></div>
                    <div><span className={styles.spanText}>Video</span></div>
                    <div><span className={styles.spanText}>Podcast</span></div>
                </div>

                {/* <div><hr/></div> */}
            </div>
        </div>
    )
};

module.exports = Footer;