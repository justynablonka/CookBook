import { SearchPanel } from "./SearchPanel";

export function TopBar() {
    return (
        <div className="topBar">
            <p>Pasek górny</p>
            <p>Pole szukania</p>
            <SearchPanel/>
        </div>
    );
}