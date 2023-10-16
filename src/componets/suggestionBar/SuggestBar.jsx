import ProfileBar from "../profileBar/ProfileBar";
import profilephoto from "/public/1ss.png";
import "./style.css";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import GetAllUserAPI from "../../apicalls/GetAllUserAPI";

const SuggestBar = () => {
  const [profileData, setProfileData] = useState(null);

  const getUsers = async () => {
    await GetAllUserAPI()
      .then((res) => {
        console.log(res.data[0]);
        setProfileData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="suggestbar">
        <div className="suggestbar-item active">
          <ProfileBar
            username={"amey"}
            fullname={"Ameay Pande"}
            action={"Switch"}
            profilePhoto={profilephoto}
          />
        </div>
        <Container>
          <Suggest>{"Suggested for you"}</Suggest>
          <SeeAll href="#">{"See All"}</SeeAll>
        </Container>
        <Grid container spacing={0}>
          <div className="suggestbar-item active">
            <ProfileBar
              username={"amey"}
              fullname={"Ameay Pande"}
              action={"Switch"}
              profilePhoto={profilephoto}
            />
          </div>
          {profileData &&
            profileData.slice(0, 3).map((profile) => (
              <div
                className="suggestbar-item active"
                style={{ marginTop: "-20px" }}
                key={profile.username}
              >
                <ProfileBar
                  username={profile.username}
                  fullname={profile.full_name}
                  action="Follow"
                  profilePhoto={profile.profile_photo}
                />
              </div>
            ))}
        </Grid>
        <div className="footer">
          <span className="nav">
            <a href="#">About</a> .<a href="#"> Help</a> .{" "}
            <a href="#"> Press</a> . <a href="#"> API</a> .{" "}
            <a href="#"> Jobs</a> . <a href="#"> Privacy</a> .{" "}
            <a href="#"> Terms</a>
          </span>
          <span className="nav">
            <a href="#">Location</a> . <a href="#">Language</a> .{" "}
            <a href="#">Meta Verified</a>
          </span>
          <br />
          <span className="copyright">© 2023 INSTAGRAM FROM META</span>
        </div>
      </div>
    </>
  );
};
const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginRight: "106px",
});

const Suggest = styled("div")({
  fontSize: "14px",
  fontWeight: "bold",
  color: "#8f8f8f",
});

const SeeAll = styled("a")({
  backgroundColor: "transparent",
  color: "white",
  padding: "6px 12px",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
  },
});
export default SuggestBar;
