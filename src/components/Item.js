import React, { useContext, useEffect} from "react";
import './Item.css';
import Loading from "./Loading";
import Menus from "./Menus";
import SearchBar from "./SearchBar";
import { connect } from 'react-redux'
import { fetchImages } from "../action/imagesAction";

function Item( {fetchImagesHandler, loading, images,searchTerm}) {
    useEffect(() => {fetchImagesHandler(searchTerm)}, [searchTerm])
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
        <h2>{searchTerm} Pictures</h2>
        {loading?<Loading></Loading>: <ul class = "images">{images.map((images)=>afterLoading(images))}</ul>}
    </>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return  {fetchImagesHandler:(searchTerm)=>dispatch(fetchImages(searchTerm))};
 }

const mapStateToProps = state => ( 
 {
    
    loading:state.loading,
    images: state.images,
  }
  )
  
  export default connect(mapStateToProps,mapDispatchToProps)(Item)