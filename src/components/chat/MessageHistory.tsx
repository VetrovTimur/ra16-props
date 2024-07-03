import { Message } from "./Message"
import { Response } from "./Response"
import { Typing } from "./Typing"

export const MessageHistory = ({list}) => {

  return (
    <>
        <ul>
            {
                list.map((item) => {
                    if(item.type === "response") {
                       return <Response key={item.id} name={item.from.name} time={item.time} text={item.text}/>
                    } else if(item.type === "message") {
                        return <Message key={item.id} name={item.from.name} time={item.time} text={item.text} />
                    } else {
                       return <Typing  key={item.id} name={item.from.name} time={item.time} />
                    }
                })
            }
        </ul>
    </>
  )
}