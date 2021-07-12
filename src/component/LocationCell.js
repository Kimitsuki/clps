import React, { Component } from 'react';
import { Text, View, StatusBar, ImageBackground, Dimensions, Image, Alert, BackHandler } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { styles } from '../StyleSheet';


let { height, width } = Dimensions.get('window');

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regionLatitudeDelta: 0.01,
            regionLongitudeDelta: 0.01,
            cell: 0,
            cell_lat: 0,
            cell_lng: 0,
            list_cell: [],
        }
    }
    async componentDidMount() {
        let cell_id = 52743;
        await fetch('http://192.168.0.122:8080/cells?cell_id=' + cell_id)
            .then((response) => response.json())
            .then((responseJSON) => {
                let lat = Number(responseJSON[0].lat)
                let lng = Number(responseJSON[0].lng)
                this.setState({
                    cell: responseJSON[0],
                    cell_lat: lat,
                    cell_lng: lng,
                })
            })
        await fetch('http://192.168.0.122:8080/sites?site_id=' + this.state.cell.site_id + '&cell_lat=' + this.state.cell.lat + '&cell_lng=' + this.state.cell.lng)
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    list_cell: responseJSON
                })
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: this.state.cell_lat,
                        longitude: this.state.cell_lng,
                        latitudeDelta: this.state.regionLatitudeDelta,
                        longitudeDelta: this.state.regionLongitudeDelta,
                    }}
                    onRegionChangeComplete={region =>
                        this.setState({
                            regionLatitude: region.latitude,
                            regionLongitude: region.longitude,
                            regionLatitudeDelta: region.latitudeDelta,
                            regionLongitudeDelta: region.longitudeDelta,
                        })
                    }
                >
                    <Marker coordinate={{ latitude: this.state.cell_lat, longitude: this.state.cell_lng }}>
                        <Image source={require('../pictures/cell-info.png')} style={{ width: 40, height: 40 }} resizeMode='contain' />
                        <Callout tooltip={true}>
                            <View style={{ marginBottom: 10, width: width / 3 * 2, borderRadius: 15, borderWidth: 1, borderColor: '#666666', backgroundColor: 'white' }}>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#666666', }}>
                                    <View style={{ padding: 10, paddingBottom: 0, flexDirection: 'row' }}>
                                        <View style={{ width: '50%', paddingRight: 5 }}>
                                            <Text style={styles.calloutText}>Site ID: {this.state.cell.site_id}</Text>
                                            <Text style={styles.calloutText}>Kinh độ: {this.state.cell.lng}</Text>
                                        </View>
                                        <View style={{ width: '50%', paddingLeft: 5 }}>
                                            <Text style={styles.calloutText}>Tốc độ: </Text>
                                            <Text style={styles.calloutText}>Vĩ độ: {this.state.cell.lat}</Text>
                                        </View>
                                    </View>
                                    <View style={{ paddingHorizontal: 10, paddingBottom: 5 }}>
                                        <Text style={styles.calloutText}>Thời gian: </Text>
                                        <Text style={styles.calloutText}>Nhà mạng: </Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ paddingHorizontal: 10, paddingTop: 5, paddingBottom: 0, flexDirection: 'row' }}>
                                        <View style={{ width: '50%', paddingRight: 5 }}>
                                            <Text style={styles.calloutText}>Cell ID: {this.state.cell.cell_id}</Text>
                                        </View>
                                        <View style={{ width: '50%', paddingLeft: 5 }}>
                                            <Text style={styles.calloutText}>Cell Name: {this.state.cell.cell_name}</Text>
                                        </View>
                                    </View>
                                    <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                        <Text style={styles.calloutText}>Cell Type: {this.state.cell.cell_type}</Text>
                                        <Text style={styles.calloutText}>Khoảng  cách tới trạm: </Text>
                                    </View>
                                </View>
                            </View>
                        </Callout>
                    </Marker>
                    {this.state.list_cell.map((marker) => {
                        return (
                            <Marker coordinate={{ latitude: marker.lat, longitude: marker.lng }}>
                                <Image source={require('../pictures/cell-mark.png')} style={{ width: 40, height: 40 }} resizeMode='contain' />
                                <Callout tooltip={true}>
                                    <View style={{ marginBottom: 10, width: width / 3 * 2, borderRadius: 15, borderWidth: 1, borderColor: '#666666', backgroundColor: 'white' }}>
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#666666', }}>
                                            <View style={{ padding: 10, paddingBottom: 0, flexDirection: 'row' }}>
                                                <View style={{ width: '50%', paddingRight: 5 }}>
                                                    <Text style={styles.calloutText}>Site ID: {marker.site_id}</Text>
                                                    <Text style={styles.calloutText}>Kinh độ: {marker.lng}</Text>
                                                </View>
                                                <View style={{ width: '50%', paddingLeft: 5 }}>
                                                    <Text style={styles.calloutText}>Tốc độ: </Text>
                                                    <Text style={styles.calloutText}>Vĩ độ: {marker.lat}</Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, paddingBottom: 5 }}>
                                                <Text style={styles.calloutText}>Thời gian: </Text>
                                                <Text style={styles.calloutText}>Nhà mạng: </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={{ paddingHorizontal: 10, paddingTop: 5, paddingBottom: 0, flexDirection: 'row' }}>
                                                <View style={{ width: '50%', paddingRight: 5 }}>
                                                    <Text style={styles.calloutText}>Cell ID: {marker.cell_id}</Text>
                                                </View>
                                                <View style={{ width: '50%', paddingLeft: 5 }}>
                                                    <Text style={styles.calloutText}>Cell Name: {marker.cell_name}</Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                                <Text style={styles.calloutText}>Cell Type: {marker.cell_type}</Text>
                                                <Text style={styles.calloutText}>Khoảng  cách tới trạm: </Text>
                                            </View>
                                        </View>
                                    </View>
                                </Callout>
                            </Marker>
                        )
                    })}
                </MapView>
                <ImageBackground source={require('../pictures/header.png')} style={{ position: 'absolute', width: '100%', height: 80 }} resizeMode='stretch' >
                    <Text style={styles.bigWhite}>Trạm phát sóng</Text>
                </ImageBackground>
            </View >
        );
    }
}