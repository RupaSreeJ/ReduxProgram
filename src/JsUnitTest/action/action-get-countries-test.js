import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../action/action-get-countries';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();


describe('getCountries actions', () => {
    it('dispatches getCountries after a successfull API requets', () => {
        mock.onGet("https://restcountries.eu/rest/v2/region/Africa").reply(200, { data: [{ name: "Algeria" }, { name: "Angola" }] })
        store.dispatch(actions.getCountries("Africa")).then(() => {
            let expectedActions = [
                {
                    type: 'ACTION_TYPES.FETCH_SUCCESS',
                    payload: data
                }
            ]
            expect(store.getCountries()).toEqual(expectedActions)
        });
    });

    it('dispatches FETCH_FAIL after a FAILED API requets', () => {
        mock.onGet("https://restcountries.eu/rest/v2/region/").reply(400, { error: { message: 'error message' } });
        store.dispatch(actions.getCountries()).then(() => {
            let expectedActions = [

                {
                    type: 'ACTION_TYPES.FETCH_FAIL',
                    payload: { error: { message: 'error message' } }
                }
            ]
            expect(store.getCountries()).toEqual(expectedActions)
        });
    });
});

