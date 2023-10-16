import { useEffect, useState } from "react";
import InstagramPost from "../post/Post";
import "./style.css";
import GetAllPostAPI from "../../apicalls/GetAllPostAPI";

function TimeLine() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const res = await GetAllPostAPI();
      if (res && res.data.length > 0) {
        setPostData(res.data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="instagram-post">
      {postData &&
        postData.map((post, index) => (
          <div key={index} className="post">
            <InstagramPost
              username={post.username}
              caption={post.caption}
              imageUrl={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              comments={[
                { username: "user1", text: "Great photo!" },
                { username: "user2", text: "Awesome!" },
              ]}
            />
          </div>
        ))}
    </div>
  );
}

export default TimeLine;
