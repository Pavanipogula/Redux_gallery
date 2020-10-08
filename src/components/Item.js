import React, { useContext, useEffect} from "react";
import { PhotoContext } from "../context/PhotoContext";
import './Item.css';
import Loading from "./Loading";
import Menus from "./Menus";
import SearchBar from "./SearchBar";
function Item(props) {
    const { images, loading, runSearch } = useContext(PhotoContext)
    console.log(loading)
    useEffect (
        ()=>{
            runSearch(props.searchTerm)
        }, [props]
    )
    function afterLoading(image) {
        let farm = image.farm;     
        let server = image.server;
        let id = image.id;
        let secret = image.secret;
        return <li><img src = {`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}/></li>;
    }
    return (
    <>
        <SearchBar/>
        <Menus/>
        <h2>{props.searchTerm} Pictures</h2>
        {loading?<Loading></Loading>: <ul class = "images">{images.map((images)=>afterLoading(images))}</ul>}
    </>
    )
}

export default Item;