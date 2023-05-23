import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket} from '../slices/basketSlice'

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime}) {

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime
        }
        // sending the procuct ad an action to the REDUX store... the basket slice
        dispatch(addToBasket(product))
    }

    const removeItemToBasket = () => {
        // remove the item from redux
        dispatch(removeFromBasket({ id }))
    }

  return (
    <div className='grid grid-cols-5'>
        <Image 
            src={image}
            height={200}
            width={200}
            style={{ objectFit:'contain' }}
            alt=''
        />
        {/* Middle */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
                </div>
                <p className='text-xs mt-2 mb-2 line-clamp-3'>{description}</p>  
                <span>£{price.toLocaleString()}</span> 

                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img
                            loading='lazy'
                            className='w-12'
                            src='https://christian-methfessel.de/files/upload/blog/230131_amazon_prime/amazon_prime_logo.jpg'
                            alt=''
                        />
                        <p className='text-xs text-gray-50'>FREE Next-day Delivery</p>
                    </div>    
                )}
            </div>   
            {/* Right add/remove Button*/}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button mt-auto'>Add to Basket</button>
                <button onClick={removeItemToBasket} className='button mt-auto'>Remove from Basket</button>

            </div>
            
    </div>
  )
}

export default CheckoutProduct