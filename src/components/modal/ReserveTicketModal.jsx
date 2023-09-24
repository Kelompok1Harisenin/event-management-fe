import React from "react";

const ReserveTicketModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Reservation Form</h2>
        {/* Add your reservation form here */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white hover:bg-blue-400 py-2 px-4 rounded-full focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReserveTicketModal;
