import PropTypes from "prop-types";
import Cookies from "js-cookie";
import useAxios from "./../../hooks/useAxios";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { dateUtil } from "./../../utils";
import { LoadingSpinner } from "./../../components";

const ReserveTicketPopup = ({ event, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmClick = async () => {
    try {
      setIsLoading(true);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const data = {
        eventId: event.id,
      };
      const headers = {
        Authorization: JSON.parse(Cookies.get("accessToken")),
      };
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = await useAxios("POST", `/tickets`, data, { headers });
      if (response.statusCode === 201) {
        onClose();
      } else {
        console.error(
          "Ticket reservation failed. Status code:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error while making the request:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-1000">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/5 h-3/5 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-700 hover:text-gray-300 focus:outline-none"
        >
          <FaTimes size={24} /> {/* Use the close icon */}
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-orange-700">
          {event.title}
        </h2>
        <hr />
        <div className="mt-8">
          <p className="mb-4">
            <span className="font-semibold">Type:</span>{" "}
            <span className="text-blue-700">{event.eventType}</span>
          </p>
          <p className="mb-4">
            {event.eventType === "Online" ? "Meeting Link" : event.location}
          </p>
        </div>
        <div className="mt-10">
          <p className="text-md">
            <span className="font-semibold">Date:</span>{" "}
            {dateUtil.formatDate(event.startDate)}
          </p>
          <p className="text-md">
            <span className="font-semibold">Time:</span>{" "}
            {dateUtil.formatTime(event.startDate)} -{" "}
            {dateUtil.formatTime(event.endDate)}
          </p>
          <p className="text-xl font-semibold text-red-700 mt-4">
            {event.price === 0 ? "Free" : `$${event.price}`}
          </p>
        </div>
        <div className="absolute bottom-4 right-4">
          {isLoading ? (
            <LoadingSpinner /> // Render the LoadingSpinner component when isLoading is true
          ) : (
            <button
              onClick={handleConfirmClick}
              className="bg-orange-500 text-white hover:bg-orange-600 py-2 px-4 rounded-md focus:outline-none flex items-center"
            >
              <IoCheckmarkCircleSharp size={22} className="mr-2" />
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ReserveTicketPopup.propTypes = {
  event: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ReserveTicketPopup;
