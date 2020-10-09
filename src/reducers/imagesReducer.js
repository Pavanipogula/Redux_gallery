import * as actions from '../action/imagesAction'
export const initialState = {
    images : [],
    loading : true,
}
export default function imagesReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_IMAGES:
        return {...state,loading:true};
      case actions.GET_IMAGES_SUCCESS:
            return { ...state, images: action.payload, loading: false}
      case actions.GET_IMAGES_FAILURE:
            return { ...state, loading: false}
      default:
        return state;
    }
  }
