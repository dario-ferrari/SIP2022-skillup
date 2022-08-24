import { Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from "./views/Login/ForgotPassword";
import SignIn from "./views/Login/SignIn";
import AccountPanel from "./components/AccountPanel";
import Profile from "./views/My/Profile";
import Dashboard from "./views/My/Dashboard";
import Progress from "./views/My/Progress";
import NewTech from "./views/Admin/NewTech";
import CreateSkill from "./views/Admin/CreateSkill";
import Objectives from "./views/My/Objectives/Objectives";
import Profiles from "./views/Explore/Profiles";
import NewTechCreated from "./views/Admin/NewTechCreated";
import CreateUser from "./views/Manage/CreateUser";
import UserCreated from "./views/Manage/UserCreated";
import Projects from "./views/Explore/Projects";
import Personalized from "./views/My/Personalized";
import Recommended from "./views/My/Recommended";

function App() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary w-screen h-screen">
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="admin">
          <Route path="skill">
            <Route
              path="create"
              element={
                <AccountPanel typeUser={false}>
                  <CreateSkill />
                </AccountPanel>
              }
            ></Route>
            <Route
              path="techCreated"
              element={
                <AccountPanel typeUser={false}>
                  <NewTechCreated />
                </AccountPanel>
              }
            ></Route>
          </Route>
        </Route>

        <Route path="manage">
          <Route
            path="createuser"
            element={
              <AccountPanel typeUser={false}>
                <CreateUser />
              </AccountPanel>
            }
          ></Route>
          <Route
            path="usercreated"
            element={
              <AccountPanel typeUser={false}>
                <UserCreated />
              </AccountPanel>
            }
          ></Route>
        </Route>

        <Route path="my">
          <Route
            path="profile"
            element={
              <AccountPanel>
                <Profile />
              </AccountPanel>
            }
          />
          <Route
            path="progression"
            element={
              <AccountPanel>
                <Progress />
              </AccountPanel>
            }
          />

          <Route
            path="Objectives"
            element={
              <AccountPanel>
                <Objectives />
              </AccountPanel>
            }
          />

          <Route
            path="dashboard"
            element={
              <AccountPanel>
                <Dashboard />
              </AccountPanel>
            }
          />
          <Route
            path="personalized"
            element={
              <AccountPanel>
                <Personalized />
              </AccountPanel>
            }
          />
          <Route
            path="recommended"
            element={
              <AccountPanel>
                <Recommended />
              </AccountPanel>
            }
          />
        </Route>
        <Route path="/explore">
          <Route
            path="profiles"
            element={
              <AccountPanel>
                <Profiles />
              </AccountPanel>
            }
          />
          <Route
            path="projects"
            element={
              <AccountPanel>
                <Projects />
              </AccountPanel>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/my/profile" replace />} />
      </Routes>
    </div>
  );
}

export default App;
