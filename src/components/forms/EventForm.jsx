import { FieldError } from "./../../components";

const EventForm = ({
  formData,
  errors,
  handleInputChange,
  handleSubmit,
  isEditing,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* Event Type */}
      <div className="mb-4">
        <label htmlFor="eventType" className="block font-medium mb-1">
          Type <span className="text-red-500">*</span>
        </label>
        <select
          id="eventType"
          name="eventType"
          className="select select-warning w-full rounded px-3 py-2 cursor-pointer"
          value={formData.eventType}
          onChange={handleInputChange}
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      {/* Event Title */}
      <div className="mb-4">
        <label htmlFor="eventTitle" className="block font-medium mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          className="input input-bordered input-warning w-full rounded px-3 py-2"
          value={formData.eventTitle}
          onChange={handleInputChange}
          autoFocus
        />
        <FieldError error={errors.eventTitle} condition={!!errors.eventTitle} />
      </div>

      {/* Event Description */}
      <div className="mb-4">
        <label htmlFor="eventDescription" className="block font-medium mb-1">
          Description
        </label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          className="textarea textarea-warning w-full rounded px-3 py-2"
          value={formData.eventDescription}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* Event Start DateTime */}
      <div className="mb-4">
        <label htmlFor="eventStart" className="block font-medium mb-1">
          Start Date & Time <span className="text-red-500">*</span>
        </label>
        <input
          type="datetime-local"
          id="eventStart"
          name="eventStart"
          className="input input-warning rounded px-3 py-2 w-full"
          value={formData.eventStart}
          onChange={handleInputChange}
        />
        <FieldError error={errors.eventStart} condition={!!errors.eventStart} />
      </div>

      {/* Event End DateTime */}
      <div className="mb-4">
        <label htmlFor="eventEnd" className="block font-medium mb-1">
          End Date & Time <span className="text-red-500">*</span>
        </label>
        <input
          type="datetime-local"
          id="eventEnd"
          name="eventEnd"
          className="input input-warning rounded px-3 py-2 w-full"
          value={formData.eventEnd}
          onChange={handleInputChange}
        />
        <FieldError error={errors.eventEnd} condition={!!errors.eventEnd} />
      </div>

      {/* Event Address */}
      {formData.eventType === "offline" && (
        <div className="mb-4">
          <label htmlFor="eventAddress" className="block font-medium mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="eventAddress"
            name="eventAddress"
            className="input input-warning rounded px-3 py-2 w-full"
            value={formData.eventAddress}
            onChange={handleInputChange}
          />
          <FieldError
            error={errors.eventAddress}
            condition={!!errors.eventAddress}
          />
        </div>
      )}

      {/* Event Location Map */}
      {formData.eventType === "offline" && (
        <div className="mb-6">
          <label htmlFor="locationMap" className="block font-medium mb-1">
            Location Maps
          </label>
          <div className="flex items-center">
            <span className="ml-2 cursor-pointer shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png"
                className="w-[50px] h-[50px]"
              ></img>
            </span>
          </div>
        </div>
      )}

      {/* Event Meet Link */}
      {formData.eventType === "online" && (
        <div className="mb-4">
          <label htmlFor="meetLink" className="block font-medium mb-1">
            Meeting Link <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="meetLink"
            name="meetLink"
            className="input input-warning rounded px-3 py-2 w-full"
            value={formData.meetLink}
            onChange={handleInputChange}
          />
          <FieldError error={errors.meetLink} condition={!!errors.meetLink} />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 shadow-md text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out"
      >
        {isEditing ? "Save" : "Create Event"}
      </button>
    </form>
  );
};

export default EventForm;
