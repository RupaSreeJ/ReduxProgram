import axios from "axios";
import ACTION_TYPES from './actionTypes';

export const actionCreator = (name) => async (dispatch) => {
    dispatch(fetchStarted());
    await axios
    .get("https://restcountries.eu/rest/v2/region/"+ name)
    .then((res)=> {
    console.log(" successresponse",res.data);
    dispatch(fetchSuccess(res.data));
      })
    .catch((error) => {
    dispatch(fetchFail(error));
    console.log(error);
      });
   };

   const fetchStarted = () => {  
    return{       
    type: ACTION_TYPES.FETCH_STARTED,                  
    payload: {
        //event
        isLoading:true,
    },
};
};

const fetchSuccess = (result) => {   
    return{                            
    type: ACTION_TYPES.FETCH_SUCCESS,
    payload: result,
};  
  };
const fetchFail = (error) => {
    return {
    type: ACTION_TYPES.FETCH_FAIL,
    payload: error,
      };
  }; 



















