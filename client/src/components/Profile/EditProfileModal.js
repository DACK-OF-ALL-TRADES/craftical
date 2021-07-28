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
import { UPDATE_FIRSTNAME, UPDATE_LASTNAME } from "../../utils/mutations";
import { GET_ME } from "../../utils/queries";

function EditProfileModal() {
  const [open, setOpen] = React.useState(false);
  const [firstNameText, setfirstNameText] = useState("");
  const [lastNameText, setlastNameText] = useState("");

  const [addFirstName] = useMutation(UPDATE_FIRSTNAME, {
    update(cache, { data: { addFirstName } }) {
      try {
        const { me } = cache.readQuery({ query: GET_ME });
        cache.writeQuery({
          query: GET_ME,
          data: { me: { addFirstName, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: GET_ME });
      cache.writeQuery({
        query: GET_ME,
        data: { me: { ...me.firstName, me } },
      });
    },
  });

  const [updateLastName] = useMutation(UPDATE_LASTNAME, {
    update(cache, { data: { updateLastName } }) {
      try {
        const { me } = cache.readQuery({ query: GET_ME });
        cache.writeQuery({
          query: GET_ME,
          data: { me: { updateLastName, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: GET_ME });
      cache.writeQuery({
        query: GET_ME,
        data: { me: { ...me.lastName, me } },
      });
    },
  });

  const handleFirstNameSubmit = async () => {
    try {
      console.log("handle submit input ->" + firstNameText);
      const { data } = await addFirstName({
        variables: {
          firstName: firstNameText,
        },
      });

      setfirstNameText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLastNameSubmit = async () => {
    try {
      console.log("handle submit input ->" + lastNameText);
      const { data } = await updateLastName({
        variables: {
          lastName: lastNameText,
        },
      });

      setlastNameText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "first-name") {
      setfirstNameText(value);
    }
    if (name === "last-name") {
      setlastNameText(value);
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
          {/* FIRSTNAME................................. */}
          <Input
            name="first-name"
            type="text"
            placeholder="Enter first name"
            value={firstNameText}
            onChange={handleChange}
            action
          >
            <input />
            <Button type="submit" onClick={handleFirstNameSubmit}>
              Save
            </Button>
          </Input>
          {/* LASTNAME................................. */}
          <Header>Last Name</Header>
          <Input
            name="last-name"
            type="text"
            placeholder="Enter last name"
            value={lastNameText}
            onChange={handleChange}
            action
          >
            <input />
            <Button type="submit" onClick={handleLastNameSubmit}>
              Save
            </Button>
          </Input>
          {/* EMAIL................................. */}
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
