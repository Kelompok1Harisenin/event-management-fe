import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const EventCard = (props) => {
  EventCard.propTypes = {
    img: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
  };

  return (
    <div className="grid grid-cols-1 w-full bg-white my-10 duration-200 delay-150 hover:shadow-2xl hover:delay-200">
      <div className="relative col-span-1 w-full text-left">
        <img src={props.img} alt="Event Pic" />
        <div className="absolute w-3/12 -bottom-5 right-0 animate-pulse">
          <NavLink to="#">
            <img src={props.icon} alt="Event Pic" />
          </NavLink>
        </div>
      </div>

      <div className="col-span-1 w-full text-left mt-8 my-1 px-2">
        <NavLink to="event-details" className="font-bold text-lg">
          {props.name}
        </NavLink>
      </div>
      <div className="col-span-1 w-full text-left my-1 px-2">
        <p className="font-semibold text-md text-red-700">{props.date}</p>
      </div>

      <div className="col-span-1 w-full text-left my-1 px-2">
        <p>
          {props.place}
          <br />
          {props.cost}
        </p>
      </div>
      <div className="col-span-1 w-full text-left my-1 px-2">
        <p className="font-semibold text-md ">
          {props.org}
          <br />
          {props.note}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
