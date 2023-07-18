import CountryList from "../dataList/CountryList";
import Background from "../../assets/images/bgContactSales.jpg";

const ContactSalesForm = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-repeat py-5"
    >
      <div className="w-[400px] md:w-[600px] m-auto rounded-lg px-5 py-5 box-content">
        <p className="font-bold text-center md:text-justify text-slate-800">
          Fill out the form bellow to learn about how to get the most out of
          EventRiser, sell out your event, and delight your attendees
        </p>
        <div className="w-[300px] md:w-[400px] bg-slate-700 border border-slate-100 rounded-lg m-auto mt-8 mb-5 px-5 py-5 box-content">
          <form className="block">
            <label className="grid grid-cols-1 mb-3 text-slate-100">
              Email&#42;
              <input className="border border-slate-800" type="email" />
            </label>
            <label className="grid grid-cols-1 mb-3 text-slate-100">
              Company Name&#42;
              <input className="border border-slate-800" type="text" />
            </label>
            <div className="grid grid-cols-2 mb-3 gap-3">
              <label className="grid col-span-1 grid-cols-1 text-slate-100">
                First Name&#42;
                <input className="border border-slate-800" type="text" />
              </label>
              <label className="grid col-span-1 grid-cols-1 text-slate-100">
                Last Name&#42;
                <input className="border border-slate-800" type="text" />
              </label>
            </div>
            <div className="mb-3">
              <label className="text-slate-100" htmlFor="tipe">
                Organization Type&#42;:
              </label>
              <br />
              <select
                className="border border-slate-800 w-full"
                name="organisasi"
                id="tipe"
              >
                <option value="" disabled selected>
                  Select...
                </option>
                <option value="non-profit">Non-Profit</option>
                <option value="profit">Profit</option>
              </select>
            </div>
            <label className="grid grid-cols-1 mb-3 text-sm text-slate-100">
              Phone Number&#42;
              <input className="border border-slate-800" type="text" />
            </label>
            <div className="mb-3">
              <label className="text-sm text-slate-100" htmlFor="tipe">
                Country/State/City&#42;:
              </label>
              <br />
              <CountryList />
            </div>
            <div className="mb-3">
              <label className="text-sm text-slate-100" htmlFor="tipe">
                How many tickets do you normally sell in one year?&#42;:
              </label>
              <br />
              <select
                className="border border-slate-800 w-full"
                name="tickets"
                id="sales"
              >
                <option value="" disabled selected>
                  Select...
                </option>
                <option value="0">I only host free events</option>
                <option value="1">1 - 100</option>
                <option value="2">100 - 500</option>
                <option value="3">500 - 1,000</option>
                <option value="4">1,000 -5,000</option>
                <option value="5">5,000 - 10,000</option>
                <option value="6">10,000+</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="text-slate-100" htmlFor="tipe">
                Reason for getting in touch
              </label>
              <br />
              <select
                className="border border-slate-800 w-full"
                name="intouch"
                id="reason"
              >
                <option value="" disabled selected>
                  Select...
                </option>
                <option value="reason1">
                  I want to speak with the sales to learn more about using
                  EventRiser for my events
                </option>
                <option value="reason2">
                  I&apos;m already an EvenRiser customer looking for help with my
                  account
                </option>
                <option value="reason3">
                  I&apos;m an EvenRiser customer seeking to speak with someone about
                  upgrading my package
                </option>
                <option value="reason4">
                  I have a question about a ticket I purchased for an
                  EventRises event
                </option>
                <option value="reason5">Something else</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="text-slate-100" htmlFor="tipe">
                How did you hear about EventRiser?
              </label>
              <br />
              <select
                className="border border-slate-800 w-full"
                name="cars"
                id="how"
              >
                <option value="" disabled selected>
                  Select...
                </option>
                <option value="how1">Web Search (Google, etc)</option>
                <option value="how2">Social Media</option>
                <option value="how3">Web Search (Google, etc)</option>
                <option value="how4">
                  Software Evaluation Site (G2, Capterra, Etc)
                </option>
                <option value="how5">Other Website</option>
                <option value="how6">
                  Recommended by a Friend or Colleague
                </option>
                <option value="how7">I&apos;ve hosted an Event on EventRiser</option>
                <option value="how8">
                  I&apos;ve purchased a Ticket on EventRiser
                </option>
              </select>
            </div>
            <button className="border bg-orange-500 px-3 py-1 rounded-md font-semibold cursor-pointer hover:scale-105 ease-in duration-300">
              Contact Sales
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSalesForm;
