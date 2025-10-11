import { Routes, Route } from "react-router-dom";
import UserContainer from "./containers/UserContainer";
import useWindowSize from "./hooks/useWindowSize";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import userAuth from "./hoc/userAuth";

function App() {
  const { size } = useWindowSize();
  const CheckDashbaord = userAuth(Dashboard);
  const CheckUserProfile = userAuth(UserProfile);
  return (
    <>
      <h1>Container Presentational Design Pattern</h1>
      <UserContainer />
      <div>
        Window Size : {size.width} X {size.height}
      </div>
      <hr></hr>
      <Routes>
        <Route path="/dashbaord" element={<CheckDashbaord name="Ajay" />} />
        <Route path="/userprofile" element={<CheckUserProfile />} />
        <Route
          path="/"
          element={<div>HOC Compoment and Welcome to login Page </div>}
        />
      </Routes>
    </>
  );
}

export default App;
