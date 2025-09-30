import CarouselSlides from "./Slides";
import PageAsideAside from "./Aside";

export default function Hero() {
    return(
        <div className="flex justify-between gap-8">
            <PageAsideAside />
            <CarouselSlides />
        </div>
    )
}