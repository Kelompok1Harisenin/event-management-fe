function EventCard(props) {
  return (
    <div className='grid grid-cols-1 w-full bg-white my-10 duration-200 delay-150 hover:shadow-2xl hover:delay-200'>

      <div className='relative col-span-1 w-full text-left'>
        <img src={props.img} alt="Event Pic" />
        <div className='absolute w-3/12 -bottom-5 right-0 animate-pulse'>
          <a href="#"><img src={props.icon} alt="Event Pic" /></a>
        </div>
      </div>

      <div className='col-span-1 w-full text-left mt-8 my-1 px-2'>
        <a href='#' className='font-bold text-lg'>{props.name}</a>
      </div>
      <div className='col-span-1 w-full text-left my-1 px-2'>
        <p className='font-semibold text-md text-red-700'>{props.date}</p>
      </div>

      <div className='col-span-1 w-full text-left my-1 px-2'>
        <p>{props.place}<br/>{props.cost}</p>
      </div>
      <div className='col-span-1 w-full text-left my-1 px-2'>
        <p className='font-semibold text-md '>{props.org}<br/>{props.note}</p>
      </div>

    </div>
  )
}

export default EventCard;
