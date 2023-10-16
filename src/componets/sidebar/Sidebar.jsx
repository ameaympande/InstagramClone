import "./style.css";
import logo from "/logowhite.svg";
import {
  AlignJustify,
  BadgePlus,
  Circle,
  Clapperboard,
  Compass,
  Heart,
  Home,
  MessageSquare,
  Search,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="Logo" />
      <div className="sidebar-item active">
        <Home />
        <span className="icon-label">Home</span>
      </div>
      <div className="sidebar-item">
        <Search />
        <span className="icon-label">Explore</span>
      </div>
      <div className="sidebar-item">
        <Heart />
        <span className="icon-label">Activity</span>
      </div>
      <div className="sidebar-item">
        <MessageSquare />
        <span className="icon-label">Messages</span>
      </div>
      <div className="sidebar-item">
        <Clapperboard />
        <span className="icon-label">Reels</span>
      </div>
      <div className="sidebar-item">
        <Compass />
        <span className="icon-label">Discover</span>
      </div>
      <div className="sidebar-item">
        <BadgePlus />
        <span className="icon-label">Create</span>
      </div>
      <div className="sidebar-item">
        <Circle />
        <span className="icon-label">Profile</span>
      </div>
      <div className="sidebar-item">
        <AlignJustify />
        <span className="icon-label">More</span>
      </div>
    </div>
  );
};

export default Sidebar;
