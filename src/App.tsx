import React, { useState } from "react";
import OnboardingForm from "./components/OnboardingForm";
import "./App.css";

const LazyHint = React.lazy(() => import("./components/Hint"));

const App: React.FC = () => {
  const [hintDisplayed, setHintDisplayed] = useState(false);

  return (
    <div className="container">
      <h1 className="h1">Анкета для новых клиентов AGIMA</h1>
      {hintDisplayed ? (
        <React.Suspense fallback={<div>Загрузка...</div>}>
          <LazyHint setHintDisplayed={setHintDisplayed} />
        </React.Suspense>
      ) : (
        <OnboardingForm setHintDisplayed={setHintDisplayed} />
      )}
    </div>
  );
};

export default App;
