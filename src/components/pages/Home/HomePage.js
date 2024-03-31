import Hero from './Hero'
import WeekSpecials from "./WeekSpecials"
import Testimonials from "./Testimonial";
import OurStory from './OurStory';
export default function HomePage(){
    return(
        <>
            <Hero/>
            <WeekSpecials/>
            <Testimonials/>
            {/* <OurStory/> */}
        </>
    )
}