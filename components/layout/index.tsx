import Header from "./header";
import Footer from "./footer";
import { LayoutPropsI } from "~/interfaces/components/layout/layout.interface";
import styles from '~/styles/components/layout/Layout.module.css';

const Layout = ({children, title}: LayoutPropsI) => {

    return (
        <div className={styles.layout}>
            <Header title={title}/>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;