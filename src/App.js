import {BrowserRouter} from "react-router-dom";
import AppRouter from "./component/AppRouter";
import "./styles/App.css";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
