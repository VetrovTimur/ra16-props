import React from 'react'
import { Star } from './Star';

export const Stars = (props) => {
    const {count} = props;
    if (count > 5 || count < 0 || typeof count !== 'number') {
        console.log('Ошибка')
    }
  return (
    <>
        <ul className="card-body-stars u-clearfix">
            {Array.from({length: count}).map((_, i) => (
               <Star key={i} />
            ))}
        </ul>
    </>
  )
}
