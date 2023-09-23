import { HorizontalOrganizerCard, ReserveTicketCard } from "../components";

const EventDetails = () => {
  return (
    // Image
    <div className="flex flex-col items-center mt-24">
      <div className=" flex justify-center container bg-slate-200 max-w-full">
        <img src="/images/gambar1.png" alt="" />
      </div>

      {/* Main Container */}
      <div className="flex max-w-7xl gap-24 pt-8 max-lg:flex-col max-lg: mx-20">
        <main className="">
          <p className=" font-semibold">Saturday, August 5</p>
          <h1 className=" text-5xl font-bold mb-8">Nama Event</h1>
          <p className=" mb-8">Lorem ipsum dolor sit amet</p>

          <section>
            <div>
              <HorizontalOrganizerCard />
            </div>

            {/* About this event */}
            <div className=" mb-16">
              <h2 className=" text-xl font-semibold">About this event</h2>
              <p className=" pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ad a suscipit recusandae neque eos commodi debitis,
                ipsum quae quis soluta eius nihil porro esse quam quisquam
                distinctio culpa? Nobis aliquid error possimus laborum nemo
                harum? Non, inventore accusantium! Voluptatem laborum at, sint
                eius cupiditate quis, fugit veritatis tenetur asperiores amet
                molestias quo explicabo, beatae quod in et.
              </p>
              <p>
                Dignissimos quas modi voluptatibus doloribus repudiandae, sint
                officia, veniam rem reprehenderit vel atque aspernatur error
                cumque commodi libero laborum hic corrupti eos! Sed soluta,
                debitis amet consequatur aliquam, provident, doloremque enim
                fugit quis nostrum quaerat veniam ea excepturi qui hic et
                accusantium quisquam neque placeat? Perspiciatis earum
                cupiditate necessitatibus minima repellat deleniti enim
                reiciendis.
              </p>
              <br />
              <p>
                Quod laudantium, non accusantium quis cupiditate, expedita nisi
                consectetur asperiores veritatis nulla ad culpa facere laborum?
                Odio, aliquid saepe veniam perspiciatis magnam dolores eligendi
                modi. Earum assumenda odit sed, ipsam, quas obcaecati debitis
                veritatis quaerat corrupti dolorum iste nesciunt odio
                necessitatibus maiores! Officia ea fuga sunt veritatis
                consequatur tempora, cupiditate obcaecati. Distinctio aspernatur
                atque rem reiciendis, a minus fugiat debitis fugit perferendis
                dolorem quae veniam animi dolorum. Nobis ipsam dolorem beatae
                nihil labore, impedit est facere, eveniet aspernatur sunt quam
                blanditiis dignissimos, cumque quasi quia a quae molestiae.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                iusto alias deleniti doloribus maxime possimus quas veniam
                corporis mollitia at odio sint rem consequatur, et distinctio
                minus veritatis voluptatum sunt esse repellendus in laborum!
                Dignissimos nemo a quam, minima iste tempore nulla totam
                voluptatum consectetur accusantium doloremque explicabo neque
                molestiae magnam reprehenderit. Numquam quidem, aliquid
                voluptatem est similique culpa omnis consectetur laudantium
                molestias eaque hic nostrum, quaerat temporibus iste
                voluptatibus! Inventore, corporis? Incidunt, exercitationem eius
                voluptates nesciunt qui dolores similique asperiores ab eveniet
                consectetur voluptatum laborum sit, doloribus eum, reiciendis
                eligendi provident inventore amet corrupti dolore molestias
                distinctio repellat sed! Repellendus eveniet cumque sed
                inventore officia minus? Eveniet, quia aperiam. Repudiandae aut
                tempora, sed doloremque impedit a numquam obcaecati,
                voluptatibus unde officia veritatis id necessitatibus delectus
                modif.
              </p>
            </div>
          </section>
        </main>
        <aside className="sticky top-0 h-96 max-lg:h-auto">
          <div className="mt-20">
            <ReserveTicketCard />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EventDetails;
