import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { itemNavHeader } from "~/settings/header.setting";
import { HeaderPropsI } from "~/interfaces/components/layout/layout.interface";
import Facebook from "~/components/svg/social/facebook.svg";
import Instagram from "~/components/svg/social/instagram.svg";
import Twitter from "~/components/svg/social/twitter.svg";
import styles from "~/styles/components/layout/Header.module.css";

const Header = ({title}: HeaderPropsI) => {
    const [itemNav, setItemNav] = useState(itemNavHeader);
    const socials = [
        {
            Svg: Facebook,
            link: "#"
        }, {
            Svg: Twitter,
            link: "#"
        }, {
            Svg: Instagram,
            link: "#"
        }
    ]
    return (
        <>
            <Head>
                <title>{title || ""}</title>
            </Head>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <span>Foodieland</span>
                    <span className={styles.pointLogo}>.</span>
                </div>
                <div className={styles.nav}>
                    <nav>
                        <ul>
                            { itemNav.map((item, i) => (
                                <li key={`nav-item-${i      }`}>
                                    <Link href={item.link}>
                                        <a>{item.title}</a>
                                    </Link>
                                </li>
                            )) }
                        </ul>
                    </nav>
                </div>
                <div className={styles.social}>
                    <ul>
                        {socials.map((social, i) => (
                            <li key={`social-icon-${i}`}>
                                <Link href={social.link}>
                                    <a>
                                        <social.Svg />
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;