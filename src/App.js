// 
import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import CustomMarquee from './component/CustomMarquee'; // Path to your CustomMarquee component file
import TopCollections from './component/TopCollections';
import './App.css';
import './component/Header.css';
import './component/Home.css';
import './component/style.css'; // Path to your CSS file
import './component/TopCollections.css';
import NewApp from './NewApp';
import FragranceComponent from './FragranceComponent';
import './component/offer.css'; 
import Offers from './component/Offers';
import RetailOffers from './component/RetailOffers'; 
import SurComponent from './SurComponent';
import Review from './Review';
import ContactComponent from './component/ContactComponent';
import FooterComponent from './component/FooterComponent';
// Functional Component
const OtherComponent = () => {
  return <p></p>;
}

// Class Component
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <OtherComponent />
        <CustomMarquee />
        <TopCollections />
        <div style={{ marginBottom: '20px' }}></div> {/* Add space between components */}
        <NewApp />
        <FragranceComponent/>
        <Offers/>
        <RetailOffers/>
        <SurComponent/>
        <Review/>
        <ContactComponent/>
        <FooterComponent/>

      </div>
    );
  }
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import SearchComponent from './component/SearchComponent';
// import ShowCourseComponent from './component/ShowCourseComponent';
// import UserCartComponent from './component/UserCartComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col } from 'react-bootstrap';


// function App() {
//     const [courses, setCourses] = useState([
//         { id: 1, 
//           name: 'CHANCE EAU PERFUME', 
//           price: 2000, 
//           image: 'https://hips.hearstapps.com/hmg-prod/images/2022-perfumes-index-1657224599.jpg?crop=0.401xw:0.801xh;0.0337xw,0.103xh&resize=640:*'
//         },
//         { id: 2, 
//           name: 'SKAI AQUATIC', 
//           price: 700, 
//           image: 'https://bellavitaluxury.co.in/cdn/shop/files/Skai_2e0d54be-3ab0-458b-a2af-47d666c93e0e.jpg?v=1696229919&width=533'
//         },
//         { id: 3, 
//           name: 'JOYFUL CANDLES', 
//           price: 500, 
//           image: 'https://m.media-amazon.com/images/I/81IMesNCKKL.jpg'
//         },
//         // Add more course objects here as needed
//         { id: 4, 
//           name: 'TITAN SHEER FRAGRANCE', 
//           price: 3000, 
//           image: 'https://images.bewakoof.com/image/content/2023/05/16104340/image-115.png'
//         },
//         { id: 5, 
//           name: 'SENORITA SHOWER GEL', 
//           price: 800, 
//           image: 'https://bellavitaorganic.com/cdn/shop/files/CEOMan_Senorita-01.jpg?v=1706524099&width=500'
//         },
//         { id: 6, 
//           name: 'LOVE SPELL SWEET MIST', 
//           price: 300, 
//           image: 'https://www.perfume24x7.com/cdn/shop/products/Victorias_Secret_Love_Spell_Mist_1800x1800_6c8d7453-885b-4378-959f-1e2b52dfcd42.jpg?v=1647345860&width=1080'
//         },
//         { id: 7, 
//           name: 'ILLUSION BODY LOTION', 
//           price: 800, 
//           image: 'https://beautyzaa.com/cdn/shop/products/31G53ieF4kS._SX300_SY300_QL70_FMwebp_580x.webp?v=1663222922'
//         },
//         { id: 8, 
//           name: 'WOMEN GIFT COMBO', 
//           price: 4000, 
//           image: 'https://bellavitaluxury.co.in/cdn/shop/files/Date-tRavel-Kit-9.jpg?v=1698342814&width=360'
//         },
//         { id: 9, 
//           name: 'BLEU DE CHANEL', 
//           price: 500, 
//           image: 'https://perfumegallery.in/cdn/shop/products/188262778_789873958634708_5425172426693275458_n_1500x.jpg?v=1696574209'
//         },
//         { id: 10, 
//           name: 'AMMUNITION PERFUME', 
//           price: 1500, 
//           image: 'https://ustraa.cdn.imgeng.in/media/catalog/product/1/-/1-ammunition-perfume-for-men-cologne-ustraa.jpg'
//         },
//         { id: 11, 
//           name: 'DELIXIRS AMBER', 
//           price: 1100, 
//           image: 'https://delixirs.in/cdn/shop/products/ambercg.jpg?v=1682053561'
//         },
//         { id: 12, 
//           name: 'SIGNATURE COCKTAIL', 
//           price: 600, 
//           image: 'https://m.media-amazon.com/images/I/51XNsEg9zmL.jpg'
//         },
//     ]);

//     const [cartCourses, setCartCourses] = useState([]);
//     const [searchCourse, setSearchCourse] = useState('');

//     const addCourseToCartFunction = (GFGcourse) => {
//         const alreadyCourses = cartCourses.find(item => item.product.id === GFGcourse.id);
//         if (alreadyCourses) {
//             const latestCartUpdate = cartCourses.map(item =>
//                 item.product.id === GFGcourse.id ? { ...item, quantity: item.quantity + 1 } : item
//             );
//             setCartCourses(latestCartUpdate);
//         } else {
//             setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
//         }
//     };

//     const deleteCourseFromCartFunction = (GFGCourse) => {
//         const updatedCart = cartCourses.filter(item => item.product.id !== GFGCourse.id);
//         setCartCourses(updatedCart);
//     };

//     const totalAmountCalculationFunction = () => {
//         return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
//     };

//     const courseSearchUserFunction = (event) => {
//         setSearchCourse(event.target.value);
//     };

//     const filterCourseFunction = courses.filter((course) =>
//         course.name.toLowerCase().includes(searchCourse.toLowerCase())
//     );

//     return (
//         <div className="App">
//             <SearchComponent
//                 searchCourse={searchCourse}
//                 courseSearchUserFunction={courseSearchUserFunction}
//             />
//             <main className="App-main">
//                 <Row>
//                     <Col>
//                         <ShowCourseComponent
//                             filterCourseFunction={filterCourseFunction}
//                             addCourseToCartFunction={addCourseToCartFunction}
//                         />
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <UserCartComponent
//                             cartCourses={cartCourses}
//                             deleteCourseFromCartFunction={deleteCourseFromCartFunction}
//                             totalAmountCalculationFunction={totalAmountCalculationFunction}
//                             setCartCourses={setCartCourses}
//                         />
//                     </Col>
//                 </Row>
//             </main>
//         </div>
//     );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';
// import SearchComponent from './component/SearchComponent';
// import ShowCourseComponent from './component/ShowCourseComponent';
// import UserCartComponent from './component/UserCartComponent';
// import Header from './component/Header';
// import Home from './component/Home';
// import CustomMarquee from './component/CustomMarquee'; 
// import TopCollections from './component/TopCollections';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col } from 'react-bootstrap';

// function App() {
//     const [courses, setCourses] = useState([
//         { id: 1, 
//           name: 'CHANCE EAU PERFUME', 
//           price: 2000, 
//           image: 'https://hips.hearstapps.com/hmg-prod/images/2022-perfumes-index-1657224599.jpg?crop=0.401xw:0.801xh;0.0337xw,0.103xh&resize=640:*'
//         },
//         // Other course objects...
//     ]);

//     const [cartCourses, setCartCourses] = useState([]);
//     const [searchCourse, setSearchCourse] = useState('');

//     const addCourseToCartFunction = (GFGcourse) => {
//         // Add function logic here...
//     };

//     const deleteCourseFromCartFunction = (GFGCourse) => {
//         // Add function logic here...
//     };

//     const totalAmountCalculationFunction = () => {
//         // Add function logic here...
//     };

//     const courseSearchUserFunction = (event) => {
//         // Add function logic here...
//     };

//     const filterCourseFunction = courses.filter((course) =>
//         course.name.toLowerCase().includes(searchCourse.toLowerCase())
//     );

//     return (
//         <div className="App">
//             <Header />
//             <Home />
//             <CustomMarquee />
//             <TopCollections />
//             <SearchComponent
//                 searchCourse={searchCourse}
//                 courseSearchUserFunction={courseSearchUserFunction}
//             />
//             <main className="App-main">
//                 <Row>
//                     <Col>
//                         <ShowCourseComponent
//                             filterCourseFunction={filterCourseFunction}
//                             addCourseToCartFunction={addCourseToCartFunction}
//                         />
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <UserCartComponent
//                             cartCourses={cartCourses}
//                             deleteCourseFromCartFunction={deleteCourseFromCartFunction}
//                             totalAmountCalculationFunction={totalAmountCalculationFunction}
//                             setCartCourses={setCartCourses}
//                         />
//                     </Col>
//                 </Row>
//             </main>
//         </div>
//     );
// }

// export default App;

