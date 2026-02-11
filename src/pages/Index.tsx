import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import PathSelection from "@/components/PathSelection";
import ProfessionalWorld from "@/components/ProfessionalWorld";
import PersonalWorld from "@/components/PersonalWorld";

type Scene = "welcome" | "select" | "professional" | "personal";

const Index = () => {
  const [scene, setScene] = useState<Scene>("welcome");

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {scene === "welcome" && (
          <WelcomeScreen key="welcome" onComplete={() => setScene("select")} />
        )}
        {scene === "select" && (
          <PathSelection key="select" onSelect={(path) => setScene(path)} />
        )}
        {scene === "professional" && (
          <ProfessionalWorld key="professional" onBack={() => setScene("select")} />
        )}
        {scene === "personal" && (
          <PersonalWorld key="personal" onBack={() => setScene("select")} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
