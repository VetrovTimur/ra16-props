import { Stars } from './Stars';
import { TData, TRating } from './types';

type TDataFilm = {
    data: TData
}

const validateCount = (count: TRating) => typeof count === 'number' && count >= 0 && count <= 5;

export const CardsFilm = ({ data }: TDataFilm) => {
    
    return (
        <div className='containerFilm'>
            {data.map((item) => {
                const isValid = validateCount(item.rating);

                return (
                    isValid  && <div key={item.name} className='boxFilm'> 
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
                )
            })}
        </div>
    )
}
