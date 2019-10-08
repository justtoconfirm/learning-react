import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
    it('Button renders correctly', () => {
        const wrapper = shallow(<Button />)
    })
})