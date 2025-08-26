import { useState } from "react"
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai"
import RecipeSection from "./RecipeSection";


export default function Body() {
    
    const [ingredients, setIngredients] = useState<string[]>(["oregano", "tomato sauce", "pasta"]);
    const [recipe, setRecipe] = useState<string>();

    // reference: http://react.dev/reference/react-dom/components/form
    function addIngredient(formData: FormData) {
        const newIngredient = formData.get("ingredient");
       if (typeof newIngredient === "string" && newIngredient.trim()) {
        setIngredients((prevIngredients: string[]) => [...prevIngredients, newIngredient.trim()]);
        }
    }

    async function getRecipe(ingredients: Array<string>) {
        const recipeOutput: Awaited<ReturnType<typeof getRecipeFromMistral>> = await getRecipeFromMistral(ingredients);
        setRecipe(recipeOutput);
    }

    return (
        <>
            <div className="input-section">
                <h3>Enter your ingredients!</h3>
                    <form action={addIngredient}>
                        <input name="ingredient" placeholder="mom's spagetti" id="ingredient" type="text" className="validate" />
                        <button className="waves-effect waves-light btn">Add Ingredient</button>
                    </form>

                <IngredientList ingredients={ingredients} getRecipe={getRecipe} />

                <RecipeSection recipeOutput = {recipe} />

            </div>
        </>
    )
}