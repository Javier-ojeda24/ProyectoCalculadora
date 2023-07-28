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
    setnumero(numero + numeroTexto);
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
        <BotonCal texto="+/-" color="#9b9b9b" accion={limpiar} />
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
