import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView, Image, ImageBackground, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../StyleSheet';

let data = [
    {
        "id": "HCM.001.20.02",
        "content": "User hau.truong khu vực Hồ Chí Minh vừa cập nhật trạng thái xử lý HCM.001.20.02 tại 39 Lê Duẩn, Quận 1, Hồ Chí Minh vào lúc 22/03/2021 14:21:00",
        "date": "17/06/2021 14:45:24",
    },
    {
        "id": "HCM.002.20.02",
        "content": "User hau.truong khu vực Hồ Chí Minh vừa cập nhật trạng thái xử lý HCM.001.20.02 tại 39 Lê Duẩn, Quận 1, Hồ Chí Minh vào lúc 22/03/2021 14:21:00",
        "date": "17/06/2021 14:45:24",
    },
    {
        "id": "HCM.003.20.02",
        "content": "User hau.truong khu vực Hồ Chí Minh vừa cập nhật trạng thái xử lý HCM.001.20.02 tại 39 Lê Duẩn, Quận 1, Hồ Chí Minh vào lúc 22/03/2021 14:21:00",
        "date": "17/06/2021 14:45:24",
    },
]

export default class Notifications extends Component {
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <ImageBackground source={require('../pictures/header.png')} style={{ height: 80 }} resizeMode='stretch'>
                    <Text style={styles.bigWhite}>Thông báo</Text>
                </ImageBackground>
                <ScrollView style={{ marginTop: 10, height: '100%' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginTop: 5, paddingHorizontal: 20 }}>
                                    <TouchableOpacity style={{ padding: 5, minHeight: 75, borderColor: '#B8D9E9', borderWidth: 1, borderRadius: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Image source={require('../pictures/notification.png')} style={{ width: 50, height: 50 }} />
                                        <View style={{ height: '100%', width: '70%' }}>
                                            <View>
                                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.id} - {item.name}</Text>
                                                <Text style={{ fontSize: 10, color: '#666666' }}>{item.content}</Text>
                                            </View>
                                            <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../pictures/clock.png')} style={{ width: 10, height: 10 }} resizeMode='contain' />
                                                <Text style={{ fontSize: 10 }}> {item.date}</Text>
                                            </View>
                                        </View>
                                        <Image source={require('../pictures/choose.png')} style={{ width: 15, height: 15 }} resizeMode='contain' />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                    <View style={{ height: 155 }} />
                </ScrollView>
            </View>
        );
    }
}