import styles from "~/styles/components/app/Logo.module.css";

const Logo = () => {
    
    return (
        <div className={styles.logo}>
            <span>Foodieland</span>
            <span className={styles.pointLogo}>.</span>
        </div>
    )
}

export default Logo;