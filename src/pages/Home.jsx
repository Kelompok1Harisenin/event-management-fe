import { EventCard, OrganizerCard } from "./../components";

const Home = () => {
  return (
    <div className="max-lg:grid-cols-3 max-lg:px-5 max-sm:grid-cols-2 max-sm:px-0 grid grid-cols-4 gap-5 px-10 bg-slate-100">
      <EventCard
        img="src/assets/images/gambar1.png"
        icon="src/assets/images/like.png"
        name="Session 1 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"
        date="Tue, Jun 13, 07:00 PM + 113 more events"
        place="Surabaya • Surabaya, East Java"
        cost="Free"
        org="Kelompok Satu"
        note="👤 7.7k followers"
      />

      <EventCard
        img="src/assets/images/gambar2.png"
        icon="src/assets/images/like.png"
        name="Session 2 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"
        date="Wed, Jun 14, 08:00 PM + 113 more events"
        place="Surabaya • Surabaya, East Java"
        cost="Free"
        org="Kelompok Satu"
        note="👤 7.7k followers"
      />

      <EventCard
        img="src/assets/images/gambar3.png"
        icon="src/assets/images/like.png"
        name="Session 3 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"
        date="Thu, Jun 15, 09:00 PM + 113 more events"
        place="Surabaya • Surabaya, East Java"
        cost="Free"
        org="Kelompok Satu"
        note="👤 7.7k followers"
      />

      <EventCard
        img="src/assets/images/gambar4.png"
        icon="src/assets/images/like.png"
        name="Session 4 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"
        date="Fri, Jun 16, 10:00 PM + 113 more events"
        place="Surabaya • Surabaya, East Java"
        cost="Free"
        org="Kelompok Satu"
        note="👤 7.7k followers"
      />

      <EventCard
        img="src/assets/images/gambar5.png"
        icon="src/assets/images/like.png"
        name="Session 5 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"
        date="Tue, Jun 20, 07:00 PM + 113 more events"
        place="Surabaya • Surabaya, East Java"
        cost="Free"
        org="Kelompok Satu"
        note="👤 7.7k followers"
      />
      <EventCard
        img="src/assets/images/gambar6.png"
        icon="src/assets/images/like.png"
        name="Session 6 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"
        date="Wed, Jun 21, 08:00 PM + 113 more events"
        place="Surabaya • Surabaya, East Java"
        cost="Free"
        org="Kelompok Satu"
        note="👤 7.7k followers"
      />

      <EventCard
        img="src/assets/images/gambar7.png"
        icon="src/assets/images/like.png"
        name="Session 7 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"
        date="Thu, Jun 22, 09:00 PM + 113 more events"
        place="Surabaya • Surabaya, East Java"
        cost="Free"
        org="Kelompok Satu"
        note="👤 7.7k followers"
      />

      <EventCard
        img="src/assets/images/gambar8.png"
        icon="src/assets/images/like.png"
        name="Session 8 - Kelompok Satu HSBC Batch#7 - Full Stack Programer"
        date="Fri, Jun 23, 10:00 PM + 113 more events"
        place="Surabaya • Surabaya, East Java"
        cost="Free"
        org="Kelompok Satu"
        note="👤 7.7k followers"
      />

      <OrganizerCard />
    </div>
  );
};

export default Home;
