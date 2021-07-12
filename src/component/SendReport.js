import React, { Component } from 'react';
import { Text, TextInput, View, StatusBar, ImageBackground, Dimensions, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../StyleSheet';

let { height, width } = Dimensions.get('window');

export default class SendReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ' ',
            refresh: true,
            imageSource: [],
            review: false,
            uri: '',
        }
    }
    selectImage() {
        let options = {
            mediaType: 'photo',
        };
        launchImageLibrary(options, response => {
            console.log({ response });
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response.assets[0].uri);
                this.setState({ imageSource: [...this.state.imageSource, response.assets[0].uri] });
            }
        });
    }
    removeImage(item) {
        let source = [];
        for (let i = 0; i < this.state.imageSource.length; i++) {
            if (this.state.imageSource[i] != item) {
                source.push(this.state.imageSource[i]);
            }
        }
        this.setState({ imageSource: source });
    }
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <ImageBackground source={require('../pictures/header.png')} style={{ height: 80, flexDirection: 'row' }} resizeMode='stretch' >
                    <TouchableOpacity style={styles.backButton} onPress={() => { this.props.navigation.goBack() }}>
                        <Image source={require('../pictures/back.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.bigWhite, marginLeft: 10 }}>Gửi phản ánh</Text>
                </ImageBackground>
                <ScrollView>
                    <View style={{ height: '100%' }}>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: 15, paddingRight: 5, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Tỉnh/TP:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>TP Hồ Chí Minh</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 5, paddingRight: 15, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Quận/Huyện:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>Quận 10</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: 15, paddingRight: 5, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Địa chỉ chi tiết:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>Số 7, ngách 189</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 5, paddingRight: 15, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Số điện thoại:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>09214124512</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: 15, paddingRight: 5, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Kinh độ:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>102.321321353</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 5, paddingRight: 15, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Vĩ độ:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>98.231231421</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: 15, paddingRight: 5, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Cell ID:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>TD10E</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 5, paddingRight: 15, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Cell Name:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>ABCD</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: 15, paddingRight: 5, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>RSSI:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>ABCD</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 5, paddingRight: 15, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Loại phản ánh:</Text>
                                <View style={{ ...styles.textBox, padding: 0, justifyContent: 'center' }}>
                                    <Picker
                                        dropdownIconColor='black'
                                        onValueChange={(itemValue) => this.setState({ filter: itemValue, refresh: !this.state.refresh })}
                                    >
                                        <Picker.Item style={{ fontSize: 13 }} label='Chọn loại phản ánh' value=' ' color='#A5A4A4' backgroundColor='white' />
                                        <Picker.Item style={{ fontSize: 13 }} label='A' value=' ' />
                                        <Picker.Item style={{ fontSize: 13 }} label='B' value=' ' />
                                        <Picker.Item style={{ fontSize: 13 }} label='C' value=' ' />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: 15, paddingRight: 5, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Cell Type:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>ABCD</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 5, paddingRight: 15, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Site name:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>ABCD</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: 15, paddingRight: 5, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Download:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>102 mbps</Text>
                                </View>
                            </View>
                            <View style={{ paddingLeft: 5, paddingRight: 15, width: width / 2 }}>
                                <Text style={styles.boldSmallGrey}>Upload:</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.boldSmallBlack}>102 mbps</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <View style={{ paddingHorizontal: 15, width: '100%' }}>
                                <Text style={styles.boldSmallGrey}>Tên phản ánh:</Text>
                                <View style={{ ...styles.textBox, padding: 0, paddingHorizontal: 10 }}>
                                    <TextInput
                                        style={{ color: 'black' }}
                                        placeholder='Nhập tên phản ánh'
                                        placeholderTextColor='#A5A4A4'
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <View style={{ paddingHorizontal: 15, width: '100%' }}>
                                <Text style={styles.boldSmallGrey}>Nội dung phản ánh:</Text>
                                <View style={{ ...styles.textBox, padding: 0, paddingHorizontal: 10, minHeight: 100 }}>
                                    <TextInput
                                        style={{ color: 'black' }}
                                        placeholder='Nhập nội dung phản ánh'
                                        placeholderTextColor='#A5A4A4'
                                        multiline={true}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 80, width: '100%' }}>
                            <ScrollView horizontal={true}>
                                <View style={{ width: 15, backgroundColor: 'white' }}></View>
                                {this.state.imageSource.map((item) => {
                                    return (
                                        <TouchableWithoutFeedback onPress={() => this.setState({ review: true, uri: item })} >
                                            <ImageBackground source={{ uri: item }} style={{ width: 100, height: 100, alignItems: 'flex-end' }} on>
                                                <TouchableOpacity onPress={() => this.removeImage(item)}>
                                                    <Image source={require('../pictures/remove.png')} style={{ width: 20, height: 20 }} />
                                                </TouchableOpacity>
                                            </ImageBackground>
                                        </TouchableWithoutFeedback>
                                    )
                                })}
                                <View style={{ width: 15, backgroundColor: 'white' }}></View>
                            </ScrollView>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: '#EBF8FF', borderRadius: 5, borderWidth: 1, borderColor: '#A7DFF4', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.selectImage()}>
                                <Image source={require('../pictures/photo.png')} style={{ width: 25, height: 20 }} />
                                <Text style={{ marginTop: 10, fontSize: 11, fontWeight: 'bold', color: '#106DB6' }}>Thêm ảnh mô tả</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20, alignItems: 'center', paddingHorizontal: 15 }}>
                            <TouchableOpacity style={{ width: '100%' }} >
                                <LinearGradient style={{ paddingVertical: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} colors={['#106DB6', '#1487E1']} useAngle={true} angle={360} >
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Gửi phản ánh</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 20 }} />
                    </View>
                </ScrollView>
                {
                    this.state.review ?
                        <View style={{ position: 'absolute', padding: 20, height: '100%', width: '100%', backgroundColor: '#666666B3', elevation: 6, alignItems: 'center', justifyContent: 'center' }} onStartShouldSetResponder={() => this.setState({ review: false })}>
                            <Image source={{ uri: this.state.uri }} style={{ width: '100%', height: '100%' }} resizeMode='center' />
                        </View>
                        :
                        <View />
                }
            </View >
        );
    }
}