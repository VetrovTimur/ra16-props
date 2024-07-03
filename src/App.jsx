import './App.css'
import { Film } from './components/film/Film'
import { Listing } from './components/listing/Listing'
import { dataEtsy } from './components/listing/data'
import { MessageHistory } from './components/chat/MessageHistory'
import './App.css'


const messages = [{
  id: 'chat-5-1090',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:10',
  text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?'
}, {
  id: 'chat-5-1091',
  from: { name: 'Виктор' },
  type: 'message',
  time: '10:12',
  text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
}, {
  id: 'chat-5-1092',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:14',
  text: 'Не уверена, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
}, {
  id: 'chat-5-1093',
  from: { name: 'Виктор' },
  type: 'message',
  time: '10:20',
  text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.'
}, {
  id: 'chat-5-1094',
  from: { name: 'Виктор' },
  type: 'typing',
  time: '10:31'
}];



function App() {
  const data = dataEtsy.map((item) => ({ 
    listing_id : item?.listing_id,
    url : item?.url,
    MainImage : item.MainImage?.url_570xN,
    title : item?.title,
    currency_code : item?.currency_code,
    price : item?.price,
    quantity : item?.quantity
  }));

  return (
    <>
      <Film />
      <Listing items={data}/>
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory list={messages} />
          </div>
        </div>  
      </div>
    </>
  )
}

export default App
