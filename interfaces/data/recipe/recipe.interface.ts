import { CategoryI } from "../category/category.interface"

export interface RecipeI {
    image: string
    title: string
    timePreparation: number
    category?: CategoryI
}

export interface RecipeItemPropsI {
    item: RecipeI
}