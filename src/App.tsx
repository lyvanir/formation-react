//routes
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
//stylesheet
import "./app.scss"
// pages and sections
import Header from "./sections/Header/Header";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Pokemon from "./pages/Pokemon/Pokemon";

const App = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/pokemon/:pokemon" element={<Pokemon/>}></Route>
            <Route
                path="*"
                element={<Home/>}
            />
        </Routes>
    </BrowserRouter>
)

export default App;