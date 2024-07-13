interface Props {
   items: {
    listing_id?: number;
    url?: string;
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: any; 
    [key: string]: any;
   }[];
}

/*interface ItemType {
  listing_id?: number;
  url?: string;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
  MainImage: object;
  //[key: string]: any;
  }
  interface ListingProps {
    items: ItemType[]
  }*/

export  function Listing({items}: Props) {
  if (items.length === 0) return null;
  return (
    <div className="item-list">
      {items.map((item, idx) => {
        
        //смена цвета остака
        let quantityColor: string = ""; 
        item.quantity <= 10
        ? (quantityColor = 'level-low')
        : item.quantity > 20
        ? (quantityColor = 'level-high')
        : (quantityColor = 'level-medium');

        //обрезка количества символов в title
        let newTitle = '';
        const title: string = item.title!;
        title.length > 50 
        ? newTitle = title.substring(0, 50) + "...": newTitle = title;

        return(                      
        <div className="item"key={idx}>
          <div className="item-image"> 
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{newTitle}</p>
            <p className="item-price">{item.currency_code} {item.price}</p>
            <p className={'item-quantity ' + quantityColor}>{item.quantity}</p>
          </div>
        </div> )                                                
      })}
    </div>
  );               
}