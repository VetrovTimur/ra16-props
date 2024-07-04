interface TypingProps {
  name: string;
  time: string;
}

export const Typing = (props : TypingProps) => {
  const {name, time} = props;
  return (
    <li>
      <div className="message-data">
          <span className="message-data-name">
              <i className="fa fa-circle online"></i> 
              {name}
          </span>
          <span className="message-data-time">{time}</span>
      </div>
    </li>
  )
}
