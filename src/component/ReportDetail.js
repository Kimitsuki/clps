import React, { Component } from 'react';
import { Text, View, StatusBar, ImageBackground, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from '../StyleSheet';

let { height, width } = Dimensions.get('window');

export default class ReportDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <ImageBackground source={require('../pictures/header.png')} style={{ height: 80, flexDirection: 'row' }} resizeMode='stretch' >
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../pictures/back.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.bigWhite, marginLeft: 10 }}>Chi tiết phản ánh</Text>
                </ImageBackground>
                <ScrollView>
                    <View style={{ height: '100%', paddingHorizontal: 15 }}>
                        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 12, color: '#106DB6' }}>THÔNG TIN PHẢN ÁNH:</Text>
                        <View style={styles.shadowDetailBox}>
                            <View style={{ paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#106DB6', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#106DB6' }}>Tên phản ánh</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../pictures/clock.png')} style={{ width: 10, height: 10 }} resizeMode='contain' />
                                        <Text style={{ fontSize: 10, color: '#666666' }}> 14/12/2019 14:21:56</Text>
                                    </View>
                                </View>
                                <Image source={require('../pictures/cell-error.png')} style={{ width: 50, height: 50 }} />
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Trạng thái:</Text>
                                <Text style={styles.smallGrey}>Đang thực hiện</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Tỉnh:</Text>
                                <Text style={styles.smallGrey}>TP.HCM</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Huyện:</Text>
                                <Text style={styles.smallGrey}>Quận 1</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Địa chỉ:</Text>
                                <Text style={styles.smallGrey}>228 Lý Thường Kiệt</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Cell ID:</Text>
                                <Text style={styles.smallGrey}>123456</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>RSSI:</Text>
                                <Text style={styles.smallGrey}>70</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Cell Type:</Text>
                                <Text style={styles.smallGrey}>ABCD</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Site Name:</Text>
                                <Text style={styles.smallGrey}>ABCD</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Kinh độ:</Text>
                                <Text style={styles.smallGrey}>12.131221312</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Vĩ độ:</Text>
                                <Text style={styles.smallGrey}>13.345323423</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>User PA:</Text>
                                <Text style={styles.smallGrey}>abc.bcd</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Ngày PA:</Text>
                                <Text style={styles.smallGrey}>22/03/2021 17:09:29</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Loại PA:</Text>
                                <Text style={styles.smallGrey}>Phản ánh khách hàng cá nhân</Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 12, color: '#106DB6' }}>NỘI DUNG PHẢN ÁNH:</Text>
                        <View style={styles.shadowDetailBox}>
                            <Text style={styles.smallGrey}>Nội dung phản ánh</Text>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 12, color: '#106DB6' }}>GHI CHÚ:</Text>
                        <View style={styles.shadowDetailBox}>
                            <Text style={styles.smallGrey}>Ghi chú phản ánh</Text>
                        </View>
                        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 12, color: '#106DB6' }}>THÔNG TIN XỬ LÝ:</Text>
                        <View style={styles.shadowDetailBox}>
                            <View style={{ paddingBottom: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Tiến độ:</Text>
                                <Text style={styles.smallGrey}>Đang xử lý</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Ghi chú:</Text>
                                <Text style={styles.smallGrey}>Chờ lên 4G thuộc dự án 924</Text>
                            </View>
                            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Phương án:</Text>
                                <Text style={styles.smallGrey}>Phát triển mạng</Text>
                            </View>
                            <View style={{ paddingTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.smallGrey}>Ngày hoàn thành:</Text>
                                <Text style={styles.smallGrey}>31/03/2021</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 10 }} />
                </ScrollView>
            </View >
        );
    }
}