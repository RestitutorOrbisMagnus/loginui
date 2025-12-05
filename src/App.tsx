import React from "react";
import LoginForm from "./components/LoginForm";
import BenefitsPanel from "./components/BenefitsPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8">
        
    
        <div className="bg-white rounded-2xl shadow-sm p-10 w-full lg:w-[40%]">
          <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
              C
            </span>
            Create an account
          </h1>

          <LoginForm />
        </div>
     
        <div className="w-full lg:w-[60%]">
          <BenefitsPanel />
        </div>

      </div>
    </div>
  );
}