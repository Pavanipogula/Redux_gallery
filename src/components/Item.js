import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
function Item(props) {
    const { images, loading, runSearch } = useContext(PhotoContext)
    runSearch(props.searchTerm)
    function afterLoading(image) {
        let farm = image.farm;     
        let server = image.server;
        let id = image.id;
        let secret = image.secret;
        let title = image.title;
        return <li><img src = {`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}/></li>;
    }
    return (
    <h1>
        {loading?"Its loading": <ul class = "images">{images.map((images)=>afterLoading(images))}</ul>}
    </h1>
    )
}

export default Item;