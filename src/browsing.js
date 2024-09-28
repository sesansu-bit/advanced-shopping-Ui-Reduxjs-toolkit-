import {createSlice} from "@reduxjs/toolkit";
const browsingitemSlice=createSlice({
    name:"browsingitem",
    initialState:[  {
        id: '9',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22492640/2023/11/20/1a86b5b5-2fab-4610-aa1e-0b59029f5be31700479590695USPoloAssnEmbroideredLogoPureCottonLoungeT-shirts1.jpg',
        company: 'U.S.Polo',
        item_name: 'Logo Loungs Tshirt',
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
      id: '10',
      image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23981268/2023/10/18/06c7acb6-538d-40b3-b5d2-07bbcfd884d51697611013168VIPSUPREMA8WMinimalBrandLogoPrintedSoft-SidedLargeTrolleySui1.jpg',
      company: 'YAYAVAR',
      item_name: 'Large Check-in Suitcase',
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
      id: '11',
      image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28255504/2024/6/10/49dc070d-6fbf-40f3-ab0a-57b1413951c31718001481187-Crosscut-Beige--Brown-Wooden-Cylinder-Shaped-Floor-Lamp-With-1.jpg',
      company: 'NL Traders',
      item_name: 'office living room Night Lamp',
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
      id: '12',
      image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29913349/2024/8/7/c56b0b18-2374-40c9-a760-80e10017c7501723009114995-ASICS-Men-GT-2000-12-Running-Shoes-1031723009114641-1.jpg',
     company: 'World Footwear',
     item_name: 'Exclusive Range of Stylish',
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
    id: 'A',
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13609220/2024/3/21/7a9e5b08-38ec-431a-8b97-dabb37660cd61711019266586-Maybelline-New-York-Fit-Me-Matte--Poreless-SPF-32-Compact-Po-1.jpg',
    company: 'FACES CANADA',
    item_name: 'Weightless Stay Matte Powder',
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
    id: 'B',
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30160731/2024/7/9/b5b9f310-35fb-4766-94e1-3403a5c35fba1720515563802ADAEthnicMotifsEmbroideredThreadWorkThreadWorkKurti1.jpg',
    company: 'NEW4U',
    item_name: 'Women Solid Viscose Rayon',
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
       id: 'C',
       image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10863018/2019/11/21/49f8c1fa-a4aa-45a8-960f-c5ad8eae3fde1574328384416-Roadster-Men-Navy-Blue--Pink-Regular-Fit-Checked-Casual-Shir-1.jpg',
       company: 'Showoff',
       item_name: 'Mandarin Collar Casual Shirt',
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
        id: 'D',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17566426/2023/10/10/124ac9cb-b246-4ac2-8d1f-fdf14315ab4f1696938405147SkybagsTrick4WSoftCabinTrolleySuitcase1.jpg',
        company: 'woons travel luggage',
        item_name: '65 L Hand Duffel Bag',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: '42%',
        return_period: 14,
        delivery_date: '9 dec 2024',
        rating: {
            stars: 4.3,
            count: '20k',
        },
    },],
    reducers: {
        addInitialItems: (store, action) => {
          return store;
        }
      }
});
 export const browsingitemAction= browsingitemSlice.actions;
 export default  browsingitemSlice;