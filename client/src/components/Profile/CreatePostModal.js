import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Icon,
  Grid,
  TextArea,
} from "semantic-ui-react";
import pp from "../../assets/candle.jpg";
import StatusDropdown from "./StatusDropdown";
import CategoryDropdown from "./CategoryDropdown";

function CreatePostModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Create a post</Button>}
      size="mini"
    >
      <Modal.Header>Create a post</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Image size="medium" src={pp} wrapped />
          <Header>Craft Name</Header>
          <Input placeholder="Enter craft name" />
          <Header>Description</Header>
          <TextArea
            placeholder="Describe your work..."
            style={{ minHeight: 100, width: "100%", resize: "vertical" }}
          />
          <Header>Picture</Header>
          <input type="file" placeholder="Select an image"></input>
          <Header>Status</Header>
          <StatusDropdown />
          <Header>Category</Header>
          <CategoryDropdown />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Create"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CreatePostModal;
