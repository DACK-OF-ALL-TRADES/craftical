import React from "react";
import { Image, Container, Grid } from "semantic-ui-react";
import pp from "../../assets/profile-pic.jpg";
import EditProfileModal from "./EditProfileModal";
import CreatePostModal from "./CreatePostModal";

const styles = {
  nameTitle: {
    fontSize: "3rem",
  },
};

const Head = ({ user }) => {
  let userInfo = "";
  if (user.me) {
    userInfo = user.me;
  }
  return (
    <div>
      <Container text>
        <Grid divided="vertically" style={{ marginTop: "3rem" }}>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image
                // src={require(`../../images/${user.profile}`).default}
                src={"https://i.postimg.cc/sxxqnThp/whiterabbit.jpg"}
                size="medium"
                circular
              />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <h1 style={styles.nameTitle}>
                {userInfo.firstName} {userInfo.lastName}
              </h1>
              <small>{userInfo.email}</small>
              <p>{userInfo.username}</p>
              <p>
                {userInfo.city} {userInfo.country}
              </p>
              <EditProfileModal user={userInfo} />
              <CreatePostModal />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Head;
