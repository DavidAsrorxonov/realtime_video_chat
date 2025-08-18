import React from "react";
import { Route, Routes } from "react-router";
import {
  HomePage,
  SignUpPage,
  LoginPage,
  OnboardingPage,
  CallPage,
  ChatPage,
  NotificationsPage,
} from "./pages";

const App = () => {
  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </div>
  );
};

export default App;
