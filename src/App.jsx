import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import News from "./pages/news/News";
import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments/Comments";

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/comments" element={<Comments />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
