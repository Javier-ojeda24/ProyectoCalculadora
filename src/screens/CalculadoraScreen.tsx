import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCal} from '../components/BotonCal';

export const CalculadoraScreen = () => {
  const [numero, setnumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
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

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* Boton  */}
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="C" color="#9b9b9b" accion={limpiar} />
        <BotonCal texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
        <BotonCal texto="del" color="#9b9b9b" accion={limpiar} />
        <BotonCal texto="/" color="#ff9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal texto="x" color="#ff9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal texto="-" color="#ff9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal texto="+" color="#ff9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="0" ancho accion={armarNumero} />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" color="#ff9427" accion={limpiar} />
      </View>
    </View>
  );
};
