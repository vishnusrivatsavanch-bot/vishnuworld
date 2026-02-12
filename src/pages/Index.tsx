import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import PathSelection from "@/components/PathSelection";
import ProfessionalWorld from "@/components/ProfessionalWorld";
import PersonalWorld from "@/components/PersonalWorld";
import ResumePage from "@/components/phase2/ResumePage";

type Scene = "welcome" | "select" | "professional" | "personal" | "resume";

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
          <ProfessionalWorld key="professional" onBack={() => setScene("select")} onResume={() => setScene("resume")} />
        )}
        {scene === "personal" && (
          <PersonalWorld key="personal" onBack={() => setScene("select")} />
        )}
        {scene === "resume" && (
          <ResumePage key="resume" onBack={() => setScene("professional")} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
