// import MockAdapter from "axios-mock-adapter/types";
// import  {getCountries} from "../../../src/action/action-get-countries"
         
// const expectedState = {

// };
// describe("actions", ()=>{
//     beforeEach(() =>{
//         MockAdapter.reset();
//         mockedStore.clearActions();
//     });
//     function success(){
//         return{
//             type:"FETCH_SUCCESS",
//             payload:expectedState,
//         };
//     }
//     function getCountries(){
//         return (dispatch) => {
//             return(
//                 fetch("https://restcountries.eu/rest/v2/region/",{
//                     method: "GET",
//                     data: expectedState,
//                 })
//                 .then(() => dispatch(success()))
//             );
//         };
//     }
//     it("should excute getCountries data ", () => {
//         return mockedStore.dispatch(getCountries()).then(()=>{ 
//             const actions = mockedStore.getActions();
//             console.log("actiondata",actions[0]);
//             expect(actions[0]).toEqual(success());
//         });
//     });
// })