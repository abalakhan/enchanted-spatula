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
                <section>
                    {props.ingredients.length > 3 && (
                        <>
                            <div>
                                <h4>Your ingredients:</h4>
                                <ul>
                                    {ingredientList}
                                </ul>
                            </div>

                            <section className="generate-recipe">
                                <span>Ready for a recipe?</span>
                                <button onClick={() => props.getRecipe(props.ingredients)} className="waves-effect waves-light btn">Get my Recipe</button>
                            </section>
                        </>
                    )}
                </section>
            
            </>

                
        )
}