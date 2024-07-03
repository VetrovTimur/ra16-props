import { CardsFilm } from './CardsFilm'
import './film.css'
import { TData } from './types'


const dataFilm: TData = [
  {
    name: 'Супермен',
    genre: 'Экшн',
    price: '1₽',
    rating: 7
  },
  {
    name: 'Бетмен',
    genre: 'Экшн',
    price: '100500₽',
    rating: 5
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
    rating: -1
  },
  {
    name: 'Одинокий волк',
    genre: 'Вестерн',
    price: '399₽',
    rating: 2
  },
]

export const Film = () => {
  return (
    <>
      <CardsFilm data={dataFilm}/>
    </>
  )
}
