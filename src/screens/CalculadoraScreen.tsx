import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCal} from '../components/BotonCal';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>
      <View style={styles.fila}>
        {/* Boron  */}
        <BotonCal texto="C" color="#9b9b9b" />
        <BotonCal texto="+/-" color="#9b9b9b" />
        <BotonCal texto="del" color="#9b9b9b" />
        <BotonCal texto="/" color="#ff9427" />
      </View>
    </View>
  );
};
