// //import react from "react";
import ACTION_TYPES from  '../../action/actionTypes';
 import countriesReducer from '../../reducer/countriesReducer';
// const initialState = {
//     result: [],                                                       
//     error: false,
//   };
//   describe("event Reducer", ()=>{
//       it("returns the intial state",() =>{
//           expect(countriesReducer(undefined, {})).toEqual(initialState);
//       });
//       it("handles successful", () => {
//           expect(countriesReducer(initialState,{
//               type:ACTION_TYPES.FETCH_SUCCESS,
//               payload: "India",
//           })).toEqual({
//               ...initialState,
//               result: "India",

//           });
//       });
//       it("handles failure", () => {
//         expect(countriesReducer(initialState,{
//             type:ACTION_TYPES.FETCH_FAIL,
//             //payload: "1",
//             error:{result:false},
//         })).toEqual({
//             ...initialState,
//             //error: "",
//             error:{result:false},

//         });
//     });
//   });
const initialState = {
    result: [],
    error: false
}
describe('testing reducer', () => {
    // it('returns the initial state', () => {
    //     expect(countriesReducer(undefined, {})).toEqual(initialState);
    // });
    it('handles success', () => {
        expect(countriesReducer(initialState, {
            type: ACTION_TYPES.FETCH_SUCCESS,
            payload: 'India',
        })).toEqual({
            ...initialState,
            result: 'India'
        })
    })
    it('handles error', () => {
        expect(countriesReducer(initialState, {
            type: ACTION_TYPES.FETCH_FAIL,
           error: {result:false}
        })).toEqual({
            ...initialState,
            error : {result:false}
        })
    })
})