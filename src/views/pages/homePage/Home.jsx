import Sidebar from "../../../componets/sidebar/Sidebar";
import TimeLine from "../../../componets/timeLine/TimeLine";
import SuggestBar from "../../../componets/suggestionBar/SuggestBar";
import "./style.css";

const Home = () => {
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
