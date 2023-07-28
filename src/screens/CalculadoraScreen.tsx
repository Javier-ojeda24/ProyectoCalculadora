import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCal} from '../components/BotonCal';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>
      {/* Boton  */}
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="C" color="#9b9b9b" />
        <BotonCal texto="+/-" color="#9b9b9b" />
        <BotonCal texto="del" color="#9b9b9b" />
        <BotonCal texto="/" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="7" />
        <BotonCal texto="8" />
        <BotonCal texto="9" />
        <BotonCal texto="x" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="4" />
        <BotonCal texto="5" />
        <BotonCal texto="6" />
        <BotonCal texto="-" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="1" />
        <BotonCal texto="2" />
        <BotonCal texto="3" />
        <BotonCal texto="+" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="0" />
        <BotonCal texto="." />
        <BotonCal texto="=" color="#ff9427" />
      </View>
    </View>
  );
};
