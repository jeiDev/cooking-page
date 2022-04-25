import { RecipeI } from "~/interfaces/data/recipe/recipe.interface";

export const recipiesData: Array<RecipeI> = [
    {
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: "/images/recipies/cheeseburger.jpg",
        timePreparation: 30,
        category: {
            image: "",
            title: "Snack",
            createAt: new Date()
        }
    }, {
        title: "Fresh Lime Roasted Salmon with Ginger Sauce",
        image: "/images/recipies/salmon.png",
        timePreparation: 30,
        category: {
            image: "",
            title: "Fish",
            createAt: new Date()
        }
    }, {
        title: "Strawberry Oatmeal Pancake with Honey Syrup",
        image: "/images/recipies/oatmeal.png",
        timePreparation: 30,
        category: {
            image: "",
            title: "Brakfast",
            createAt: new Date()
        }
    }, {
        title: "Fresh and Healthy Mixed Mayonnaise Salad",
        image: "/images/recipies/mayonnaise-salad.png",
        timePreparation: 30,
        category: {
            image: "",
            title: "Healthy",
            createAt: new Date()
        }
    }, {
        title: "Chicken Meatballs with Cream Cheese",
        image: "/images/recipies/chicken-meatballs.png",
        timePreparation: 30,
        category: {
            image: "",
            title: "Meat",
            createAt: new Date()
        }
    }, {
        title: "Fruity Pancake with Orange & Blueberry",
        image: "/images/recipies/fruity-pancake.png",
        timePreparation: 30,
        category: {
            image: "",
            title: "Sweet",
            createAt: new Date()
        }
    },

    {
        title: "The Best Easy One Pot Chicken and Rice",
        image: "/images/recipies/cheeseburger.jpg",
        timePreparation: 30,
        category: {
            image: "",
            title: "Snack",
            createAt: new Date()
        }
    },

    {
        title: "The Creamiest Creamy Chicken and Bacon Pasta",
        image: "/images/recipies/bacon-pasta.png",
        timePreparation: 30,
        category: {
            image: "",
            title: "Noodles",
            createAt: new Date()
        }
    },
]