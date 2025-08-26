import ReactMarkdown from "react-markdown";

export default function RecipeSection(props: String) {
    return (
        <section className = "recipe-output">
            <ReactMarkdown>{props.recipeOutput}</ReactMarkdown>
        </section>
    )
}