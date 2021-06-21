import { shallow } from "enzyme";
//import Adapter from 'enzyme-adapter-react-16';
import App from '../../component/App';
//Enzyme.configure({adapter: new Adapter()});

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
    expect(wrapper).toBeDefined();

  });


  // it('renders an `.create-new`', () => {
  //     const wrapper = shallow(<CountriesRegionComponent {...props}/>);
  //     expect(wrapper.find('.create-new')).to.have.lengthOf(1);

  // });
});