import React from 'react';
import {act, create} from 'react-test-renderer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

describe('Profile status component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatusWithHooks status="SUBSCRIBE TO BASIC"
                                                         changeStatusAC={function () {
                                                         }} updateStatus={function () {
        }}/>);
        const instance = component.root;
        expect(instance.props.status).toBe('SUBSCRIBE TO BASIC');
    });

    test('span with correct status', () => {
        const component = create(<ProfileStatusWithHooks status="SUBSCRIBE TO BASIC"
                                                         changeStatusAC={function () {
                                                         }} updateStatus={function () {
        }}/>);
        const instance = component.root;
        let span = instance.findByType('span')
        expect(span.children[0]).toBe('SUBSCRIBE TO BASIC');
    });

    test('input should be displayed in edit mode', () => {
        const component = create(<ProfileStatusWithHooks status="SUBSCRIBE TO BASIC"
                                                         changeStatusAC={function () {
                                                         }} updateStatus={function () {
        }}/>);
        const instance = component.root;
        let span = instance.findByType('span')
        act(() => span.props.onDoubleClick());
        let input = instance.findByType('input')
        expect(input.props.value).toBe('SUBSCRIBE TO BASIC');
    });
});