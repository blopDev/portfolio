
import sliders from "../helper/sliders.json"
import Carousel from 'react-material-ui-carousel'
import Item from "./Item"

 export default function Test() {

    return (
        <Carousel>
            {
                sliders.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

