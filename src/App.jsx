import "./App.css";
import Header from "./components/shared/Header";
import { Outlet } from "react-router-dom";
import FooterSection from "./components/shared/FooterSection";

function App() {

  return (
    <div className="bg bg-fixed">
      <Header></Header>
      <Outlet></Outlet>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
