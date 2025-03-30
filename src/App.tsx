import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import VideoSelectorPage from "./pages/VideoSelectorPage";
import { RouteNames } from "./routes";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <h1>Autofocus - Video Tracker</h1>
          <Routes>
            <Route path={RouteNames.HOME} element={<VideoSelectorPage />} />
            {/* <Route path={RouteNames.OBJECT_SELECTOR} element={<ObjectSelectorPage />} /> */}
          </Routes>
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
