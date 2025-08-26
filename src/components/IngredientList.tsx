// assigning the type to a name
type IngredientListProps = {
    ingredients: string[];
    getRecipe: (ingredients: string[]) => Promise<void>;
};

export default function IngredientList(props: IngredientListProps) {
    const ingredientList = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
        
    ));
        
        return (
            <>
                <section className="ingredients-section">
                    {props.ingredients.length >= 1 && (
                        <>
                            <div>
                                <h5>Your ingredients:</h5>
                                <ul>
                                    {ingredientList}
                                </ul>
                            </div>

                            <section className="generate-recipe">
                                <div>
                                    <h6>Ready for a recipe?</h6>
                                    <p>Spatula will talk to the chef to generate a recipe based on your ingredients.</p>
                                </div>

                                <button onClick={() => props.getRecipe(props.ingredients)} className="waves-effect waves-light">Get a Recipe</button>
                            </section>
                        </>
                    )}
                </section>
            
            </>

                
        )
}