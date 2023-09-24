import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HorizontalOrganizerCard, ReserveTicketCard } from "../components";
import { dateUtil } from "./../utils";

const EventDetails = () => {
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = await useAxios("GET", `/events/${id}`);
        if (response.statusCode === 200) {
          setEventDetail(response.data);
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

    fetchDetail();
  }, [id]);

  if (!eventDetail) {
    return <div>Loading...</div>;
  }

  return (
    // Image
    <div className="flex flex-col items-center mt-16">
      <div className=" flex justify-center container bg-slate-200 max-w-full">
        <img src={eventDetail.image} alt="" />
      </div>

      {/* Main Container */}
      <div className="flex max-w-7xl gap-24 pt-8 max-lg:flex-col max-lg: mx-20">
        <main className="">
          <p className=" font-semibold">
            {dateUtil.formatDate(eventDetail.startDate)}
          </p>
          <h1 className=" text-5xl font-bold mb-8">{eventDetail.title}</h1>

          <section>
            <div>
              <HorizontalOrganizerCard name={eventDetail.organizer.username} />
            </div>

            <div className=" mb-10">
              <h2 className=" text-2xl font-bold text-orange-700">Location</h2>
              <p className=" pt-3">
                <strong>Type:</strong> {eventDetail.eventType}
              </p>
              <p className=" pt-3">
                <strong>Place:</strong>{" "}
                {eventDetail.eventType === "Online"
                  ? "Zoom Meeting"
                  : eventDetail.location}
              </p>
              <br />
            </div>

            <div className=" mb-10">
              <h2 className=" text-2xl font-bold text-orange-700">
                Date and Time
              </h2>
              <p className=" pt-3">
                <strong>Start:</strong>{" "}
                {dateUtil.formatTime(eventDetail.startDate)}
              </p>
              <p className=" pt-3">
                <strong>End:</strong> {dateUtil.formatTime(eventDetail.endDate)}
              </p>
              <br />
            </div>

            <div className=" mb-16">
              <h2 className=" text-2xl font-bold text-orange-700">
                About this event
              </h2>
              <p className=" pt-3">{eventDetail.description}</p>
              <br />
            </div>
          </section>
        </main>
        <aside className="sticky top-0 h-96 max-lg:h-auto">
          <div className="mt-20">
            <ReserveTicketCard price={eventDetail.price} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EventDetails;
