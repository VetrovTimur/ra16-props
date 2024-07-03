import './main.css'

export const Listing = ({items}) => {
  
  function level(item) {
    // return item = item > 20? 'level-high' : item = 20? 'level-medium' : item <= 10? 'level-low' : 'level-low';
    return item = item > 20? 'level-high' : item <= 10? 'level-low' :  item <= 20? 'level-medium' : '';
  }

  function sizeTitle(item) {
    if (item?.length > 50) {
      return item = item.slice(0, 50) + '...';
    }
    return item
  }

  function currencyCode(currency, price) {
    if(currency === 'USD' || currency === 'EUR') { 
      return `${currency} ${price}`
    }
    return `${price} ${currency}`
  }

  return (
    <>
    <div className='item-list'>
        {
          items.map((item) => (
              <div className="item" key={item.listing_id}>
                <div className="item-image">
                  <a href={item.url}>
                    <img src={item.MainImage} />
                  </a>
                </div>
                <div className="item-details">
                  <p className="item-title">{sizeTitle(item.title)}</p>
                  <p className="item-price">{currencyCode(item.currency_code, item.price)}</p>
                  <p className={`item-quantity ${level(item.quantity)}`}>{item.quantity}</p>
                </div>
              </div>
          ))
        }
      </div>
    </>
  )
}
