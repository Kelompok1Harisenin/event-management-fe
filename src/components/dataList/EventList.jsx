import { EventCard } from "..";

const inputEvent = {
  eventImg: [
    "/images/gambar1.png",
    "/images/gambar2.png",
    "/images/gambar3.png",
    "/images/gambar4.png",
    "/images/gambar5.png",
    "/images/gambar6.png",
    "/images/gambar7.png",
    "/images/gambar8.png",
  ],

  eventIcon: [
    "/images/like.png",
    "/images/like.png",
    "/images/like.png",
    "/images/like.png",
    "/images/like.png",
    "/images/like.png",
    "/images/like.png",
    "/images/like.png",
  ],

  eventName: [
    "Session 1 - Kelompok Satu HSBC Batch#7 - Full Stack Programer",
    "Session 2 - Kelompok Satu HSBC Batch#7 - Full Stack Programer",
    "Session 3 - Kelompok Satu HSBC Batch#7 - Full Stack Programer",
    "Session 4 - Kelompok Satu HSBC Batch#7 - Full Stack Programer",
    "Session 5 - Kelompok Satu HSBC Batch#7 - Full Stack Programer",
    "Session 6 - Kelompok Satu HSBC Batch#7 - Full Stack Programer",
    "Session 7 - Kelompok Satu HSBC Batch#7 - Full Stack Programer",
    "Session 8 - Kelompok Satu HSBC Batch#7 - Full Stack Programer",
  ],

  eventDate: [
    "Tue, Jun 13, 07:00 PM + 113 more events",
    "Wed, Jun 14, 08:00 PM + 113 more events",
    "Thu, Jun 15, 09:00 PM + 113 more events",
    "Fri, Jun 16, 10:00 PM + 113 more events",
    "Tue, Jun 20, 07:00 PM + 113 more events",
    "Wed, Jun 21, 08:00 PM + 113 more events",
    "Thu, Jun 22, 09:00 PM + 113 more events",
    "Fri, Jun 23, 10:00 PM + 113 more events",
  ],

  eventPlace: [
    "Surabaya • Surabaya, East Java",
    "Surabaya • Surabaya, East Java",
    "Surabaya • Surabaya, East Java",
    "Surabaya • Surabaya, East Java",
    "Surabaya • Surabaya, East Java",
    "Surabaya • Surabaya, East Java",
    "Surabaya • Surabaya, East Java",
    "Surabaya • Surabaya, East Java",
  ],

  eventCost: ["Free", "$100", "$200", "$300", "$400", "$500", "$600", "$700"],

  eventOrg: [
    "Kelompok Satu",
    "Kelompok Satu",
    "Kelompok Satu",
    "Kelompok Satu",
    "Kelompok Satu",
    "Kelompok Satu",
    "Kelompok Satu",
    "Kelompok Satu",
  ],

  eventNote: [
    "👤 7.7k followers",
    "👤 7.7k followers",
    "👤 7.7k followers",
    "👤 7.7k followers",
    "👤 7.7k followers",
    "👤 7.7k followers",
    "👤 7.7k followers",
    "👤 7.7k followers",
  ],
};

const LoadData = () => {
  return inputEvent.eventName.map((eventName, index) => (
    <EventCard
      key={index}
      icon={inputEvent.eventIcon[index]}
      img={inputEvent.eventImg[index]}
      name={inputEvent.eventName[index]}
      date={inputEvent.eventDate[index]}
      place={inputEvent.eventPlace[index]}
      cost={inputEvent.eventCost[index]}
      org={inputEvent.eventOrg[index]}
      note={inputEvent.eventNote[index]}
    />
  ));
};

const EventList = () => {
  return (
    <section className="py-2">
      <h2 className="md:mx-5 text-orange-700 mt-10 mb-5 px-5 uppercase font-bold text-xl relative">
        All Events
      </h2>
      <div className="max-lg:grid-cols-3 max-lg:px-5 max-sm:grid-cols-2 max-sm:px-0 grid grid-cols-4 gap-5 px-10 bg-slate-100">
        <LoadData />
      </div>
    </section>
  );
};

export default EventList;
