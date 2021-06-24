import ACTION_TYPES from '../action/actionTypes'
  const initialState = {
  result: [],                                                       
  
};
const countriesReducer = (state = initialState, {payload, type}) => {        
  switch (type) {                                       
   case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
          result: payload,  
        };
    case ACTION_TYPES.FETCH_FAIL:
      return {
        ...state,
        error:{result:false},
      }; 
    default:
      return state;
  }
};

export default countriesReducer;























