import { useState } from "react"
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai"
import RecipeSection from "./RecipeSection";

export default function Body() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipe, setRecipe] = useState<string>();
    const [loading, setLoading] = useState(false); // NEW state

    function addIngredient(formData: FormData) {
        const newIngredient = formData.get("ingredient");
        if (typeof newIngredient === "string" && newIngredient.trim()) {
            setIngredients((prevIngredients: string[]) => [...prevIngredients, newIngredient.trim()]);
        }
    }

    async function getRecipe(ingredients: Array<string>) {
        setLoading(true);    // start loading
        setRecipe(undefined); // clear old recipe
        try {
            const recipeOutput: Awaited<ReturnType<typeof getRecipeFromMistral>> =
                await getRecipeFromMistral(ingredients);
            setRecipe(recipeOutput);
        } catch (error) {
            console.error(error);
            setRecipe("Sorry, something went wrong!");
        } finally {
            setLoading(false); // stop loading
        }
    }

    return (
        <div className="input-section">
            <h3>Enter your ingredients!</h3>
            <p>Spatula will generate a recipe based on your ingredients.</p>
            <p>Works best with at least 3 ingredients!</p>
            <form action={addIngredient}>
                <input
                    name="ingredient"
                    placeholder="mom's spaghetti"
                    id="ingredient"
                    type="text"
                    className="validate"
                />
                <button className="waves-effect waves-light btn">Add Ingredient</button>
            </form>

            <IngredientList ingredients={ingredients} getRecipe={getRecipe} />

            {loading ? (
                <div className="loading flex justify-center mt-4">
                    {/* @ts-ignore */}
                    <dotlottie-wc
                    src="https://lottie.host/fa2ae9d3-94ff-428b-b630-736925263760/BEPor346PS.lottie"
                    style={{ width: "200px", height: "200px" }}
                    speed="1"
                    autoplay
                    loop
                    />
                </div>
                ) : (
                <RecipeSection recipeOutput={recipe} />
                )}
        </div>
    )
}