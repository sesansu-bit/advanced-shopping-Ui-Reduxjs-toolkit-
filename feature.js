import {createSlice} from "@reduxjs/toolkit";
const featureitemSlice=createSlice({
    name:"featureitem",
    initialState:[ {
        id: '1',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26428072/2023/12/14/9d06fce8-2e39-40b9-a2cd-70b0e37940651702574026910HERENOWMenRedCasualShirt6.jpg',
        company: 'Powerlook',
        item_name: 'India Slim Oversized Shirt"',
        original_price: 1045,
        current_price: 606,
        discount_percentage: '42%',
        return_period: 14,
        delivery_date: '10 Oct 2024',
        rating: {
            stars: 4.5,
            count: '27k',
        },
    },
    {
      id: '2',
      image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18288880/2022/8/1/76e5c52e-13f1-477e-931e-a63a12220a941659330678279-Roadster-Men-Shirts-7521659330677789-1.jpg',
      company: 'Roadster',
      item_name: 'Skinny Fit shirts',
      original_price: 2599,
      current_price: 1507,
      discount_percentage: '41%',
      return_period: 14,
      delivery_date: '11 Oct 2024',
      rating: {
          stars: 4.1,
          count: '29k',
      },
  },
  {
      id: '3',
      image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14229032/2023/2/23/ee7a6ef5-a889-4e27-9e4e-a43668b2fb091677145101014SonataMenBlackAnalogueWatch1.jpg',
      company: 'Danial Klein',
      item_name: 'Men Leather Analougue Watch',
      original_price: 1599,
      current_price: 495,
      discount_percentage: '60%',
      return_period: 14,
      delivery_date: '12 Nov 2024',
      rating: {
          stars: 4.6,
          count: '24k',
      },
  },
  {
      id: '4',
      image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17291738/2024/6/8/bb7cb8cf-8ce7-4153-9e7f-acb4e1f75c1f1717819982573-Voyage-Unisex-Black-UV-Protected-Square-Sunglasses-2057MG357-1.jpg',
      company: 'Voyage',
      item_name: 'UV Protected Lens Sunglasses',
      original_price: 999,
      current_price: 999,
      discount_percentage: '80%',
      return_period: 14,
      delivery_date: '19 nov 2024',
      rating: {
          stars: 4.8,
          count: '50K',
      },
  },
  {
    id: '5',
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/25142610/2023/9/25/4b103dc2-7170-4af3-8aba-7888fa9634881695618843435RedTapeMenBlackLeatherBelt1.jpg',
    company: 'TeakWood Leathers',
    item_name: 'Men Belts',
    original_price: 1399,
    current_price: 489,
    discount_percentage: '65%',
    return_period: 14,
    delivery_date: '15 dec 2024',
    rating: {
        stars: 3.8,
        count: '35k',
    },
},
{
    id: '6',
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21652430/2023/2/9/1807c15a-63e3-4771-81cb-0c62e860febf1675943496883-Jack--Jones-Men-Colourblocked-Mesh-Sneakers-2121675943496097-1.jpg',
    company: 'Nike',
    item_name: 'Men ReactX Running Shoes',
    original_price: 14995,
    current_price: 14995,
    discount_percentage: '70%',
    return_period: 14,
    delivery_date: '18 Dec 2024',
    rating: {
        stars: 5.0,
        count: '40k',
    },
  },
  {
    id: '7',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23098826/2023/6/1/cc45ed4e-c14a-495a-bc37-05282344e7841685601948322-FCUK-Men-Tshirts-691685601947848-1.jpg',
        company: 'Louis Philippe',
        item_name: 'Pure Cotton Printed T-shirt',
        original_price: 1045,
        current_price: 606,
        discount_percentage: '42%',
        return_period: 15,
        delivery_date: '21 Dec 2024',
        rating: {
            stars: 4.5,
            count: '57k',
        },
    },
    {
        id: '8',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19779824/2022/9/5/ca620796-92b0-4073-909a-c2b175e2ded51662383771313ProvogueMenBlackSolidLeatherFormalShoes1.jpg',
        company: 'Louis Stich',
        item_name: 'Men Leather Formal Shoes',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: '42%',
        return_period: 14,
        delivery_date: '9 dec 2024',
        rating: {
            stars: 4.3,
            count: '20k',
        },
    }],
    reducers: {
        addInitialItems: (store, action) => {
          return store;
        }
      }
});
 export const featureitemAction= featureitemSlice.actions;
 export default  featureitemSlice;