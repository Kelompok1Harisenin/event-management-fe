const OrganizerCard = () => {
  return (
    <div className="card m-4 border rounded-md shadow-md bg-white w-64 cursor-pointer duration-200 delay-150 hover:shadow-2xl hover:delay-200">
      <figure className="px-10 pt-10">
        <img
          src="/images/gambar1.png"
          alt="Shoes"
          className="rounded-full w-24 h-24"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold">Rusty Harden Studio</h2>
        <p>7678 followers</p>
        <div className="card-actions">
          <button className="btn btn-outline">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default OrganizerCard;
