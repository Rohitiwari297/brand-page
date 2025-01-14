const HeroSection = () => {

    return (
        <main className="hero container">
            <div className="hero-containt">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className="sec-button">Category</button>
                </div>
                <div className="hero-shopping">
                    <p>Also Available On</p>
                </div>

                <div className="hero-shopping-icons">
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                    <img src="/images/amazon.png" alt="amazon-logo" />
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="Brand-image" />
            </div>
        </main>
    )
        
    
}

//
export default HeroSection;