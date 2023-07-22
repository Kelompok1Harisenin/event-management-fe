import {
  EventList,
  OrganizerList,
  EventAttendList,
  ContactSalesForm,
  ScrollToTopButton,
} from "./../components";

const Home = () => {
  return (
    <div className="py-10 mt-12">
      {/* Hero Section */}
      <section className="px-2 max-lg:px-1 max-sm:px-0">
        <img src="/images/riserHero.png" alt="hero-riser" />
      </section>

      <EventList />
      <EventAttendList />
      <OrganizerList />
      <ContactSalesForm />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
