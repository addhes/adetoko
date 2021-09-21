import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner() {
    return (
        <div className="relative pt-20 md:pt-24">
            <div className="absolute w-full h-40 bg-gradient-to-t from-white to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="/assets/images/banner.png" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="/assets/images/banner2.png" alt="" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner
