import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { itemNavHeader } from "~/settings/header.setting";
import { HeaderPropsI } from "~/interfaces/components/layout/layout.interface";

import styles from "~/styles/components/layout/Header.module.css";
import Logo from "../app/logo";
import Socials from "../app/socials";
import Container from "../app/container";

const Header = ({title}: HeaderPropsI) => {
    const [itemNav, setItemNav] = useState(itemNavHeader);
    
    return (
        <>
            <Head>
                <title>{title || ""}</title>
            </Head>
            <header className={styles.header}>
                <Container>
                    <div className={styles.boxHeader}>
                        <div>
                            <Logo />
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
                        <div>
                            <Socials />
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header;