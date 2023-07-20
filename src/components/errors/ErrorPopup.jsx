import PropTypes from "prop-types";
import { useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

const ErrorPopup = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="z-[1000] bg-red-600 text-white text-lg p-4 rounded-md shadow-md absolute top-5 right-5">
      <div className="flex">
        <RiCloseLine className="h-6 w-6 mr-2" />
        <h2 className="font-bold">ERROR</h2>
      </div>
      <p>{message}</p>
    </div>
  );
};

ErrorPopup.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default ErrorPopup;
