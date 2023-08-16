//other
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

//components
import NavBar from "./components/navBar/navBar";

//pages
import Home from "./Pages/Home/Home";

//styles
import "./styles/index.scss";
import About from "./Pages/About/About";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="app-container">
      <QueryClientProvider client={queryClient}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
