import Link from "next/link";
import Timer from "~/components/svg/icons/timer.svg";
import PlayCircle from "~/components/svg/icons/play-circle.svg";
import ForkKnife from "~/components/svg/icons/fork-knife.svg";
import styles from "~/styles/components/app/banner/3D/Item.module.css";
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
                        <div className={styles.right}>
                            <Link href="#">
                                <a>
                                    <h4>{chef.fistName} {chef.lastName}</h4>
                                </a>
                            </Link>
                            <span>{createfAt}</span>
                        </div>
                    </div>
                    <div className={styles.chefInfoRight}>
                        <span>View Recipes</span>
                        <PlayCircle />
                    </div>
                </div>
            </div>
            <div className={styles.background}>
                <img src={`${props.image}`} alt="" />
            </div>
        </div>
    )
}

export default ItemBanner3D;