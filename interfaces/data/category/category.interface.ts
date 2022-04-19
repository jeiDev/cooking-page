import { RecipeI } from "../recipe/recipe.interface";

export interface CategoryI {
    image: String
    title: String
    recipes: Array<RecipeI>
    createAt: Date
}