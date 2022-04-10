import { useState, useEffect } from "react";
import { BannerPropsI } from "~/interfaces/components/app/banner/banner.interface";

import ItemBanner3D from "./item";
import LoadBanner3D from "./load";
import styles from "~/styles/components/app/banner/3D/Banner.module.css";
import { BannerAnimation } from "~/settings/banner.setting";

const Banner3D = ({ items }: BannerPropsI) => {
    const [itemAtive, setItemActive] = useState(0);

    useEffect(() => {
        if(!items || !items.length) return;
        setTimeout(() => {
            setItemActive(itemAtive + 1 >= (items?.length || 0) ? 0 : itemAtive + 1)
        }, 5000)
    }, [items, itemAtive])

    return (
        <div className={styles.container}>
            {!items ?
                (<LoadBanner3D />) :
                (<div
                    className={styles.animation}
                    style={{
                        width: `${(items?.length || 0) * 100}vw`,
                        minWidth: `${(items?.length || 0) * 100}vw`,
                        left: `-${itemAtive * (100 - ((BannerAnimation.hiddenItemMargin + BannerAnimation.hiddenItemWidth) * 2))}vw`
                    }}
                >
                    {items?.map((item, i) => (
                        <div
                            key={`item-banner-${i}`}
                            className={`
                                ${styles.item}
                                ${itemAtive == i ? styles.active : ""}
                            `.trim()}
                        >
                            <ItemBanner3D {...item} showChef={itemAtive == i} />
                        </div>
                    ))}
                </div>)
            }

        </div>
    )
}

export default Banner3D;            