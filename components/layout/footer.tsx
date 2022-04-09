import Socials from "../app/socials";
import styles from "~/styles/components/layout/Footer.module.css";
import Logo from "../app/logo";
import Link from "next/link";
import { itemNavHeader } from "~/settings/header.setting";
import Container from "../app/container";

const Footer = () => {
    const navs = itemNavHeader.filter((item) => item.title != "Home");
    
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.containerNav}>
                    <div className={styles.boxLogo}>
                        <div>
                            <Logo />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit.</p>
                    </div>
                    <div className={styles.boxNav}>
                        <nav>
                            <ul>
                                { navs.map((item, i) => (
                                    <li key={`nav-item-${i      }`}>
                                        <Link href={item.link}>
                                            <a>{item.title}</a>
                                        </Link>
                                    </li>
                                )) }
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p><span>© 2020 Flowbase. Powered by</span> <span className={styles.byTitle}>Webflow</span></p>
                    <div className={styles.boxSocials}>
                        <Socials />
                    </div>        
                </div>
            </Container>
        </footer>
    )
}

export default Footer;