import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { RecipeCarousel } from "./RecipeCarousel";

export function HomePage() {
    return (
        <div className="homePage">
            <TopBar />
            <RecipeCarousel />
            <BottomBar />
        </div>
    );
}