// import React from 'react';
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
      <div id="behind" className="w-full h-full fixed top-0 left-0 bg-black/60 overflow-auto">
        <div className="w-5/6 h-4/5 mx-auto mt-24 md:grid md:grid-cols-5">
          <div className="md:col-span-3 bg-white rounded-lg relative z-10 overflow-y-auto">
            <div className="w-11/12 h-full mx-auto grid grid-rows-8 snap-y">
              <div className="text-center row-span-1">
                <h1 className="text-3xl my-2">Title</h1>
              </div>
              <div id="detail" className="row-span-6">
                <div className="md:hidden">
                  <img src="/images/gambar7.png" alt="" className="w-full items-center max-md:mx-auto" />
                </div>
                <p className="text-lg">
                  about : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem doloremque accusantium
                  nisi! Commodi totam ratione, neque perspiciatis placeat amet facere molestiae vitae obcaecati qui itaque
                  non culpa dolorem alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus
                  tempore quo magni dolorum perspiciatis beatae voluptate voluptates. Itaque numquam dicta rem eveniet!
                  Nihil dolorem error inventore reprehenderit quam sunt Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Praesentium error iure corporis voluptate obcaecati necessitatibus blanditiis quas voluptatibus eos
                  pariatur assumenda doloremque, sapiente fuga? Commodi id deleniti beatae est voluptatem.
                </p>
                <div id="price" className="flex my-5">
                  <div className="mr-auto">(1x) Ticket</div>
                  <div className="mr-10">free</div>
                </div>
              </div>
            </div>
            <div className="flex row-span-1 justify-center relative md:bottom-20 max-md:bottom-10">
              <button className="btn btn-error" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn btn-success ml-3">Buying</button>
            </div>
          </div>
          <div className="md:col-span-2 bg-transparent flex max-md:fixed max-md:top-0 z-50 max-md:hidden">
            <img src="/images/gambar7.png" alt="" className="w-full my-auto items-center max-md:mx-auto" />
          </div>
        </div>
      </div>
    )
  );
}
