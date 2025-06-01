import { Provider } from "react-redux";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Profile />} />
              <Route path="/requests" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
