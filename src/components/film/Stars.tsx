import { Star } from './Star';



export const Stars = (props : { count: number }) => {
  console.log(props);
  const { count } = props;


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
