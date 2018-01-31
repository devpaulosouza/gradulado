import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Image, Button, StatusBar } from 'react-native';
import styles from './styles';
import { colors } from '../../theme/index';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _renderEmailError = () => {
    switch (this.state.emailError) {
      case 'empty':
        return <Text style={styles.error}>Campo obrigatório</Text>;
      case 'invalid':
        return <Text style={styles.error}>E-mail não cadastrado</Text>;
      default:
        return <Text style={styles.error} />;
    }
  };

  _renderPasswordError = () => {
    switch (this.state.passwordError) {
      case 'empty':
        return <Text style={styles.error}>Campo obrigatório</Text>;
      case 'invalid':
        return <Text style={styles.error}>Senha inválida</Text>;
      default:
        return <Text />;
    }
  };

  _login = () => {
    if (this.state.email === '') {
    }
  };
  _register = () => {};

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <StatusBar backgroundColor={colors.primaryDark} />
          <View style={styles.center}>
            <Image style={styles.logo} source={require('../../../assets/images/pucmg_logo.png')} />
            <Text style={styles.title}>Gradulado</Text>
            <Text style={styles.subTitle}>Grades de horários da PUC</Text>
          </View>
          <Text>Email:</Text>
          <TextInput autoFocus onChangeText={email => this.setState({ email })} />
          {this._renderEmailError()}
          <Text>Senha:</Text>
          <TextInput autoFocus onChangeText={password => this.setState({ password })} />
          {this._renderPasswordError()}
          <View style={styles.button}>
            <Button onPress={() => this._login()} color={colors.primary} title={'Login'} />
          </View>
          <View style={styles.button}>
            <Button onPress={() => this._register()} color={colors.primary} title={'Register'} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
