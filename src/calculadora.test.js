import React from 'react';
import ReactDOM from 'react-dom'
import Calculadora from './calculadora';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('calculadora', () => {

  it ('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('se deve limpar o campo de numeros', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  })
  
  it('deve somar 2 + 3 e obter 5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  })

  it('deve subtrair 6 - 3 e obter 3', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('3');
  })

  it('deve multiplicar 5 * 5 e obter 25', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('25');
  })

  it('deve dividir 8 / 2 e obter 4', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('4');
  })

  it('deve somar 2.5 + 3 e obter 5.5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');
  })

  it('deve somar 2.5 + 3.3 e obter 5.5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.8');
  })

});