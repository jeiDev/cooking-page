import { BouncePropsI } from "~/interfaces/components/app/load/bounce/bounce.interface";
import styles from "~/styles/components/app/load/Bounce.module.css";

const BounceLoad = ({cantPoints, pointColor, size = 50, bgColor = "transparent"}: BouncePropsI) => {
    const items = "-".repeat(cantPoints).split("");
    return(
        <div className={styles.loadBox} style={{backgroundColor: bgColor}}>
            <div className={styles.loadBounce}>
                {items.map((_, i) => (
                    <span 
                        key={`bounce-load-item-${i}`}
                        className={styles.point} 
                        style={{
                            backgroundColor: pointColor,
                            animation: 'loadBounceAnimation 1.2s linear',
                            animationDelay: `${(i * 2) / 10}s`,
                            animationIterationCount: 'infinite',
                            width: size,
                            height: size
                        }}>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default BounceLoad;