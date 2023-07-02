import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Header } from "./../components";

const RootLayout = () => {
  const location = useLocation();

  const hiddenHeaderPaths = ["/login", "/register"];

  const hideHeader = hiddenHeaderPaths.includes(location.pathname);
  return (
    <div className="root-layout">
      {!hideHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
