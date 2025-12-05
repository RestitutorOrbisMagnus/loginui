
import LoginForm from "./components/LoginForm";
import BenefitsPanel from "./components/BenefitsPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8">
        
    
        <div className="bg-white rounded-2xl shadow-sm p-10 w-full lg:w-[40%]">

          <LoginForm />
        </div>
     
        <div className="w-full lg:w-[60%]">
          <BenefitsPanel />
        </div>

      </div>
    </div>
  );
}