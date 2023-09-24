import PropTypes from "prop-types";
import { useState } from "react";

const ReserveTicketCard = ({ price }) => {
  const [count, setCount] = useState(1);

  function decrementCount() {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  // Set button color to grey if count = 1
  const decrementButtonColor =
    count === 1
      ? "py-1 px-3 text-white bg-gray-300 rounded"
      : "py-1 px-3 text-white bg-blue-700 rounded";

  // Set button disabled if count = 1
  const isDecrementDisabled = count === 1;

  return (
    <div className="border rounded-lg border-gray-400 container w-80 h-fit p-4 border-opacity-30 bg-white ">
      <div className="border-2 border-blue-700 mb-2 p-4 rounded-lg">
        <div className="flex justify-between content-center">
          <div>
            <p>General Admission</p>
          </div>
          {/* <div>
            <button
              onClick={decrementCount}
              className={decrementButtonColor}
              disabled={isDecrementDisabled}
            >
              -
            </button>
            <span className="p-2">{count}</span>
            <button
              onClick={incrementCount}
              className="py-1 px-3 text-white bg-blue-700 rounded"
            >
              +
            </button>
          </div> */}
        </div>
        <div className="flex">
          <p>{price === 0 ? "Free" : `$${price}`}</p>
        </div>
      </div>
      <div>
        <button className=" text-white btn-primary bg-orange-500 hover:bg-orange-600 btn-block p-1 rounded-md">
          Reserve a spot
        </button>
      </div>
    </div>
  );
};

ReserveTicketCard.propTypes = {
  price: PropTypes.string.isRequired,
};

export default ReserveTicketCard;
