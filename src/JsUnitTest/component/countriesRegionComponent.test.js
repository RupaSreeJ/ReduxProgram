import { shallow } from "enzyme";
//import Adapter from 'enzyme-adapter-react-16';
import CountriesRegionComponent from '../../component/countriesRegionComponent';
//Enzyme.configure({adapter: new Adapter()});

describe('<CountriesRegionComponent/>', () => {
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
    const wrapper = shallow(<CountriesRegionComponent {...props} />);
    //expect(wrapper).toBeDefined();

  });
 

  // it('renders an `.create-new`', () => {
  //     const wrapper = shallow(<CountriesRegionComponent {...props}/>);
  //     expect(wrapper.find('.create-new')).to.have.lengthOf(1);

  // });
  it('should call setCountries method', () =>
  {
      const value = {
          target:{
              value:"Create item"
          }
      }
      const wrapper = shallow(<CountriesRegionComponent {...props}/>);
      wrapper.setState({
        result:"red"
        
    })
      wrapper.instance().setCountries(value);
  });
});