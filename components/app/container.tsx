import { ContainerPropsI } from "~/interfaces/components/app/container/container.interface";
import styles from "~/styles/components/app/Container.module.css";

const Container = ({children}: ContainerPropsI) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container;