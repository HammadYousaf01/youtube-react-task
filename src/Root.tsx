import Nav from "./components/nav";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
