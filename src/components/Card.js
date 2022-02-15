import React from 'react'

function Card({data}) {
  return (
    <div className='bg-white w-96 p-1 rounded-md drop-shadow-md'>
      <div className='flex gap-1 justify-center'>
        <img src={data.meta.banners[0].url} alt="b1" width="32%" />
        <img src={data.meta.banners[1].url} alt="b2" width="32%" />
        <img src={data.meta.banners[0].url } alt="b1" width="32%" />
      </div>
      <div className='relative'>
        <div id="logo" className="absolute -top-12">
          <img className='rounded-full drop-shadow-md' src={data.meta.logo.url} alt="logo" />
        </div>
        <div id="about" className='pt-14 px-4'>
          <h2 className='text-xl'>{ data.meta.companyName}</h2>
          <div className='flex gap-x-2'><div className='text-gray-600'>{`${data.addresses[0].city} ${data.addresses[0].country}`}</div>.<div className='text-green'>Min Qty: { data.minOrderQty }</div></div>
          <div id='tag' className='overflow-hidden text-gray-600'>
            <ul className='flex gap-x-1'>
              {data.productGroups.map(pg => {
                return (
                  <li key={pg.uid}>{ `${pg.name},` }</li>
                )
              })}
            </ul>
            
          </div>
          <div id='button'>
            <button className='bg-green-light text-green-dark my-5 px-2 py-1 rounded-full min-w-[8rem]'>View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card