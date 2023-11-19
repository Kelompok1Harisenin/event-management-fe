import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "./../../config/firebase";

const EventCard = (props) => {
  useEffect(() => {
    const eventTrace = firebase.perfTrace(`event_card_render_${props.id}`);

    const startTime = Date.now();

    eventTrace.start();

    return () => {
      eventTrace.stop();

      // Calculate the duration and add it as a metric
      const duration = Date.now() - startTime;
      eventTrace.putMetric("event_render_duration", duration);
    };
  }, [props.id]);
  return (
    <Link to={`/event/${props.id}`}>
      <div className="grid grid-cols-1 w-full border rounded-md bg-white my-10 cursor-pointer duration-200 delay-150 hover:shadow-2xl hover:delay-200">
        <div className="relative col-span-1 w-full text-left">
          <img src={props.img} alt="Event Pic" className="w-96 h-52" />
          <div className="absolute w-3/12 -bottom-5 right-0 animate-pulse">
            <Link to="">
              <img src={props.icon} alt="Event Pic" />
            </Link>
          </div>
        </div>

        <div className="col-span-1 w-full text-left mt-8 my-1 px-2 font-bold text-lg">
          {props.name}
        </div>
        <div className="col-span-1 w-full text-left my-1 px-2">
          <p className="font-semibold text-md text-red-700">{props.date}</p>
        </div>

        <div className="col-span-1 w-full text-left my-1 px-2">
          <p>
            <span className="text-blue-700">{props.type}</span>
            <br />
            <span className="text-red-800 font-medium">{props.cost}</span>
          </p>
        </div>
        <div className="col-span-1 w-full text-left my-1 px-2">
          <p className="font-semibold text-md text-orange-600">{props.org}</p>
          <p className="text-md line-clamp-2 text-gray-500">{props.note}</p>
        </div>
      </div>
    </Link>
  );
};

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};

export default EventCard;
