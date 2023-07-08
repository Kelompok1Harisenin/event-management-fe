import { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventType: "online",
    eventTitle: "",
    eventDescription: "",
    eventStart: "",
    eventEnd: "",
    eventLocation: "",
    gmapLink: "",
    meetLink: "",
  });

  const [errors, setErrors] = useState({
    eventTitle: "",
    eventDescription: "",
    eventStart: "",
    eventEnd: "",
    eventLocation: "",
    gmapLink: "",
    meetLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
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
      if (formData.eventLocation.trim() === "") {
        formErrors.eventLocation = "Event Location is required";
      }

      if (formData.gmapLink.trim() === "") {
        formErrors.gmapLink = "Google Maps Link is required";
      }
    }

    if (formData.eventType === "online" && formData.meetLink.trim() === "") {
      formErrors.meetLink = "Meeting Link is required";
    }

    return formErrors;
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="eventType" className="block font-medium mb-1">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={formData.eventType}
            onChange={handleInputChange}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="eventTitle" className="block font-medium mb-1">
            Event Title
          </label>
          <input
            type="text"
            id="eventTitle"
            name="eventTitle"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={formData.eventTitle}
            onChange={handleInputChange}
          />
          {errors.eventTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.eventTitle}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="eventDescription" className="block font-medium mb-1">
            Event Description
          </label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={formData.eventDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="eventStart" className="block font-medium mb-1">
            Event Start
          </label>
          <input
            type="datetime-local"
            id="eventStart"
            name="eventStart"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={formData.eventStart}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="eventEnd" className="block font-medium mb-1">
            Event End
          </label>
          <input
            type="datetime-local"
            id="eventEnd"
            name="eventEnd"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={formData.eventEnd}
            onChange={handleInputChange}
          />
        </div>

        {formData.eventType === "offline" && (
          <div className="mb-4">
            <label htmlFor="eventLocation" className="block font-medium mb-1">
              Event Location
            </label>
            <input
              type="text"
              id="eventLocation"
              name="eventLocation"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={formData.eventLocation}
              onChange={handleInputChange}
            />
          </div>
        )}

        {formData.eventType === "offline" && (
          <div className="mb-4">
            <label htmlFor="gmapLink" className="block font-medium mb-1">
              Google Maps Link
            </label>
            <input
              type="text"
              id="gmapLink"
              name="gmapLink"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={formData.gmapLink}
              onChange={handleInputChange}
            />
          </div>
        )}

        {formData.eventType === "online" && (
          <div className="mb-4">
            <label htmlFor="meetLink" className="block font-medium mb-1">
              Meeting Link
            </label>
            <input
              type="text"
              id="meetLink"
              name="meetLink"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={formData.meetLink}
              onChange={handleInputChange}
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
