import Link from "next/link";
import Facebook from "~/components/svg/social/facebook.svg";
import Instagram from "~/components/svg/social/instagram.svg";
import Twitter from "~/components/svg/social/twitter.svg";
import styles from "~/styles/components/app/Socials.module.css";

const Socials = () => {
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
        <div className={styles.social}>
            <ul>
                {socials.map((social, i) => (
                    <li key={`social-icon-${i}`}>
                        <Link href={social.link}>
                            <a><social.Svg /></a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Socials;