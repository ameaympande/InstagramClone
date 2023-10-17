import Sidebar from "../../../componets/sidebar/Sidebar";
import TimeLine from "../../../componets/timeLine/TimeLine";
import SuggestBar from "../../../componets/suggestionBar/SuggestBar";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const token = localStorage.getItem("Token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="container">
        <Sidebar />
        <TimeLine />
        <SuggestBar />
      </div>
    </>
  );
};

export default Home;
