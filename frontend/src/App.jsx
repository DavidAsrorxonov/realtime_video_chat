import { Navigate, Route, Routes } from "react-router";
import {
  HomePage,
  SignUpPage,
  LoginPage,
  OnboardingPage,
  CallPage,
  ChatPage,
  NotificationsPage,
} from "./pages";
import { Toaster } from "react-hot-toast";
import PageLoader from "./components/PageLoader";
import useAuthUser from "./hooks/useAuthUser";

const App = () => {
  const { isLoading, authUser } = useAuthUser;

  if (isLoading) return <PageLoader />;

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/onboarding"
          element={authUser ? <OnboardingPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/call"
          element={authUser ? <CallPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/notifications"
          element={
            authUser ? <NotificationsPage /> : <Navigate to={"/login"} />
          }
        />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
