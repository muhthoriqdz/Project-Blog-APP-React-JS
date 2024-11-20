import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../organism";
import "./mainlayout.css";

function MainLayout() {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
