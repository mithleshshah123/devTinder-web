import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import appStore from "./utils/appStore";

import Welcome from "./components/Welcome";
import Body from "./components/Body";
import Feed from "./components/Feed";
import LoginPageLayout from "./components/LoginPageLayout";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPageLayout />} />

          <Route element={<Body />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
