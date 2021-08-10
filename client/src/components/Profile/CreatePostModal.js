import React, { useState } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Icon,
  Form,
  TextArea,
  Dropdown,
} from "semantic-ui-react";
import pp from "../../assets/candle.jpg";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_ITEM } from "../../utils/mutations";
import { GET_USER_ITEMS } from "../../utils/queries";

function CreatePostModal() {
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    status: "",
    category: "",
    subcategory: "",
  });

  const [addItem] = useMutation(ADD_ITEM);

  const { data } = useQuery(GET_USER_ITEMS);
  // console.log(data);
  const currentItems = [];
  if (data) {
    // console.log(data.item);
    const items = data.item;
    items.forEach((item) => {
      // console.log(item.name);
      currentItems.push(item.name);
    });
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      formState.name === "" ||
      formState.description === "" ||
      formState.status === "" ||
      formState.category === "" ||
      formState.subcategory === ""
    ) {
      alert("Please Enter all the required fields");
      return;
    } else if (currentItems.includes(formState.name)) {
      alert("Already have an item with that name!");
      return;
    } else if (
      formState.name &&
      formState.description &&
      formState.status &&
      formState.category &&
      formState.subcategory
    ) {
      try {
        console.log(currentItems);
        await addItem({
          variables: {
            name: formState.name,
            description: formState.description,
            status: formState.status,
            category: formState.category,
            subcategory: formState.subcategory,
          },
        });
        alert("Post created!");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const dropdownStatusChange = (e, { value }) => {
    console.log(value);
    setFormState({
      ...formState,
      ["status"]: value,
    });
  };

  const dropdownCategoryChange = (e, { value }) => {
    console.log(value);
    setFormState({
      ...formState,
      ["category"]: value,
    });
  };

  const dropdownSubCategoryChange = (e, { value }) => {
    console.log(value);
    setFormState({
      ...formState,
      ["subcategory"]: value,
    });
  };

  const statusOptions = [
    { key: 1, text: "In progress", value: "In progress" },
    { key: 2, text: "Completed", value: "Completed" },
    { key: 3, text: "Future idea", value: "Future idea" },
  ];

  const categoryOptions = [
    { key: 1, text: "Jewellery", value: "Jewellery" },
    { key: 2, text: "Painting", value: "Painting" },
    { key: 3, text: "Kids Craft", value: "Kids Craft" },
    { key: 4, text: "Building", value: "Building" },
    { key: 5, text: "Food", value: "Food" },
    { key: 6, text: "Fashion", value: "Fashion" },
    { key: 7, text: "Fabric", value: "Fabrics" },
    { key: 8, text: "Paper Craft", value: "Paper Craft" },
    { key: 9, text: "Wood Working", value: "Wood Working" },
    { key: 10, text: "Furniture", value: "Furniture" },
  ];

  let subCategoryOptions = [];
  if (formState.category === "Jewellery") {
    subCategoryOptions = [
      { key: 1, text: "Rings", value: "Rings" },
      { key: 2, text: "Bracelets", value: "Bracelets" },
      { key: 3, text: "Earrings", value: "Earrings" },
      { key: 4, text: "Pendants", value: "Pendants" },
      { key: 5, text: "Broaches", value: "Broaches" },
    ];
  }
  if (formState.category === "Painting") {
    subCategoryOptions = [
      { key: 1, text: "Water Colors", value: "Water Colors" },
      { key: 2, text: "Oil Painting", value: "Oil Painting" },
      { key: 3, text: "Pastel", value: "Pastel" },
      { key: 4, text: "Acrylic", value: "Acrylic" },
    ];
  }
  if (formState.category === "Kids Craft") {
    subCategoryOptions = [
      { key: 1, text: "Popside Sticks", value: "Popside Sticks" },
      { key: 2, text: "Paper Mache", value: "Paper Mache" },
      { key: 3, text: "Halloween", value: "Halloween" },
      { key: 4, text: "Christmas", value: "Christmas" },
      { key: 5, text: "Puppets", value: "Puppets" },
    ];
  }
  if (formState.category === "Building") {
    subCategoryOptions = [
      { key: 1, text: "Sheds", value: "Sheds" },
      { key: 2, text: "Decks", value: "Decks" },
      { key: 3, text: "Gazebos", value: "Gazebos" },
      { key: 4, text: "Tree Houses", value: "Tree Houses" },
      { key: 5, text: "Planters", value: "Planters" },
    ];
  }
  if (formState.category === "Food") {
    subCategoryOptions = [
      { key: 1, text: "Cakes", value: "Cakes" },
      { key: 2, text: "Chilis", value: "Chilis" },
      { key: 3, text: "Soups", value: "Soups" },
      { key: 4, text: "Sauces", value: "Sauces" },
      { key: 5, text: "Candies", value: "Candies" },
    ];
  }
  if (formState.category === "Fashion") {
    subCategoryOptions = [
      { key: 1, text: "Clothing", value: "Clothing" },
      { key: 2, text: "Bags", value: "Bags" },
      { key: 3, text: "Hair", value: "Hair" },
      { key: 4, text: "Makeup", value: "Makeup" },
      { key: 5, text: "Costumes", value: "Costumes" },
    ];
  }
  if (formState.category === "Fabric") {
    subCategoryOptions = [
      { key: 1, text: "Crochet", value: "Crochet" },
      { key: 2, text: "Sewing", value: "Sewing" },
      { key: 3, text: "Stuffies", value: "Stuffies" },
      { key: 4, text: "Quilting", value: "Quilting" },
      { key: 5, text: "Knitting", value: "Knitting" },
    ];
  }
  if (formState.category === "Paper Craft") {
    subCategoryOptions = [
      { key: 1, text: "Origami", value: "Origami" },
      { key: 2, text: "Decorations", value: "Decorations" },
      { key: 3, text: "Stamping", value: "Stamping" },
      { key: 4, text: "Scrapbooking", value: "Scrapbooking" },
    ];
  }
  if (formState.category === "Wood Working") {
    subCategoryOptions = [
      { key: 1, text: "Carving", value: "Carving" },
      { key: 2, text: "Chainsaw Art", value: "Chainsaw Art" },
      { key: 3, text: "Resin Work", value: "Resin Work" },
      { key: 4, text: "Pendants", value: "Pendants" },
    ];
  }
  if (formState.category === "Furniture") {
    subCategoryOptions = [
      { key: 1, text: "Chairs", value: "Chairs" },
      { key: 2, text: "Tables", value: "Bracelets" },
      { key: 3, text: "Cabinets", value: "Cabinets" },
      { key: 4, text: "Benches", value: "Benches" },
    ];
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button icon color="vk" labelPosition="right">
          Create a post
          <Icon name="add" />
        </Button>
      }
      size="mini"
      style={{ minWidth: "335px" }}
    >
      <Modal.Header>
        Create a post
        <Button icon style={{ float: "right" }} onClick={() => setOpen(false)}>
          <Icon name="close" />
        </Button>
      </Modal.Header>
      <Form onSubmit={handleFormSubmit}>
        <Modal.Content image style={{ padding: "2rem" }}>
          <Modal.Description>
            <Image
              size="medium"
              src={pp}
              wrapped
              style={{ marginBottom: "2rem" }}
            />
            <Form.Field>
              <Header>Item Name</Header>
              <Input
                placeholder="Enter item name"
                name="name"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Header>Description</Header>
              <TextArea
                placeholder="Describe your work..."
                style={{ minHeight: 100, width: "100%", resize: "vertical" }}
                name="description"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Header>Picture</Header>
              <Input
                placeholder="Enter item image link"
                name="image"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Header>Status</Header>
              <Dropdown
                onChange={dropdownStatusChange}
                options={statusOptions}
                placeholder="Choose a status"
                selection
                name="status"
              />
            </Form.Field>
            <Form.Field>
              <Header>Field</Header>
              <Dropdown
                onChange={dropdownCategoryChange}
                options={categoryOptions}
                placeholder="Choose a field"
                selection
                name="category"
              />
            </Form.Field>
            <Form.Field>
              <Header>Category</Header>
              <Dropdown
                onChange={dropdownSubCategoryChange}
                options={subCategoryOptions}
                placeholder="Choose a category"
                selection
                name="subcategory"
              />
            </Form.Field>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            type="submit"
            content="Create"
            labelPosition="right"
            icon="checkmark"
            positive
            style={{
              marginBottom: "2rem",
              float: "right",
              marginRight: "1rem",
            }}
          />
        </Modal.Actions>
      </Form>
    </Modal>
  );
}

export default CreatePostModal;
