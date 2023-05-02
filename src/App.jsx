import "./App.css";
import Header from "./components/shared/Header";
import { Outlet } from "react-router-dom";
import FooterSection from "./components/shared/FooterSection";

function App() {

  return (
    <div className="bg bg-fixed">
      <Header></Header>
      <div className="min-h-[calc(100%-332px)]"><Outlet></Outlet></div>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
