import OrganizerCard from "./../cards/OrganizerCard";

const OrganizerList = () => {
  return (
    <section>
      <h2 className="md:mx-5 text-orange-700 mt-10 mb-5 px-5 uppercase font-bold text-xl relative">
        Organizers
      </h2>
      <div className="max-lg:grid-cols-3 max-lg:px-5 max-sm:grid-cols-2 max-sm:px-0 grid grid-cols-4 gap-5 px-10 bg-slate-100">
        <OrganizerCard />
      </div>
    </section>
  );
};

export default OrganizerList;
