import {
  OrganizerCard,
  EventList,
  OrganizerList,
  EventAttendList,
  ContactSalesForm,
} from "./../components";

const Home = () => {
  return (
    <div className="py-10">
      <div className="px-2 max-lg:px-1 max-sm:px-0">
        <img src="src/assets/images/riserHero.png" alt="hero-riser" />
      </div>
      <EventList />
      <EventAttendList />
      <OrganizerList />
      {/* <ContactSalesForm /> */}

      <OrganizerCard />
    </div>
  );
};

export default Home;
