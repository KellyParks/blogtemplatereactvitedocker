import RecipeCard from './RecipeCard.tsx';

// Mock data
const recipeData = {
    title: "Delicious Recipe",
    imageLink: "https://picsum.photos/id/30/200/300",
    imageDescription: "A delicious drink",
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    directions: ["Step 1", "Step 2", "Step 3"],
  };

export function Home(){
    return (
        <>
            <h2>Home</h2>
            <RecipeCard {...recipeData} />
        </>
    
    );
}

export default Home;