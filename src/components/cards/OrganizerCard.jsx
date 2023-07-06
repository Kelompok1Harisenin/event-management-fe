import React from "react";

const OrganizerCard = () => {
  return (
    <div className="card rounded-none bg-white w-64">
      <figure className="px-10 pt-10">
        <img
          src="src/assets/images/gambar1.png"
          alt="Shoes"
          className="rounded-full w-24 h-24"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold">Rusty Harden Studio</h2>
        <p>7678 followers</p>
        <div className="card-actions">
          <button className="btn btn-outline">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default OrganizerCard;
