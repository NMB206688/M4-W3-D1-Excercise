import React from 'react';
//import ReactDOM from 'react-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import App from './App';

describe('Addition', () => {
    it('knows that 2 and 2 make 4', ()  => {
        expect(2+2).toBe(4)
    });
});
describe("App component", () => {
    it ("should rendeer App component correctly", () => {
        render(<App />);
    });
  
    it ("should rendeer App component correctly", () => {
        render(<App />);
        const textelement = screen.getByText('Register Form');
        expect(textelement).toBeInTheDocument();
    });
    it ("should rendeer App component correctly", () => {
        render(<App />);
        const inputelement = screen.getByRole('textbox');
        expect(inputelement).toBeInTheDocument();
    });
    it ("should show error messages when all fields are not entered", () => {
        render(<App />);
        const btnelement = screen.getByRole('Register Form');
        userEvent.click(btnelement);
    });
    it ("performs snapshot testing", () => {
       const tree = renderer.create(<App />).toJSON();
       expect(tree).toMatchSnapshot();
    });

});