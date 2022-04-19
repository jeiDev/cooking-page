import { ContainerBetweenPropsI } from "~/interfaces/components/app/containers/containers.interface";
import containerStyles from "~/styles/components/app/Container.module.css"
import styles from "~/styles/components/app/containers/Between.module.css"


const ContainerBetween = ({title, subTitle, children} : ContainerBetweenPropsI) => {

    return (
        <div className={`${containerStyles.container} ${styles.container}`}>
            <div className={styles.header}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>{subTitle()}</div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ContainerBetween;