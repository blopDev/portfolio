
import sliders from "../helper/sliders.json"
import Carousel from 'react-material-ui-carousel'
import Projects from "./Projects"

 export default function Test() {

    return (
        <Carousel>
            {
                sliders.map( (project, i) => <Projects key={i} project={project} /> )
            }
        </Carousel>
    )
}

