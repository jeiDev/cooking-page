import Heart from "~/components/svg/icons/heart.svg";
import Timer from "~/components/svg/icons/timer.svg";
import ForkKnife from "~/components/svg/icons/fork-knife.svg";
import style from "~/styles/components/app/cards/CardRecipe.module.css";
import { RecipeItemPropsI } from "~/interfaces/data/recipe/recipe.interface";

const Recipe = ({ item }: RecipeItemPropsI) => {

    return (
        <div className={style.container}>
            <div className={style.containerImage}> 
                <div className={style.heart}>
                    <Heart />
                </div>
                <div className={style.boxImage}>
                    <img src={item.image} alt={item.title} />
                </div>
            </div>
            <div className={style.information}>
                <h3>{item.title}</h3>
                <div className={style.footer}>
                    <div className={style.group}>
                        <Timer />
                        <span>{item.timePreparation} {item.timePreparation < 2 ? 'Minute' : 'Minutes'}</span>
                    </div>
                    <div className={style.group}>
                        <ForkKnife />
                        <span>{item.category?.title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;