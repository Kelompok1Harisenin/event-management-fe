import './App.css'
import EventCard from './EventCard.jsx'

import like from './assets/like.png'

import pic from './assets/pic.png';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';

function TakeOne() {
  return <EventCard
    img={pic}
    icon={like}
    name="Session 1 - How to Improve Your Memory - Surabaya"
    date="Tue, Jun 13, 07:00 PM + 173 more events"
    place1="Surabaya • Surabaya, East Java"
    place2="Free"
    note1="Iris Reading"
    note2="👤 1.9k followers"
  />
}

function TakeTwo() {
  return <EventCard
    img={pic1}
    icon={like}
    name="Session 2 - How to Improve Your Memory - Surabaya"
    date="Wed, Jun 14, 08:00 PM + 173 more events"
    place1="Surabaya • Surabaya, East Java"
    place2="Free"
    note1="Iris Reading"
    note2="👤 1.9k followers"
  />
}

function TakeThree() {
  return <EventCard
    img={pic2}
    icon={like}
    name="Session 3 - How to Improve Your Memory - Surabaya"
    date="Thu, Jun 15, 09:00 PM + 173 more events"
    place1="Surabaya • Surabaya, East Java"
    place2="Free"
    note1="Iris Reading"
    note2="👤 1.9k followers"
  />
}

function TakeFour() {
  return <EventCard
    img={pic3}
    icon={like}
    name="Session 4 - How to Improve Your Memory - Surabaya"
    date="Fri, Jun 16, 10:00 PM + 173 more events"
    place1="Surabaya • Surabaya, East Java"
    place2="Free"
    note1="Iris Reading"
    note2="👤 1.9k followers"
  />
}

function App() {
  return (
    <div className='max-lg:grid-cols-3 max-lg:px-5 max-sm:grid-cols-2 max-sm:px-0 grid grid-cols-4 gap-5 px-10'>
      <TakeOne />
      <TakeTwo />
      <TakeThree />
      <TakeFour />
    </div>
  )
}

export default App
