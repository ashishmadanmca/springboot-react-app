import React from 'react';
import AddStudent from '../../src/component/AddStudent.jsx';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

//Specs for List Add Student component
describe('component/AddStudent', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    it('should render the the AddStudent component', () => {
        var handleCloseModal = jasmine.createSpy('handleCloseModal');

        act(() => {
            ReactDOM.render(<AddStudent onCloseModel={handleCloseModal}/>, container);
        });
        const label = container.querySelector('label');
        expect(label.textContent).toBe('Name');

        const h4 = container.querySelector('h4');
        expect(h4.textContent).toBe('Enter Student Details');

        const inputBox = container.querySelector('input');
        expect(inputBox.name).toBe('name');
    });

    it('should trigger add student on button click', () => {
        var handleCloseModal = jasmine.createSpy('handleCloseModal');

        act(() => {
            ReactDOM.render(<AddStudent onCloseModel={handleCloseModal}/>, container);
        });
        const button = container.querySelector('button[type="submit"]');

        act(() => {
            button.click();
        });

        expect(handleCloseModal.wasCalled);
    });
});

