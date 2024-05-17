import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout.jsx";
import Landing from "./pages/landing.jsx";
import Story from "./pages/story.jsx"
import StoryGenerated from "./pages/storyGenerated.jsx";
import NoPage from "./pages/noPage.jsx";
import './scss/main.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/story_generated" element={<StoryGenerated />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);