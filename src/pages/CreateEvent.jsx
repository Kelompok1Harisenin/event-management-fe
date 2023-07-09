import { useState } from "react";
import { EventForm } from "./../components";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventType: "online",
    eventTitle: "",
    eventDescription: "",
    eventStart: "",
    eventEnd: "",
    eventAddress: "",
    locationMap: "",
    meetLink: "",
  });

  const [errors, setErrors] = useState({
    eventTitle: "",
    eventDescription: "",
    eventStart: "",
    eventEnd: "",
    eventAddress: "",
    locationMap: "",
    meetLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // TODO: Post data to backend
      console.log("Event submitted!");
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const formErrors = {};

    if (formData.eventTitle.trim() === "") {
      formErrors.eventTitle = "Event Title is required";
    }

    if (formData.eventDescription.trim() === "") {
      formErrors.eventDescription = "Event Description is required";
    }

    if (formData.eventStart === "") {
      formErrors.eventStart = "Event Start is required";
    }

    if (formData.eventEnd === "") {
      formErrors.eventEnd = "Event End is required";
    }

    if (formData.eventType === "offline") {
      if (formData.eventAddress.trim() === "") {
        formErrors.eventAddress = "Event Location is required";
      }

      if (formData.locationMap.trim() === "") {
        formErrors.locationMap = "Map Location is required";
      }
    }

    if (formData.eventType === "online" && formData.meetLink.trim() === "") {
      formErrors.meetLink = "Meeting Link is required";
    }

    return formErrors;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <EventForm
        formData={formData}
        errors={errors}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isEditing={false}
      />
    </div>
  );
};

export default CreateEvent;
