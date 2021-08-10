import React from "react";
import {
  Card,
  Icon,
  Image,
  Container,
  Label,
  Header,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    backgroundColor: "#f7f7f7",
  },
  containerPadding: {
    paddingBottom: "5rem",
  },
  card: {
    margin: "1rem",
  },
};

const Body = ({ items }) => {
  let itemInfo = "";
  if (items.item) {
    itemInfo = items.item;
  }
  return (
    <>
      <div style={styles.container}>
        <Divider horizontal style={{ paddingTop: "1rem" }}>
          <Header as="h3">
            <Icon name="image" />
            My Posts
          </Header>
        </Divider>
        <Container style={styles.containerPadding}>
          <Card.Group>
            {itemInfo &&
              itemInfo.map((item) => (
                <Card key={item._id} style={styles.card}>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    wrapped
                    ui={false}
                    label={{
                      as: "span",
                      color: "blue",
                      content: `${item.status}`,
                      icon: "tag",
                      ribbon: true,
                    }}
                  />
                  <Link to={`/posts/${item._id}`}>
                    <Label as="span" attached="top right">
                      Edit
                    </Label>
                  </Link>
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>
                      <span className="date">{item.category} |</span>
                      <span className="date">{item.subcategory}</span>
                    </Card.Meta>
                    <Card.Description>{item.description}</Card.Description>
                  </Card.Content>
                  {/* <Card.Content extra>
                    <a>
                    <Icon name="user" />
                    {item.status}
                    </a>
                  </Card.Content> */}
                </Card>
              ))}
          </Card.Group>
        </Container>
      </div>
    </>
  );
};

export default Body;
