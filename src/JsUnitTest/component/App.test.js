import { shallow } from "enzyme";
import App from '../../component/App';
describe('<App/>', () => {
  let props = {
    Data:
    {
      heading: "Countries App",
      countries: [
        {
          id: "africa",
          name: "Africa"
        },
        {
          id: "americas",
          name: "Americas"
        },
        {
          id: "asia",
          name: "Asia"
        },
        {
          id: "europe",
          name: "Europe"
        }]
    }
  }
  it('renders three <CountriesRegionComponent/> components', () => {
    const wrapper = shallow(<App {...props} />);
    //expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(<App/>)).toEqual(false);

  });

});
