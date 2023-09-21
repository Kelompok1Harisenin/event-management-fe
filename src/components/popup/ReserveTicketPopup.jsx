// import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from './action';

export default function ReserveTicketPopup() {
  const isPopupVisible = useSelector(state => state.popup.isPopupVisible);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(closePopup());
  };
  return (
    isPopupVisible && (
    <div id="behind" className={`w-full h-full fixed top-0 left-0 bg-black/60`}>
      <div className=" w-5/6 h-4/5 mx-auto mt-24 grid grid-cols-5">
        <div className=" col-span-3 bg-white rounded-lg relative z-10">
          <div className="w-11/12 h-full mx-auto grid grid-rows-8">
            <div className=" text-center row-span-1"><h1 className=" text-3xl my-2">Title</h1></div>
            <div className=" my-5 row-span-6 snap-y">
              <p className=" text-lg">about : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem doloremque accusantium nisi! Commodi totam ratione, neque perspiciatis placeat amet facere molestiae vitae obcaecati qui itaque non culpa dolorem alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus tempore quo magni dolorum perspiciatis beatae voluptate voluptates. Itaque numquam dicta rem eveniet! Nihil dolorem error inventore reprehenderit quam sunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium error iure corporis voluptate obcaecati necessitatibus blanditiis quas voluptatibus eos pariatur assumenda doloremque, sapiente fuga? Commodi id deleniti beatae est voluptatem.</p>
              <div id="price" className="flex">
                <div className="mr-auto">
                  (1x) Ticket
                </div>
                <div className="mr-10">
                  free
                </div>
              </div>
            </div>
            <div className="flex  row-span-1">
              <div className="flex w-1/2 m-auto">
                <button className="btn btn-error ml-auto mr-3" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-success mr-auto ml-">Buying</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 bg-transparent flex">
          <img src="/images/gambar7.png" alt="" className="w-full my-auto items-center" />
        </div>
      </div>
    </div>
    )
  )


}
