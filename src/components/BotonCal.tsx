import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  texto: string;
  color?: string;
}

export const BotonCal = ({texto, color = '#2d2d2d'}: Props) => {
  return (
    <View style={{...styles.boton, backgroundColor: color}}>
      <Text
        style={{
          ...styles.botonTexto,
          color: color === '#9b9b9b' ? 'black' : 'white',
        }}>
        {texto}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
