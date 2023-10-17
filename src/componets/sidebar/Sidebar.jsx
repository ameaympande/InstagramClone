import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "/logowhite.svg";
import {
  BadgePlus,
  Circle,
  Clapperboard,
  Compass,
  Heart,
  Home,
  LogOut,
  MessageSquare,
  Search,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="Logo" />
      <div className="sidebar-items">
        <div className="sidebar-item active">
          <div>
            <Home size={28} />
          </div>
          <span className="icon-label">Home</span>
        </div>
        <div className="sidebar-item">
          <div>
            <Search size={28} />
          </div>
          <span className="icon-label">Explore</span>
        </div>
        <div className="sidebar-item">
          <div>
            <Heart size={28} />
          </div>
          <span className="icon-label">Activity</span>
        </div>
        <div className="sidebar-item">
          <div>
            <MessageSquare size={28} />
          </div>
          <span className="icon-label">Messages</span>
        </div>
        <div className="sidebar-item">
          <div>
            <Clapperboard size={28} />
          </div>
          <span className="icon-label">Reels</span>
        </div>
        <div className="sidebar-item">
          <div>
            <Compass size={28} />
          </div>
          <span className="icon-label">Discover</span>
        </div>
        <div className="sidebar-item">
          <div>
            <BadgePlus size={28} />
          </div>
          <span className="icon-label">Create</span>
        </div>
        <div className="sidebar-item">
          <div>
            <Circle size={28} />
          </div>
          <span className="icon-label">Profile</span>
        </div>
        <div className="sidebar-item">
          <div>
            <LogOut size={28} />
          </div>
          <span className="icon-label" onClick={handleLogOut}>
            Log out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
