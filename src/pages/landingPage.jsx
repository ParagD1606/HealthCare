import React from "react";
import LandingSection1 from "../components/LandingSection1";
import { FaComments } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="relative">
      <LandingSection1 />

      {/* Floating Chatbot Button */}
      <button
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
      >
        <FaComments size={22} />
      </button>
    </div>
  );
};

export default LandingPage;
