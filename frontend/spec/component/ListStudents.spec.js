import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import ListStudents from '../../src/component/ListStudents.jsx';

//Specs for List Students component
describe('component/ListStudents', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    it('should render the the ListStudents component', () => {
        var handleCloseModal = jasmine.createSpy('handleCloseModal');

        act(() => {
            ReactDOM.render(<ListStudents onCloseModel={handleCloseModal}/>, container);
        });

        const h4 = container.querySelector('h4');
        expect(h4.textContent).toBe('Student\'s Portfolio');

       const div = container.querySelector('div');
       expect(div.textContent).toBe('Student\'s PortfolioNameIDAdd Student');

        const inputBox = container.querySelector('button');
        expect(inputBox.textContent).toBe('Add Student');
    });
});

