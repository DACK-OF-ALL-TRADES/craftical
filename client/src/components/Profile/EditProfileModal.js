import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Icon,
  Grid,
} from "semantic-ui-react";
import pp from "../../assets/profile-pic.jpg";
import { ADD_FIRSTNAME } from "../../utils/mutations";
import { GET_ME, QUERY_ME } from "../../utils/queries";

function EditProfileModal() {
  const [open, setOpen] = React.useState(false);
  const [firstNameText, setfirstNameText] = useState("");

  const [addFirstName, { error }] = useMutation(ADD_FIRSTNAME, {
    update(cache, { data: { addFirstName } }) {
      try {
        const { me } = cache.readQuery({ query: GET_ME });

        cache.writeQuery({
          query: GET_ME,
          data: { me: [addFirstName, ...me] },
        });
      } catch (e) {
        console.error(e);
      }
      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, firstName: [...me.firstName, addFirstName] } },
      });
    },
  });

  const handleSubmit = async () => {
    try {
      const { data } = await addFirstName({
        firstNameText,
      });

      setfirstNameText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "first-name") {
      setfirstNameText(value);
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Edit Profile</Button>}
      size="mini"
    >
      <Modal.Header>Edit Profile</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Image size="medium" src={pp} wrapped />
          <Header>First Name</Header>
          <Input
            name="first-name"
            type="text"
            placeholder="Enter first name"
            value={firstNameText}
            onChange={handleChange}
            action
          >
            <input />
            <Button type="submit" onClick={handleSubmit}>
              Save
            </Button>
          </Input>
          <Header>Last Name</Header>
          <Input action="Save" placeholder="Enter last name" />
          <Header>Email Address</Header>
          <Input action="Save" placeholder="Enter email address" />
          <Header>City</Header>
          <Input action="Save" placeholder="Enter city" />
          <Header>Country</Header>
          <Input action="Save" placeholder="Enter country" />
          <Header>Profile Picture</Header>
          <input type="file" placeholder="Select an image"></input>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Close"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default EditProfileModal;
