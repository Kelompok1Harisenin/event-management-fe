import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { dateUtil } from "./../../utils";
import { EventCard } from "..";

const EventList = () => {
  const [eventListData, setEventListData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = "/events/";
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = await useAxios("get", endpoint);

        if (response.statusCode === 200) {
          setEventListData(response.data);
        } else {
          console.error(
            "Failed to fetch data. Status code:",
            response.statusCode
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-2">
      <h2 className="md:mx-5 text-orange-700 mt-10 mb-5 px-5 uppercase font-bold text-xl relative">
        All Events
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="max-lg:grid-cols-3 max-lg:px-5 max-sm:grid-cols-2 max-sm:px-0 grid grid-cols-4 gap-5 px-10 bg-slate-100">
          {eventListData.map((row) => (
            <EventCard
              key={row.id}
              id={row.id}
              icon="/images/like.png"
              img={row.image}
              name={row.title}
              date={dateUtil.formatDateTime(row.startDate)}
              place={row.location}
              type={row.eventType}
              cost={row.price === 0 ? "Free" : `$${row.price}`}
              org={row.organizer.username}
              note={row.description}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default EventList;
