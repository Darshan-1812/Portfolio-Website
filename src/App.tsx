import { lazy, Suspense } from "react";
import "./App.css";
import CharacterModel from "./components/Character";
import { LoadingProvider } from "./context/LoadingProvider";

const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <CharacterModel />
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
