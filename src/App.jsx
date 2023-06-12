import './App.css'
import EventCard from './EventCard.jsx'

import like from './assets/like.png'

import pic from './assets/pic.png';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';
import pic7 from './assets/pic7.png';


function Take1() {
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

function Take2() {
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

function Take3() {
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

function Take4() {
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

function Take5() {
  return <EventCard
    img={pic4}
    icon={like}
    name="Session 5 - How to Improve Your Memory - Surabaya"
    date="Tue, Jun 20, 07:00 PM + 173 more events"
    place1="Surabaya • Surabaya, East Java"
    place2="Free"
    note1="Iris Reading"
    note2="👤 1.9k followers"
  />
}

function Take6() {
  return <EventCard
    img={pic5}
    icon={like}
    name="Session 6 - How to Improve Your Memory - Surabaya"
    date="Wed, Jun 21, 08:00 PM + 173 more events"
    place1="Surabaya • Surabaya, East Java"
    place2="Free"
    note1="Iris Reading"
    note2="👤 1.9k followers"
  />
}

function Take7() {
  return <EventCard
    img={pic6}
    icon={like}
    name="Session 7 - How to Improve Your Memory - Surabaya"
    date="Thu, Jun 22, 09:00 PM + 173 more events"
    place1="Surabaya • Surabaya, East Java"
    place2="Free"
    note1="Iris Reading"
    note2="👤 1.9k followers"
  />
}

function Take8() {
  return <EventCard
    img={pic7}
    icon={like}
    name="Session 8 - How to Improve Your Memory - Surabaya"
    date="Fri, Jun 23, 10:00 PM + 173 more events"
    place1="Surabaya • Surabaya, East Java"
    place2="Free"
    note1="Iris Reading"
    note2="👤 1.9k followers"
  />
}

function App() {
  return (
    <div className='max-lg:grid-cols-3 max-lg:px-5 max-sm:grid-cols-2 max-sm:px-0 grid grid-cols-4 gap-5 px-10 bg-slate-100'>
      <Take1 />
      <Take2 />
      <Take3 />
      <Take4 />
      <Take5 />
      <Take6 />
      <Take7 />
      <Take8 />
    </div>
  )
}

export default App
