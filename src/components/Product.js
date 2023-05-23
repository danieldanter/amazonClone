import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState();
  const [hasPrime, setHasPrime] = useState();
  const disptch = useDispatch();

  useEffect(() => {
    setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    setHasPrime(Math.random() < 0.5);
  }, []);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime
    };
    // sending the procuct ad an action to the REDUX store... the basket slice
    disptch(addToBasket(product))
  };

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>

      <Image src={image} height={200} width={200} style={{ objectFit:'contain' }}/>

      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>

      <p className='text-xs mt-2 my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <span>£{price.toLocaleString()}</span>
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img
            className='w-12'
            src='https://christian-methfessel.de/files/upload/blog/230131_amazon_prime/amazon_prime_logo.jpg'
            alt=''
          />
          <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>
      )}

      <button  onClick={addItemToBasket}  className='mt-auto button'>Add to Basket</button>
    </div>
  );
}

export default Product;