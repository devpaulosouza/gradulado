import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, View, Text, Image, Button, StatusBar, TextInput } from 'react-native';
import styles from './styles';
import { colors } from '../../theme/index';
import errors from '../../constants/errors';
import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _renderError = message => (
    <View style={styles.errorContainer}>
      <Icon name={'md-alert'} color={colors.error} />
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );

  _renderEmailError = () => {
    switch (this.state.emailError) {
      case errors.FIELD_REQUIRED:
        return this._renderError('Campo obrigatório');
      case errors.INVALID_INPUT:
        return this._renderError('E-mail inválido');
      default:
        return <View style={styles.errorContainer} />;
    }
  };

  _renderPasswordError = () => {
    switch (this.state.passwordError) {
      case errors.FIELD_REQUIRED:
        return this._renderError('Campo obrigatório');
      case errors.INVALID_INPUT:
        return this._renderError('Senha inválida');
      default:
        return <View style={styles.errorContainer} />;
    }
  };

  _validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  _login = () => {
    let { email, password, emailError, passwordError } = this.state;
    if (email === '') {
      this.setState({ emailError: errors.FIELD_REQUIRED });
    } else if (!this._validateEmail(email)) {
      this.setState({ emailError: errors.INVALID_INPUT });
    } else {
      this.setState({ emailError: '' });
    }

    if (password === '') {
      this.setState({ passwordError: errors.FIELD_REQUIRED });
    } else if (password.length < 6) {
      this.setState({ passwordError: errors.INVALID_INPUT });
    } else {
      this.setState({ passwordError: '' });
    }

    if (emailError === '' && passwordError === '') {
      console.log('logando');
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => console.log(res))
        .catch(err => console.log(err));
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
          <View style={styles.inputContainer}>
            <Icon style={styles.iconInput} name={'md-mail'} size={16} />
            <TextInput
              style={styles.input}
              ref={ref => (this.inputEmail = ref)}
              placeholder={'Email'}
              onChangeText={email => this.setState({ email })}
              onSubmitEditing={event => {
                this.inputPassword.focus();
              }}
              value={this.state.email}
              underlineColorAndroid={colors.transparent}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              autoCapitalize={'none'}
            />
          </View>
          {this._renderEmailError()}
          <View style={styles.inputContainer}>
            <Icon style={styles.iconInput} name={'md-key'} size={16} />
            <TextInput
              style={styles.input}
              ref={ref => (this.inputPassword = ref)}
              placeholder={'Senha'}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              underlineColorAndroid={colors.transparent}
              secureTextEntry
              returnKeyType={'done'}
              autoCapitalize={'none'}
              onSubmitEditing={event => {
                this.inputPassword.blur();
              }}
            />
          </View>
          {this._renderPasswordError()}
          <View style={styles.button}>
            <Button onPress={() => this._login()} color={colors.primary} title={'Entrar'} />
          </View>
          <View style={styles.button}>
            <Button onPress={() => this._register()} color={colors.primary} title={'Registrar'} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
