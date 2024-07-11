import { BsHeart } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { BsBookmark} from 'react-icons/bs';

function StoreItems() {
    const storeItems = [
        {
          id: "0",
          title: "Yellow Ladies Bag",
          description: "A yellow colored pretty bag for Ladies",
          image: "Images/Yellow Ladies Bag.png",
          price: "N15,000",
          rating: "4.5",
        },
        {
          id: "1",
          title: "Men's Leather shoe (Brown)",
          description: "A brown colored shoe made of original leather for men",
          image: "Images/Men's Leather shoe (Brown).png",
          price: "N15,000",
          rating: "3.8",
        },
        {
          id: "2",
          title: "Perfect Fit Foundation",
          description: "Transluscent foundation for all skin complexion",
          image: "Images/Perfect Fit Foundation.png",
          price: "N10,000",
          rating: "5.0",
        },
        {
          id: "3",
          title: "Lively Green Ladies Bag",
          description: "A lively green colored bag for professional ladies",
          image: "Images/Lively Green Ladies Bag.png",
          price: "N25,000",
          rating: "4.9",
        },
        {
          id: "4",
          title: "Elegant Female Pumps",
          description: "A three inched heel shoe for coporate ladies",
          image: "Images/Elegant Female Pumps.png",
          price: "N25,000",
          rating: "4.5",
        },
        {
          id: "5",
          title: "Sisi Leather Bag (White)",
          description: "A white bag made of leather for ladies",
          image: "Images/Sisi Leather Bag (White).png",
          price: "N20,000",
          rating: "4.8",
        },
        {
          id: "6",
          title: "Comfy Padded Sneakers",
          description: "A white comfortable sneakers for ladies",
          image: "Images/Comfy Padded Sneakers.png",
          price: "N23,000",
          rating: "5.0",
        },
        {
          id: "7",
          title: "Stylish Colorful Bag",
          description: "A mul ticolored vintage bag for stylish ladies",
          image: "Images/Stylish Colorful Bag.png",
          price: "N14,000",
          rating: "5.0",
        },
      ];

      const listItems = storeItems.map(storeItem => 
         <div key={storeItem.id} className="storeItem">
         <img className="w-32 m-8"
            src={storeItem.image} alt={storeItem.title} />
            <div className='BsHeart'><BsHeart /></div>
          <div className='itemDesc'>
           <div className='itemTitle'>
            {storeItem.title}
            </div>
            <div className='itemRating'>
            <div className='BsStarFill'><BsStarFill /></div>
            {storeItem.rating}
            </div>
            <div className='itemPriceBox'>
              <span className='itemPrice'>{storeItem.price}</span>
              <div>
                <p className='addCart'>
                <FaCartShopping /> Add to Cart
                </p><div className='BsBkmk'><BsBookmark /></div>
              </div>
            </div>
          </div>
        </div>
       );

    return (
          <ul className="flex">
            {listItems}
          </ul>
    );
  }

  export default StoreItems;