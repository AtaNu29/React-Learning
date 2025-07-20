import React from 'react'

function card({src, userName, price = 50, cardValue}) {
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] mt-3">
      <div>
        <img
          src={src}
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold text-white">{userName}</h1>
          <h1 className='text-white'>Price</h1>
        </div>
        <div className="flex  justify-between text-white">
          <p>#{cardValue}</p>
          <p>₹ {price}</p>
        </div>
      </div>
    </div>
  )
}

export default card
