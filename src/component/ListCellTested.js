import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView, Image, ImageBackground, StatusBar, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../StyleSheet';

let { height, width } = Dimensions.get('window');
let data = [
    {
        "id": "2941",
        "name": "Cell A",
        "date": "17/06/2021 14:45:24",
        "ping": 20,
        "upload": 8,
        "download": 6,
    },
    {
        "id": "3243",
        "name": "Cell B",
        "date": "17/06/2021 14:45:24",
        "ping": 25,
        "upload": 2,
        "download": 3,
    },
    {
        "id": "4564",
        "name": "Cell C",
        "date": "17/06/2021 14:45:24",
        "ping": 30,
        "upload": 1,
        "download": 2,
    },
]

export default class ListCellTested extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false,
            starDate: '',
            endDate: '',
            search: '',
            refresh: true,
        }
    }
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <ImageBackground source={require('../pictures/header.png')} style={{ height: 140 }} resizeMode='stretch'>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.bigWhite}>Danh sách Cell đã test</Text>
                    </View>
                    <View style={styles.findingBox}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../pictures/search.png')} style={{ width: 20, height: 20 }} resizeMode='contain' />
                        </View>
                        <TextInput
                            style={{ flex: 11, color: 'black' }}
                            placeholder='Nhập từ khóa tìm kiếm'
                            placeholderTextColor='#666666'
                            onChangeText={(search) => this.setState({ search: search, refresh: !this.state.refresh })}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => this.setState({ filter: true })}>
                                <Image source={require('../pictures/filter.png')} style={{ width: 23, height: 23 }} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView style={{ marginTop: 10, height: '100%' }}>
                    <FlatList
                        data={data}
                        extraData={this.state.refresh}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    {item.name.includes(this.state.search) ?
                                        <View style={{ marginTop: 5, paddingHorizontal: 20 }}>
                                            <TouchableOpacity style={{ padding: 5, height: 75, borderColor: '#B8D9E9', borderWidth: 1, borderRadius: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} onPress={() => this.props.navigation.navigate('SendReport')}>
                                                <Image source={require('../pictures/cell-info.png')} style={{ width: 50, height: 50 }} />
                                                <View style={{ height: '100%', width: '70%', justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.id} - {item.name}</Text>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <Image source={require('../pictures/clock.png')} style={{ width: 10, height: 10 }} resizeMode='contain' />
                                                            <Text style={{ fontSize: 10, color: '#666666' }}> {item.date}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <View style={{ ...styles.circleBlue, height: 12, width: 12 }}>
                                                                <View style={{ ...styles.circle, height: 8, width: 8 }} />
                                                            </View>
                                                            <Text style={{ fontSize: 10 }}> {item.ping} Mbps</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <Image source={require('../pictures/upload.png')} style={{ width: 12, height: 12 }} resizeMode='contain' />
                                                            <Text style={{ fontSize: 10 }}> {item.upload} Mbps</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <Image source={require('../pictures/download.png')} style={{ width: 12, height: 12 }} resizeMode='contain' />
                                                            <Text style={{ fontSize: 10 }}> {item.download} Mbps</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <Image source={require('../pictures/choose.png')} style={{ width: 15, height: 15 }} resizeMode='contain' />
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        <View />
                                    }
                                </View>
                            )
                        }}
                    />
                    <View style={{ height: 155 }} />
                </ScrollView>
                {this.state.filter ?
                    <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: '#666666B3', elevation: 6, alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{ backgroundColor: 'white', borderRadius: 15 }}>
                            <View style={{ paddingHorizontal: 15, paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', borderBottomColor: '#1487E1', borderBottomWidth: 1, alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, color: '#1487E1' }}>Bộ lọc</Text>
                            </View>
                            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#666666' }}>Trạng thái gửi PA:</Text>
                                <View style={{ ...styles.textBox, padding: 0, justifyContent: 'center' }}>
                                    <Picker
                                        dropdownIconColor='black'
                                        onValueChange={(itemValue) => this.setState({ filter: itemValue, refresh: !this.state.refresh })}
                                    >
                                        <Picker.Item style={{ fontSize: 13 }} label='Chưa gửi PA' value=' ' color='#A5A4A4' backgroundColor='white' />
                                        <Picker.Item style={{ fontSize: 13 }} label='A' value=' ' />
                                        <Picker.Item style={{ fontSize: 13 }} label='B' value=' ' />
                                        <Picker.Item style={{ fontSize: 13 }} label='C' value=' ' />
                                    </Picker>
                                </View>
                                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                    <View style={{ paddingRight: 10 }}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#666666' }}>Thời gian bắt đầu:</Text>
                                        <View style={{ ...styles.textBox, width: width / 5 * 2, justifyContent: 'center' }}>
                                            <DatePicker
                                                style={{ width: '100%' }}
                                                date={this.state.starDate}
                                                mode="date"
                                                placeholder=" "
                                                format="DD/MM/YYYY"
                                                minDate="01/01/2021"
                                                maxDate="31/12/2030"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    dateIcon: {
                                                        height: 15,
                                                        width: 15,
                                                        resizeMode: 'contain',
                                                    },
                                                    dateInput: {
                                                        borderColor: 'transparent'
                                                    }
                                                }}
                                                iconSource={require('../pictures/calendar.png')}
                                                onDateChange={(date) => { this.setState({ starDate: date }) }}
                                            />
                                        </View>
                                        <TouchableOpacity style={{ marginTop: 20, width: width / 5 * 2, alignItems: 'center' }}>
                                            <LinearGradient style={{ width: '100%', paddingVertical: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} colors={['#106DB6', '#1487E1']} useAngle={true} angle={360} >
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>OK</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#666666' }}>Thời gian kết thúc:</Text>
                                        <View style={{ ...styles.textBox, width: width / 5 * 2, justifyContent: 'center' }}>
                                            <DatePicker
                                                style={{ width: '100%' }}
                                                date={this.state.endDate}
                                                mode="date"
                                                placeholder=" "
                                                format="DD/MM/YYYY"
                                                minDate="01/01/2021"
                                                maxDate="31/12/2030"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    dateIcon: {
                                                        height: 15,
                                                        width: 15,
                                                        resizeMode: 'contain',
                                                    },
                                                    dateInput: {
                                                        borderColor: 'transparent'
                                                    }
                                                }}
                                                iconSource={require('../pictures/calendar.png')}
                                                onDateChange={(date) => { this.setState({ endDate: date }) }}
                                            />
                                        </View>
                                        <TouchableOpacity style={{ marginTop: 20, width: width / 5 * 2, alignItems: 'center' }} onPress={() => this.setState({ filter: false })}>
                                            <LinearGradient style={{ width: '100%', paddingVertical: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} colors={['#74787A', '#D1DBE3']} useAngle={true} angle={2.87} >
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Bỏ qua</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    :
                    <View />
                }
            </View>
        );
    }
}