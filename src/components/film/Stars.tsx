import { Fragment } from 'react/jsx-runtime';
import { Star } from './Star';

export const Stars = (props: { count: number }) => {
  const { count } = props;

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }).map((_, i) => (
          <Fragment key={i}>
            <Star />
          </Fragment>
      ))}
    </ul>
  );
};
