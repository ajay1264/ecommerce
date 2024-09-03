import imag1 from "./images/img(1).jpg";
import imag2 from "./images/img(2).jpg";
import imag3 from "./images/img(3).jpg";
import imag4 from "./images/img(4).jpg";
import imag5 from "./images/img(5).jpg";
import imag6 from "./images/img(6).jpg";
import imag7 from "./images/img(7).jpg";
import imag8 from "./images/img(8).jpg";
import imag9 from "./images/img(9).jpg";
import womens1 from "./images/women1.jpg";
import womens2 from "./images/women2.jpg";
import womens3 from "./images/women3.jpg";
import womens4 from "./images/women4.jpg";
import womens5 from "./images/women5.jpg";
import womens6 from "./images/women6.jpg";
import womens7 from "./images/women7.jpg";
import womens8 from "./images/women8.jpg";
import womens9 from "./images/women9.jpg";
import kids1 from "./images/kids1.jpg";
import kids2 from "./images/kids2.jpg";
import kids3 from "./images/kids3.jpg";
import kids4 from "./images/kids4.jpg";
import kids5 from "./images/kids5.jpg";
import kids6 from "./images/kids6.jpg";
import kids7 from "./images/kids7.jpg";
import kids8 from "./images/kids8.jpg";
import kids9 from "./images/kids9.jpg";

const all_products = [
  // Men's Category
  {
    id: 1,
    name: "Men's T-Shirt",
    category: "men",
    image: imag1,
    new_price: 15.99,
    old_price: 19.99,
  },
  {
    id: 2,
    name: "Men's Jacket",
    category: "men",
    image: imag2,
    new_price: 49.99,
    old_price: 69.99,
  },
  {
    id: 3,
    name: "Men's Sneakers",
    category: "men",
    image: imag3,
    new_price: 59.99,
    old_price: 89.99,
  },
  {
    id: 4,
    name: "Men's Jeans",
    category: "men",
    image: imag4,
    new_price: 39.99,
    old_price: 49.99,
  },
  {
    id: 5,
    name: "Men's Watch",
    category: "men",
    image: imag5,
    new_price: 120.00,
    old_price: 150.00,
  },
  {
    id: 6,
    name: "Men's Sunglasses",
    category: "men",
    image: imag6,
    new_price: 29.99,
    old_price: 39.99,
  },
  {
    id: 7,
    name: "Men's Belt",
    category: "men",
    image: imag7,
    new_price: 14.99,
    old_price: 19.99,
  },
  {
    id: 8,
    name: "Men's Hat",
    category: "men",
    image: imag8,
    new_price: 19.99,
    old_price: 24.99,
  },
  {
    id: 9,
    name: "Men's Wallet",
    category: "men",
    image: imag9,
    new_price: 25.99,
    old_price: 34.99,
  },

  // Women's Category
  {
    id: 10,
    name: "Women's Dress",
    category: "women",
    image: womens1,
    new_price: 39.99,
    old_price: 49.99,
  },
  {
    id: 11,
    name: "Women's Handbag",
    category: "women",
    image: womens2,
    new_price: 59.99,
    old_price: 79.99,
  },
  {
    id: 12,
    name: "Women's Heels",
    category: "women",
    image: womens3,
    new_price: 49.99,
    old_price: 69.99,
  },
  {
    id: 13,
    name: "Women's Scarf",
    category: "women",
    image: womens4,
    new_price: 14.99,
    old_price: 19.99,
  },
  {
    id: 14,
    name: "Women's Necklace",
    category: "women",
    image: womens5,
    new_price: 29.99,
    old_price: 39.99,
  },
  {
    id: 15,
    name: "Women's Blouse",
    category: "women",
    image: womens6,
    new_price: 24.99,
    old_price: 34.99,
  },
  {
    id: 16,
    name: "Women's Jeans",
    category: "women",
    image: womens7,
    new_price: 34.99,
    old_price: 44.99,
  },
  {
    id: 17,
    name: "Women's Sunglasses",
    category: "women",
    image: womens8,
    new_price: 29.99,
    old_price: 39.99,
  },
  {
    id: 18,
    name: "Women's Watch",
    category: "women",
    image: womens9,
    new_price: 120.00,
    old_price: 150.00,
  },

  // Kids' Category
  {
    id: 19,
    name: "Children's T-Shirt",
    category: "kids",
    image: kids1,
    new_price: 12.99,
    old_price: 17.99,
  },
  {
    id: 20,
    name: "Children's Sneakers",
    category: "kids",
    image: kids2,
    new_price: 24.99,
    old_price: 34.99,
  },
  {
    id: 21,
    name: "Children's Jacket",
    category: "kids",
    image: kids3,
    new_price: 29.99,
    old_price: 39.99,
  },
  {
    id: 22,
    name: "Children's Hat",
    category: "kids",
    image: kids4,
    new_price: 9.99,
    old_price: 14.99,
  },
  {
    id: 23,
    name: "Children's Jeans",
    category: "kids",
    image: kids5,
    new_price: 19.99,
    old_price: 29.99,
  },
  {
    id: 24,
    name: "Children's Watch",
    category: "kids",
    image: kids6,
    new_price: 29.99,
    old_price: 39.99,
  },
  {
    id: 25,
    name: "Children's Sunglasses",
    category: "kids",
    image: kids7,
    new_price: 14.99,
    old_price: 19.99,
  },
  {
    id: 26,
    name: "Children's Toy Car",
    category: "kids",
    image: kids8,
    new_price: 19.99,
    old_price: 24.99,
  },
  {
    id: 27,
    name: "Children's Backpack",
    category: "kids",
    image: kids9,
    new_price: 24.99,
    old_price: 34.99,
  },

  // Additional Products
  {
    id: 28,
    name: "Men's Shorts",
    category: "men",
    image: imag1,
    new_price: 29.99,
    old_price: 39.99,
  },
  {
    id: 29,
    name: "Men's Hoodie",
    category: "men",
    image: imag2,
    new_price: 39.99,
    old_price: 49.99,
  },
  {
    id: 30,
    name: "Men's Boots",
    category: "men",
    image: imag3,
    new_price: 79.99,
    old_price: 99.99,
  },
  {
    id: 31,
    name: "Women's Skirt",
    category: "women",
    image: womens1,
    new_price: 79.99,
    old_price: 99.99,
  },
  {
    id: 32,
    name: "Women's Flats",
    category: "women",
    image: womens2,
    new_price: 24.99,
    old_price: 34.99,
  },
  {
    id: 33,
    name: "Women's Jacket",
    category: "women",
    image: womens3,
    new_price: 59.99,
    old_price: 79.99,
  },
  {
    id: 34,
    name: "Women's Purse",
    category: "women",
    image: womens4,
    new_price: 39.99,
    old_price: 49.99,
  },
  {
    id: 35,
    name: "Children's Hoodie",
    category: "kids",
    image: kids1,
    new_price: 39.99,
    old_price: 49.99,
  },
];

export default all_products;


















// import imag1 from "./images/img(1).jpg"
// import imag2 from "./images/img(2).jpg"
// import imag3 from "./images/img(3).jpg"
// import imag4 from "./images/img(4).jpg"
// import imag5 from "./images/img(5).jpg"
// import imag6 from "./images/img(6).jpg"
// import imag7 from "./images/img(7).jpg"
// import imag8 from "./images/img(8).jpg"
// import imag9 from "./images/img(9).jpg"
// import p1_img from "./images/1img.jpg"
// import p2_img from "./images/2img.jpg"
// import p3_img from "./images/3img.jpg"
// import p4_img from "./images/4img.jpg"
// import womens1 from "./images/women1.jpg"
// import womens2 from "./images/women2.jpg"
// import womens3 from "./images/women3.jpg"
// import womens4 from "./images/women4.jpg"
// import womens5 from "./images/women5.jpg"
// import womens6 from "./images/women6.jpg"
// import womens7 from "./images/women7.jpg"
// import womens8 from "./images/women8.jpg"
// import womens9 from "./images/women9.jpg"
// import kids1 from "./images/kids1.jpg"
// import kids2 from "./images/kids2.jpg"
// import kids3 from "./images/kids3.jpg"
// import kids4 from "./images/kids4.jpg"
// import kids5 from "./images/kids5.jpg"
// import kids6 from "./images/kids6.jpg"
// import kids7 from "./images/kids7.jpg"
// import kids8 from "./images/kids8.jpg"
// import kids9 from "./images/kids9.jpg"

// let all_products = [
//     {
//         "id": 1,
//         "name": "Men's T-Shirt",
//         "category": "men",
//         "image": imag1,
//         "new_price": 15.99,
//         "old_price": 19.99
//     },
//     {
//         "id": 2,
//         "name": "Men's Jacket",
//         "category": "men",
//         "image": imag2,
//         "new_price": 49.99,
//         "old_price": 69.99
//     },
//     {
//         "id": 3,
//         "name": "Men's Sneakers",
//         "category": "men",
//         "image": imag3,
//         "new_price": 59.99,
//         "old_price": 89.99
//     },
//     {
//         "id": 4,
//         "name": "Men's Jeans",
//         "category": "men",
//         "image": imag4,
//         "new_price": 39.99,
//         "old_price": 49.99
//     },
//     {
//         "id": 5,
//         "name": "Men's Watch",
//         "category": "men",
//         "image": imag5,
//         "new_price": 120.00,
//         "old_price": 150.00
//     },
//     {
//         "id": 6,
//         "name": "Men's Sunglasses",
//         "category": "men",
//         "image": imag6,
//         "new_price": 29.99,
//         "old_price": 39.99
//     },
//     {
//         "id": 7,
//         "name": "Men's Belt",
//         "category": "men",
//         "image": imag7,
//         "new_price": 14.99,
//         "old_price": 19.99
//     },
//     {
//         "id": 8,
//         "name": "Men's Hat",
//         "category": "men",
//         "image": imag8,
//         "new_price": 19.99,
//         "old_price": 24.99
//     },
//     {
//         "id": 9,
//         "name": "Men's Wallet",
//         "category": "men",
//         "image": imag9,
//         "new_price": 25.99,
//         "old_price": 34.99
//     },
//     {
//         "id": 10,
//         "name": "Women's Dress",
//         "category": "women",
//         "image": womens1,
//         "new_price": 39.99,
//         "old_price": 49.99
//     },
//     {
//         "id": 11,
//         "name": "Women's Handbag",
//         "category": "women",
//         "image": womens2,
//         "new_price": 59.99,
//         "old_price": 79.99
//     },
//     {
//         "id": 12,
//         "name": "Women's Heels",
//         "category": "women",
//         "image": womens3,
//         "new_price": 49.99,
//         "old_price": 69.99
//     },
//     {
//         "id": 13,
//         "name": "Women's Scarf",
//         "category": "women",
//         "image": womens4,
//         "new_price": 14.99,
//         "old_price": 19.99
//     },
//     {
//         "id": 14,
//         "name": "Women's Necklace",
//         "category": "women",
//         "image": womens5,
//         "new_price": 29.99,
//         "old_price": 39.99
//     },
//     {
//         "id": 15,
//         "name": "Women's Blouse",
//         "category": "women",
//         "image": womens6,
//         "new_price": 24.99,
//         "old_price": 34.99
//     },
//     {
//         "id": 16,
//         "name": "Women's Jeans",
//         "category": "women",
//         "image": womens7,
//         "new_price": 34.99,
//         "old_price": 44.99
//     },
//     {
//         "id": 17,
//         "name": "Women's Sunglasses",
//         "category": "women",
//         "image": womens8,
//         "new_price": 29.99,
//         "old_price": 39.99
//     },
//     {
//         "id": 18,
//         "name": "Women's Watch",
//         "category": "women",
//         "image": womens9,
//         "new_price": 120.00,
//         "old_price": 150.00
//     },
//     {
//         "id": 19,
//         "name": "Children's T-Shirt",
//         "category": "kids",
//         "image": kids1,
//         "new_price": 12.99,
//         "old_price": 17.99
//     },
//     {
//         "id": 20,
//         "name": "Children's Sneakers",
//         "category": "kids",
//         "image": kids2,
//         "new_price": 24.99,
//         "old_price": 34.99
//     },
//     {
//         "id": 21,
//         "name": "Children's Jacket",
//         "category": "kids",
//         "image": kids3,
//         "new_price": 29.99,
//         "old_price": 39.99
//     },
//     {
//         "id": 22,
//         "name": "Children's Hat",
//         "category": "kids",
//         "image": kids4,
//         "new_price": 9.99,
//         "old_price": 14.99
//     },
//     {
//         "id": 23,
//         "name": "Children's Jeans",
//         "category": "kids",
//         "image": kids5,
//         "new_price": 19.99,
//         "old_price": 29.99
//     },
//     {
//         "id": 24,
//         "name": "Children's Watch",
//         "category": "kids",
//         "image": kids6,
//         "new_price": 29.99,
//         "old_price": 39.99
//     },
//     {
//         "id": 25,
//         "name": "Children's Sunglasses",
//         "category": "kids",
//         "image": kids7,
//         "new_price": 14.99,
//         "old_price": 19.99
//     },
//     {
//         "id": 26,
//         "name": "Children's Toy Car",
//         "category": "kids",
//         "image": kids8,
//         "new_price": 19.99,
//         "old_price": 24.99
//     },
//     {
//         "id": 27,
//         "name": "Children's Backpack",
//         "category": "kids",
//         "image": kids9,
//         "new_price": 24.99,
//         "old_price": 34.99
//     },
//     {
//         "id": 28,
//         "name": "Men's Shorts",
//         "category": "men",
//         "image": imag1,
//         "new_price": 29.99,
//         "old_price": 39.99
//     },
//     {
//         "id": 29,
//         "name": "Men's Hoodie",
//         "category": "men",
//         "image": imag2,
//         "new_price": 39.99,
//         "old_price": 49.99
//     },
//     {
//         "id": 30,
//         "name": "Men's Boots",
//         "category": "men",
//         "image": imag3,
//         "new_price": 79.99,
//         "old_price": 99.99
//     },
//     {
//         "id": 31,
//         "name": "Women's Skirt",
//         "category": "women",
//         "image": p1_img,
//         "new_price": 79.99,
//         "old_price": 39.99
//     },
//     {
//         "id": 32,
//         "name": "Women's Flats",
//         "category": "women",
//         "image": p2_img,
//         "new_price": 24.99,
//         "old_price": 34.99
//     },
//     {
//         "id": 33,
//         "name": "Women's Jacket",
//         "category": "women",
//         "image": p3_img,
//         "new_price": 59.99,
//         "old_price": 79.99
//     },
//     {
//         "id": 34,
//         "name": "Women's Purse",
//         "category": "women",
//         "image": p4_img,
//         "new_price": 39.99,
//         "old_price": 49.99
//     },
//     {
//         "id": 35,
//         "name": "Children's Hoodie",
//         "category": "women",
//         "image": p1_img,
//         "new_price": 39.99,
//         "old_price": 49.99
//     }
// ]

// export default all_products;