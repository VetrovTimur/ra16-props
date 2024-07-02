import React from 'react'
import { CardsFilm } from './CardsFilm'
import './film.css'


const dataFilm = [
  {
    name: 'Супермен',
    genre: 'Экшн',
    price: '1₽',
    rating: 1
  },
  {
    name: 'Одинокий странник',
    genre: 'Вестерн',
    price: '899₽',
    rating: 0
  },
  {
    name: 'Волк с Уолл-стрит',
    genre: 'Драма',
    price: '799₽',
    rating: 'test'
  },
  {
    name: 'Другой мир',
    genre: 'Боевик',
    price: '1200₽',
    rating: 5
  },
]

export const Film = () => {
  return (
    <>
      <CardsFilm data={dataFilm}/>
    </>
  )
}
