import "../App.css";
import { useContext } from "react";
import { ThemeContext } from './../context/context';

function ContextApiTheme() {
    const value = useContext(ThemeContext);
    return (
        <>
            <div className="card">
                <button
                    onClick={() => {
                        value.setTheme("light");
                    }}
                >
                    Theme {value.theme}
                </button>
            </div>

        </>
    );
}

export default ContextApiTheme;
