import {BotonCal} from '../components/BotonCal';
import {useCalculadora} from '../hooks/useCalculadora';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
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
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* Boton  */}
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="C" color="#9b9b9b" accion={limpiar} />
        <BotonCal texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
        <BotonCal texto="del" color="#9b9b9b" accion={btndelete} />
        <BotonCal texto="/" color="#ff9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal texto="x" color="#ff9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal texto="-" color="#ff9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal texto="+" color="#ff9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        {/* fila de Botone  */}
        <BotonCal texto="0" ancho accion={armarNumero} />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" color="#ff9427" accion={calcular} />
      </View>
    </View>
  );
};
