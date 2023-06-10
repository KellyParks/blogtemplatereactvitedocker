

type RecipeCardProps = {
    title: string,
    imageLink: string,
    imageDescription: string,
    ingredients: string[],
    directions: string[]

}

const RecipeCard = (props: RecipeCardProps) => {

    const {title, imageLink, imageDescription, ingredients, directions} = props;
    return(
        <div>
            <h1>{title}</h1>
            <img src={imageLink} alt={imageDescription}/>
            <ul>
                {ingredients.map((ingredient: string)=>(
                    <li>{ingredient}</li>
                ))}
            </ul>
            <ol>
                {directions.map((direction: string)=>(
                    <li>{direction}</li>
                ))}
            </ol>
        </div>
    );
}


export default RecipeCard;