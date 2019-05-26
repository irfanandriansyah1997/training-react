/**
 * Icon Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.26
 */

import React from 'react';
import { render } from 'enzyme';
import Icon from './icon.component';

require('config/enzyme.config');

describe('Testing icon component in atomic component ', () => {
    it('Test render icon material component', () => {
        const icon = render(<Icon>edit</Icon>);

        expect(icon.text()).toContain('edit');
        expect(icon.hasClass('uif')).toBe(false);
        expect(icon.hasClass('uif-prospek-harga')).toBe(false);
        expect(icon.hasClass('material-icons')).toBe(true);
        expect(icon.hasClass('ui-atomic-icon')).toBe(true);
        expect(icon.hasClass('ui-atomic-icon--default')).toBe(true);
        expect(icon.hasClass('ui-atomic-icon--small')).toBe(false);
        expect(icon.hasClass('ui-atomic-icon--big')).toBe(false);
        expect(icon.prop('style')).toHaveProperty('color', '#3e4246');
    });

    it('Test render icon urbanindo component', () => {
        const icon = render(<Icon type="urbanindo">uif-prospek-harga</Icon>);

        expect(icon.text()).toContain('');
        expect(icon.hasClass('uif')).toBe(true);
        expect(icon.hasClass('uif-prospek-harga')).toBe(true);
        expect(icon.hasClass('material-icons')).toBe(false);
        expect(icon.hasClass('ui-atomic-icon')).toBe(true);
        expect(icon.hasClass('ui-atomic-icon--default')).toBe(true);
        expect(icon.hasClass('ui-atomic-icon--small')).toBe(false);
        expect(icon.hasClass('ui-atomic-icon--big')).toBe(false);
        expect(icon.prop('style')).toHaveProperty('color', '#3e4246');
    });

    it('Test render icon with custom size', () => {
        const icon = render(<Icon size={40}>edit</Icon>);

        expect(icon.prop('style')).toHaveProperty('font-size', '40px');
    });

    it('Test render icon with custom color', () => {
        const icon = render(<Icon color="#69acec">edit</Icon>);

        expect(icon.prop('style')).toHaveProperty('color', '#69acec');
    });
});
