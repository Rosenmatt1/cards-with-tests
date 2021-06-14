import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'enzyme'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({adapter: new Adapter()})
import App from './App'
// import PokerMain from './components/PokerMain.js'
import Deal from './components/Deal.js'


configure({ adapter: new Adapter() })

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('my first test', () => {
  const isTrue = true
  expect(isTrue).toBe(true)
})

describe('Deal Component Test', () => {
  const onCountChange = jest.fn()
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Deal onCountChange={onCountChange} />)
  })

  it('renders', () => {
    expect(wrapper).not.toBeNull()
  })
})
