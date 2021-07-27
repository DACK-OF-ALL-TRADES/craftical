import React from "react";
import img1 from "../../assets/art-transparent.png";
import img2 from "../../assets/fun-transparent.png";
import img3 from "../../assets/post-transparent.png";
import { Grid, Image, Container } from "semantic-ui-react";

const Header = () => {
  return (
    <div>
      <Container>
        <div className="home-header">
          <h1>Home</h1>
        </div>
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column mobile={16} tablet={16} computer={5}>
              <Image src={img1} width="360" height="300" />
              <h3>Be Creative!</h3>
              <p>
                &#8618;Let your imagination blast with all sorts of available
                ideas and projects.
                <br />
                &#8618;Keep a track of your process, share your craft with
                friends!
              </p>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={5}>
              <Image src={img2} width="360" height="300" />
              <h3>Discover new people</h3>
              <p>
                &#8618;Whatever your skills and craftings are, there are many
                people to connect within the platfrom.
                <br />
                &#8618;Find out others with-in your area; support, meet and
                share moments.
              </p>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={5}>
              <Image
                src={img3}
                width="360"
                height="300"
                verticalAlign="middle"
              />
              <h3>Share your craft</h3>
              <p>
                &#8618;Craftical allows users to share their work, keep a record
                of it and to discover new handicrafts.
                <br />
                &#8618;Explore many crafts made from people like you, with a
                variety of categories and so much more!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
