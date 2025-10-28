import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "./Login";

const LoginPageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar minimal /> {/* only logo */}
      <main className="flex-1 flex justify-center items-center">
        <Login />
      </main>
      <Footer minimal /> {/* minimal footer */}
    </div>
  );
};

export default LoginPageLayout;
