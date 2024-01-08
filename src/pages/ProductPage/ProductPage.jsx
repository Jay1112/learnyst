import { toggleTheme } from "../../utils/themeHandler";

function ProductPage(){

    function handleToggleTheme(){
        toggleTheme();
    }

    return (
        <div>
            <button onClick={handleToggleTheme} className="bg-success">Change Theme</button>
        </div>
    );
}

export default ProductPage;