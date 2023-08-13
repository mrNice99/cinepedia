import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Home from "./Pages/Home/Home";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="app-container">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
