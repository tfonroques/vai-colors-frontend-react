import React, { useContext } from "react";
import "../../../styles/AdminAbout.css";
import admin from "../../../services/AdminService";
import AboutContext from "../../aboutContext.js";

import { AppForm, Input, SubmitButton } from "../../common/forms";
import * as Yup from "yup";

const validationSchema = Yup.object({
  description: Yup.string().max(1000).required(),
  title: Yup.string().required(),
});
const About = () => {
  const [about, setAbout] = useContext(AboutContext);

  const handleSubmit = async (values) => {
    const res = {
      _id: values._id,
      title: values.title,
      description: values.description,
    };
    try {
      await admin.updateAbout(res);
      setAbout(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AppForm
      initialValues={{ title: "", description: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Input component="input" placeholder="Title" name="title" label="Title" />
      <Input
        placeholder="Description"
        name="description"
        label="Description"
        component="textarea"
        rows={5}
      />
      <SubmitButton className="btn btn-info" />
    </AppForm>
  );
};

export default About;
