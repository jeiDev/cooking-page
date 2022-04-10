import BounceLoad from "../../load/bounce";
import styles from "~/styles/components/app/banner/3D/Load.module.css";

const LoadBanner3D = () => {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.item}></div>
            </div>
            <div className={styles.center}>
                <div className={styles.item}>
                    <BounceLoad 
                        size={17}
                        cantPoints={3}
                        pointColor={"#c7c3c3"}
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.item}></div>
            </div>
        </div>
    )
}

export default LoadBanner3D;