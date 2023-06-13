import './App.css';
import EventCard from '../components/EventCard'

import like from './img/like.png';

import pic1 from './img/gambar1.png';
import pic2 from './img/gambar2.png';
import pic3 from './img/gambar3.png';
import pic4 from './img/gambar4.png';
import pic5 from './img/gambar5.png';
import pic6 from './img/gambar6.png';
import pic7 from './img/gambar7.png';
import pic8 from './img/gambar8.png';

const inputEvent = {
  eventImg: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8],

  eventName: ["Session 1 - Kelompok Satu HSBC Batch#7 - Full Stack Programer", "Session 2 - Kelompok Satu HSBC Batch#7 - Full Stack Programer", "Session 3 - Kelompok Satu HSBC Batch#7 - Full Stack Programer", "Session 4 - Kelompok Satu HSBC Batch#7 - Full Stack Programer", "Session 5 - Kelompok Satu HSBC Batch#7 - Full Stack Programer", "Session 6 - Kelompok Satu HSBC Batch#7 - Full Stack Programer", "Session 7 - Kelompok Satu HSBC Batch#7 - Full Stack Programer", "Session 8 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"],

  eventDate: ["Tue, Jun 13, 07:00 PM + 113 more events", "Wed, Jun 14, 08:00 PM + 113 more events", "Thu, Jun 15, 09:00 PM + 113 more events", "Fri, Jun 16, 10:00 PM + 113 more events", "Tue, Jun 20, 07:00 PM + 113 more events", "Wed, Jun 21, 08:00 PM + 113 more events", "Thu, Jun 22, 09:00 PM + 113 more events", "Fri, Jun 23, 10:00 PM + 113 more events"],

  eventPlace: ["Surabaya • Surabaya, East Java", "Surabaya • Surabaya, East Java", "Surabaya • Surabaya, East Java", "Surabaya • Surabaya, East Java", "Surabaya • Surabaya, East Java", "Surabaya • Surabaya, East Java", "Surabaya • Surabaya, East Java", "Surabaya • Surabaya, East Java"],

  eventCost: ["Free", "$100", "$200", "$300", "$400", "$500", "$600", "$700"],

  eventOrg: ["Kelompok Satu", "Kelompok Satu", "Kelompok Satu", "Kelompok Satu", "Kelompok Satu", "Kelompok Satu", "Kelompok Satu", "Kelompok Satu"],

  eventNote: ["👤 7.7k followers", "👤 7.7k followers", "👤 7.7k followers", "👤 7.7k followers", "👤 7.7k followers", "👤 7.7k followers", "👤 7.7k followers", "👤 7.7k followers"],
};

function RenderUlang() {
  return inputEvent.eventName.map((eventName, index) => (
    <EventCardChi
      key={index}
      icon={like}
      img={inputEvent.eventImg[index]}
      name={eventName}
      date={inputEvent.eventDate[index]}
      place={inputEvent.eventPlace[index]}
      cost={inputEvent.eventCost[index]}
      org={inputEvent.eventOrg[index]}
      note={inputEvent.eventNote[index]}
    />
  ));
}

function EventCard() {
  return (
    <div className='max-lg:grid-cols-3 max-lg:px-5 max-sm:grid-cols-2 max-sm:px-0 grid grid-cols-4 gap-5 px-10 bg-slate-100'>
      <RenderUlang />
    </div>
  );
}

export default EventCard;
