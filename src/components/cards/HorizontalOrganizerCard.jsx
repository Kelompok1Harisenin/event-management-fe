const HorizontalOrganizerCard = () => {
  return (
    <div className="rounded-lg border-2 bg-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between p-3 mb-12">
      <div className="flex items-center md:items-start">
        <img
          src="src/assets/images/gambar1.png"
          alt="Shoes"
          className="rounded-full w-14 h-14 mr-4"
        />
        <div>
          <div>
            By&nbsp;
            <span className="font-semibold">Goethe-Institut Indonesian</span>
          </div>
          <div>1.7k followers</div>
        </div>
      </div>
      <button className="btn btn-neutral mt-3 md:mt-0 md:ml-3 md:self-end w-full md:w-auto">
        Follow
      </button>
    </div>
  );
};

export default HorizontalOrganizerCard;
