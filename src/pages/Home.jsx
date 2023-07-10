import EventList from "../components/eventList/EventList";
import EventAttend from "../components/EventAttend";
import OrganizerList from "../components/OrganizerList";
import ContactSales from "../components/contactSales/ContactSales";

const Home = () => {
  return (
    <div className="py-10">
      <div className="px-2 max-lg:px-1 max-sm:px-0">
        <img src="src/assets/images/riserHero.png" alt="hero riser" />
      </div>
      <EventList />
      <EventAttend />
      <OrganizerList />
      <ContactSales />
    </div>
  );
}

export default Home;
