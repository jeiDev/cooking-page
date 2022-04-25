import { ContainerPropsI } from "~/interfaces/components/app/containers/containers.interface";
import containerStyles from "~/styles/components/app/Container.module.css";
import styles from "~/styles/components/app/containers/Container.module.css";
import centerStyles from "~/styles/components/app/containers/Center.module.css";


const ContainerCenter = ({title, subTitle, children} : ContainerPropsI) => {
    const subTitleIsFunction = typeof subTitle == "function";

    return (
        <div className={`${containerStyles.container} ${styles.container}`}>
            <div className={`${styles.header} ${centerStyles.center}`}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div className={`${styles.paragraph} ${!subTitleIsFunction ? styles.paragraphMaxWith : ""}`}>{subTitleIsFunction ? subTitle() : subTitle}</div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ContainerCenter;