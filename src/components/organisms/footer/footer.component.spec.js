/**
 * Footer Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.03
 */

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer.component';

require('config/enzyme.config');

describe('Testing footer component in molecules component ', () => {
    it('Test render footer component', () => {
        const footer = shallow(<Footer />);

        expect(footer.text()).toEqual('Footer');
        expect(footer.exists('.footer')).toBe(true);
    });
});
