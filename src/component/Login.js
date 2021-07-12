import React, { Component } from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { styles } from '../StyleSheet';

let { height, width } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            showPassword: true,
        }
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <Image source={require('../pictures/background.png')} style={{ width: '100%', height: 250 }} />
                <View>
                    <LinearGradient style={{ height: '100%', alignItems: 'center' }} colors={['white', '#0060AF']} useAngle={true} angle={180} >
                        <Image source={require('../pictures/logo-mobi.png')} style={{ marginTop: 20, width: width / 2, height: 75 }} />
                        <View style={{ marginTop: 30 }}>
                            <View style={styles.inputBox}>
                                <View style={{ width: 25, heigh: 25, flex: 1 }}>
                                    <Image source={require('../pictures/user-icon.png')} style={{ width: 16, height: 16 }} />
                                </View>
                                <TextInput
                                    style={{ flex: 11, color: 'black' }}
                                    placeholder='Tên đăng nhập'
                                    placeholderTextColor='#666666'
                                />
                            </View>
                            <View style={styles.inputBox}>
                                <View style={{ width: 25, heigh: 25, flex: 1 }}>
                                    <Image source={require('../pictures/lock-icon.png')} style={{ width: 16, height: 16 }} />
                                </View>
                                <TextInput
                                    style={{ flex: 10, color: 'black' }}
                                    placeholder='Mật khẩu'
                                    placeholderTextColor='#666666'
                                    secureTextEntry={this.state.showPassword}
                                />
                                <TouchableOpacity style={{ width: 25, heigh: 25, flex: 1 }} onPress={() => this.setState({ showPassword: !this.state.showPassword })}>
                                    <Image source={require('../pictures/invisible.png')} style={{ width: 16, height: 14 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    disabled={false}
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    tintColors={{ true: '#106DB6', false: '#106DB6' }}
                                />
                                <Text style={{ color: '#666666', fontSize: 13 }}>Lưu mật khẩu</Text>
                            </View>
                            <TouchableOpacity style={{ marginTop: 5, width: width * 2 / 3, height: 48 }} onPress={() => this.props.navigation.navigate('BottomTab')}>
                                <LinearGradient style={{ height: '100%', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} colors={['#106DB6', '#1487E1']} useAngle={true} angle={360} >
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>ĐĂNG NHẬP</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
            </View >
        );
    }
}


