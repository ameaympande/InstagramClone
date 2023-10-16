import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";
import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";

const InstagramPost = ({
  username,
  caption,
  imageUrl,
  likes,
  comments,
  timestamp,
}) => {
  return (
    <Card style={{ margin: "100px" }}>
      <CardHeader
        avatar={<Avatar src="https://via.placeholder.com/40" />}
        title={username + " . " + timestamp}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></CardHeader>
      <CardMedia
        component="img"
        alt="Instagram Post"
        height="300"
        image={imageUrl}
      />
      <CardActions disableSpacing style={{ justifyContent: "space-between" }}>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
        >
          <Heart
            size={28}
            color="#fdf7f7"
            style={{ marginLeft: "6px", "&:hover": { color: "#b7b6b6" } }}
          />
          <MessageCircle
            size={28}
            color="#fdf7f7"
            style={{ marginLeft: "20px", "&:hover": { color: "#b7b6b6" } }}
          />
          <Send
            size={28}
            color="#fdf7f7"
            style={{
              marginLeft: "20px",
              "&:hover": { backgroudColor: "#b7b6b6" },
            }}
          />
          <div
            style={{
              flexGrow: 1,
              justifyContent: "space-between",
              marginLeft: "295px",
            }}
          ></div>
          <Bookmark size={30} color="#fdf7f7" />
        </div>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="#dddddd" component="div">
          <strong> {likes} likes</strong>
        </Typography>
        <Typography mt={2} variant="body2" color="#dddddd" component="div">
          <strong>{username}</strong> {caption}
        </Typography>
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <Typography mt={1} fontSize={12} color="#dddddd" component="div">
                <strong>{comment.username}</strong> {comment.text}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InstagramPost;
