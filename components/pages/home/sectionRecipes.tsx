import { useEffect, useState } from "react";
import Recipe from "~/components/app/cards/recipe";
import ContainerCenter from "~/components/app/containers/center";
import { RecipeI } from "~/interfaces/data/recipe/recipe.interface";
import recipeProvider from "~/providers/recipe.provider";

const SectionRecipes = () => {
    const [items, setItems] = useState<Array<RecipeI> | undefined>();

    const handleGetCategories = async () => {
        const res = await recipeProvider.getAll(8, 0);
        if(res.error) return console.log("error")
      
        setItems(res.data);
    }


    useEffect(() => {
        if (items != undefined) return;
        handleGetCategories();
    }, [])


    return (
        <section>
            <ContainerCenter
                title="Simple and tasty recipes"
                subTitle="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
            >
               <div className="row">
                    {items?.map((item, i) => (
                        <div key={`home-recipe-${i}`} className="col-3">
                            <Recipe item={item}/>
                        </div>
                    ))}
               </div>
            </ContainerCenter>
        </section>
    )
}

export default SectionRecipes;