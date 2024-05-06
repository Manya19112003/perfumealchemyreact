import React from 'react';
import './FragranceComponent.css'; // Import the CSS file

function FragranceComponent() {
    return (
        <div>
            <div className="grid-heading">
                <h1>LET THIS FRAGRANCE SET YOU FREE</h1>
            </div>
            <div className="product-collection">
                <div className="container">
                    <div className="product-collection-wrapper">
                        {/* product col left */}
                        <div className="product-col-left flex">
                            <div className="product-col-content">
                                <h2 className="sm-title">GIFT HAMPERS </h2>
                                <h2 className="md-title">SOME GIFTS SPEAK BEYOND WORDS </h2>
                                <p className="text-light">A gift that captures every feeling unexpressed, every word unsaid, and every emotion unknown, is a treasure that transcends time. It's a symbol of love that speaks volumes without uttering a single word. Show your loved ones how much they mean to you with fragrances as unique as your bond, because some things are best said with gifts. Let the delicate notes of perfume convey the depth of your affection, the warmth of your friendship, and the beauty of your connection. With each spritz, evoke cherished memories and create new moments to treasure forever.</p>
                                <button type="button" className="btn-dark">Shop now</button>
                            </div>
                        </div>

                        {/* product col right */}
                        <div className="product-col-right">
                            <div className="product-col-r-top flex">
                                <div className="product-col-content">
                                    <h2 className="md-title">THE ART OF PERFUMES </h2>
                                    <p className="text-light"> Are you aware that the way you smell is equally important as the way you dress? According to science, the sense of smell is something that evokes strong emotions. That’s how significant perfume is! Therefore, you should be paying more attention to the kind of fragrances you choose to wear for different occasions.</p>
                                    <button type="button" className="btn-dark">Shop now</button>
                                </div>
                            </div>

                            <div className="product-col-r-bottom">
                                {/* right */}
                                <div className="flex">
                                    <div className="product-col-content">
                                        <h2 className="sm-title">Perfumes </h2>
                                        <h2 className="md-title">Best Sellers </h2>
                                        <p className="text-light">Step into a world of luxury and refinement as you explore our best-selling perfumes. Elevate your personal style, express your individuality, and leave an indelible mark with scents that captivate the senses. Uncover the allure of our best sellers today and experience the magic of fragrances. </p>
                                        <button type="button" className="btn-dark">Shop now</button>
                                    </div>
                                </div>
                                {/* left */}
                                <div className="flex">
                                    <div className="product-col-content">
                                        <h2 className="sm-title">summer sale </h2>
                                        <h2 className="md-title">Extra 50% Off </h2>
                                        <p className="text-light">Our brand is celebrated for creating signature fragrances that are distinctive and easily recognizable, allowing wearers to make a unique and memorable statement."Don't Miss Out! Grab Your Favorites with an Extra 50% Off! </p>
                                        <button type="button" className="btn-dark">Shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FragranceComponent;