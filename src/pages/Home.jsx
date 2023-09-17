import {
  HeroBanner,
  EventList,
  OrganizerList,
  EventAttendList,
  ContactSalesForm,
  ScrollToTopButton,
} from "./../components";
import slides from "./../data/banners.json";

const Home = () => {
  return (
    <div>
      <HeroBanner slides={slides} />
      <EventList />
      <EventAttendList />
      <OrganizerList />
      <ContactSalesForm />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
