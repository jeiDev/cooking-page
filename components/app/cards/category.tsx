import Link from "next/link";
import { CategoryCardPropsI } from "~/interfaces/components/app/cards/category/category.interface";
import style from "~/styles/components/app/cards/CardCategory.module.css";

const CardCategory = ({srcImage, altImage, title, classCol}: CategoryCardPropsI) => {

    return (
        <div className={`${classCol} ${style.box}`}>
            <Link href="#">
                <a>
                    <div className={style.boxImage}>
                        <img src={`${srcImage}`} alt={`${altImage}`} />
                    </div>
                    <h4 className={style.title}>{title}</h4>
                </a>
            </Link>
        </div>
    )
}

export default CardCategory;