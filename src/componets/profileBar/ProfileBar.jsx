/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import "./style.css";
import { red } from "@mui/material/colors";

const SuggestionCard = styled(Card)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const SuggestionCardContent = styled(CardContent)({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const Username = styled("div")({
  marginTop: "6px",
  fontWeight: "bold",
  fontSize: "14px",
});
const Fullname = styled("div")({
  fontSize: "12px",
  color: "#8f8f8f",
});

const LinkContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const FollowLink = styled("a")({
  backgroundColor: "transparent",
  color: "#3897f0",
  padding: "6px 12px",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function InstagramSuggestionCard({
  username,
  fullname,
  profilePhoto,
  action,
}) {
  return (
    <div className="container">
      <SuggestionCard>
        <Avatar
          sx={{
            bgcolor: red[500],
            width: 44,
            height: 44,
          }}
          src={profilePhoto}
        >
          {profilePhoto ? profilePhoto : "I"}
        </Avatar>
        <SuggestionCardContent>
          <Username>{username}</Username>
          <Fullname>{fullname}</Fullname>
        </SuggestionCardContent>
        <LinkContainer>
          <FollowLink href="#">{action}</FollowLink>
        </LinkContainer>
      </SuggestionCard>
    </div>
  );
}
