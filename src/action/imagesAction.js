import { apiKey } from "../api/config";
import axios from "axios";
export const GET_IMAGES = 'GET_IMAGES'
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS'
export const GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE'


export const getImages = () => ({ type: GET_IMAGES })


export const getImagesSuccess = images => ({
  type: GET_IMAGES_SUCCESS,
  payload: images,
})


export const getImagesFailure = () => ({ type: GET_IMAGES_FAILURE })


export function fetchImages(query) {
  return async dispatch => {
    dispatch(getImages())
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        dispatch(getImagesSuccess(response.data.photos.photo))
      })
      .catch(error => {
        dispatch(getImagesFailure())
      });
    }
}











