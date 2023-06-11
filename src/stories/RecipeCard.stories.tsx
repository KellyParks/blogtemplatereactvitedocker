import RecipeCard from '../components/RecipeCard'

export default {
    title: "Recipe Card",
    component: RecipeCard
}

export const Basic = () => 
    (<RecipeCard
        title="Gin and Tonic"
        imageLink="https://picsum.photos/id/30/200/200"
        imageDescription="picture of a gin and tonic"
        ingredients={["Gin", "Tonic Water"]}
        directions={["Step 1", "Step 2"]} />);