import React from 'react'
import { Stars } from './Stars';

export const CardsFilm = (props) => {
    const {data} = props;
    
  return (
   <>
        <div className='containerFilm'>
            {data.map((item) =>(
                <div key={item.name} className='boxFilm'> 
                    <div className='imgFilmContent'>
                        <img className='imgFilm' src='https://dummyimage.com/100x150'></img>
                        <span className='imgFilmDecor'>{item.genre}</span>
                    </div>
                    <div className='boxFilmContent'>
                        <h2 className='titleFilm'>{item.name}</h2>
                        <Stars count={item.rating}/>
                        <div className='containerFilmButton'>
                            <button className='btn btnPrice'>{`Купить ${item.price}`}</button>
                            <button className='btn'>Подробнее →</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
   </>
  )
}
