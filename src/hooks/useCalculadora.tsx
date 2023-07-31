// import React from 'react'

import {useRef, useState} from 'react';
import {Platform, ToastAndroid} from 'react-native';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setnumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumeroAnterior('0');
    setnumero('0');
  };
  const armarNumero = (numeroTexto: string) => {
    //    validaciones
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Preguntar si es el primer punto decimal
      if (numeroTexto === '.') {
        setnumero(numero + numeroTexto);
        // Evaluar si es otro createContext, y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setnumero(numero + numeroTexto);
        // evaluar si es diferente de cero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setnumero(numeroTexto);
        // Evitar 000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setnumero(numero);
      }
    } else {
      setnumero(numero + numeroTexto);
    }
  };
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setnumero(numero.replace('-', ''));
    } else {
      setnumero('-' + numero);
    }
  };
  const btndelete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }
    if (numeroTemp.length > 1) {
      setnumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setnumero('0');
    }
  };
  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setnumero('0');
  };
  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };
  const calcular = () => {
    let num1 = Number(numero);
    let num2 = Number(numeroAnterior);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setnumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setnumero(`${num2 - num1}`);
        break;
      case Operadores.dividir:
        if (num1 !== 0) {
          {
            setnumero(`${num2 / num1}`);
          }
        } else {
          if (Platform.OS !== 'ios') {
            ToastAndroid.show(
              'No se puede dividir con cero',
              ToastAndroid.LONG,
            );
          } else {
            setnumero('0');
          }
        }
        break;
      case Operadores.multiplicar:
        setnumero(`${num1 * num2}`);
        break;
    }
    setNumeroAnterior('0');
  };
  return {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btndelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
