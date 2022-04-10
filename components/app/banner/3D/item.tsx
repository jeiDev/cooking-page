import Timer from "~/components/svg/icons/timer.svg";
import ForkKnife from "~/components/svg/icons/fork-knife.svg";
import styles from "~/styles/components/app/banner/3D/Item.module.css";
import Link from "next/link";
import { ItemBannerPropsI } from "~/interfaces/components/app/banner/banner.interface";

const ItemBanner3D = (props: ItemBannerPropsI) => {
    const chef = props.chef;
    const createfAt = new Date(props.createAt).toDateString();

    return (
        <div className={styles.container}>
            <div className={styles.info} style={{backgroundColor: `${props.bgColor}`}}>
                <div className={styles.boxCategory}>
                    <Link href="#">
                        <div className={styles.category}>
                            <img src="/images/icons/paper.png" alt="Paper" />
                            <span>{props.category}</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.boxInfo}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.description}>{props.description}</p>
                    <div className={styles.infoFood}>
                        <div className={styles.itemInfoFood}>
                            <Timer />
                            <span>{props.minutesPreparation} Minutes</span>
                        </div>
                        <div className={styles.itemInfoFood}>
                            <ForkKnife />
                            <span>{props.typeFood}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.chefInfo} style={{opacity: props.showChef ? 1 : 0}}>
                    <div className={styles.chefInfoLeft}>
                        <div>
                            <img src="/images/users/1.png" alt="" />
                        </div>
                        <div>
                            <Link href="#">
                                <a>
                                    <h4>{chef.fistName} {chef.lastName}</h4>
                                    <span>{createfAt}</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.chefInfoRight}>
                        <div>
                            <span>View Recipes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.background}>
                <img src="/images/foods/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png" alt="" />
            </div>
        </div>
    )
}

export default ItemBanner3D;