import FirstTopbar from "../Layout/FirstTopbar";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <FirstTopbar />
      {/* Topbar */}
      <Topbar />
      {/* navbar */}
      <Navbar />
      {/* Cart Drawer */}
    </header>
  );
};
export default Header;
