import ReactMarkdown from "react-markdown";

export default function RecipeSection(props: any) {
    return (
        <section className = "recipe-output">
            <div className="container">
                <ReactMarkdown>{props.recipeOutput}</ReactMarkdown>
            </div>
        </section>
    )
}