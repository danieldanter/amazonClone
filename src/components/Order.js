import React from 'react'
import moment from 'moment';
// <span>£{price.toLocaleString()}</span>

export default function Order( {id, amount, amountShipping, items, timestamp, images}) {
  return (
    <div className='relative  border rounded-md '> 
        <div className='flex item-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
            <div>
                <p className='font-bold text-xs'>ORDER PLACED</p>
                <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>              
            </div>
            <div>
                <p className='text-xs font-bold'>TOTAL</p>
                <p>
                    <span className='font-bold'>£{amount.toLocaleString()}</span> - Next Day Delivery{' '}
                    <span className='font-bold'>£{amountShipping.toLocaleString()}</span>

                </p>    
            </div>

            <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>{items.length} items</p>
            <p className='absolute w-40 top-2 right-2 lg:w-72 truncate text-xs whitespace-nowrap' >Order # {id} </p>
        </div>

        <div lassName='p-5 sm:p-10'>
            <div className='flex space-x-6 overflow-x-auto'>
                {images.map((image, i) => (
                                <img  src={image}  className='h-20 object-contain sm:h32'    />
                                )
                            )
                }
            </div>

        </div>
      
         
    </div>
  )
}

/*   <div className='p-5 sm:p-10'>
               /*</div> <div className='flex space-x-6 overflow-x-auto'>
                    {images.map((image, i) => (
                        <img
                            key={i}
*/
