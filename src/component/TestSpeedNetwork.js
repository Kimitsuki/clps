import React, { Component } from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNSpeedometer from 'react-native-speedometer';
import { styles } from '../StyleSheet';

let { height, width } = Dimensions.get('window');

export default class TestSpeedNetwork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ping: 0,
            download: 100,
            upload: 0,
            chooseFile: false,
            download_1: true,
            download_2: false,
            download_5: false,
            download_10: false,
            download_20: false,
            download_50: false,
            upload_1: true,
            upload_2: false,
            upload_5: false,
            upload_10: false,
            upload_20: false,
            upload_50: false,
        }
    }
    render() {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <ImageBackground source={require('../pictures/header.png')} style={{ height: 80, flexDirection: 'row', justifyContent: 'space-between' }} resizeMode='stretch'>
                    <Text style={styles.bigWhite}>Test tốc độ mạng</Text>
                    <TouchableOpacity style={{ alignItems: 'center', marginTop: 30, marginRight: 20 }} onPress={() => this.setState({ chooseFile: true })}>
                        <Image source={require('../pictures/file.png')} style={{ width: 25, height: 25 }} />
                        <Text style={{ color: 'white', fontSize: 10 }}>Chọn size file</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ width: width / 3, alignItems: 'center' }}>
                        <Text style={styles.bigBlue}>Ping</Text>
                        <Text style={styles.smallBlue}>(Ms)</Text>
                        <Text style={styles.bigBlack}>{this.state.ping}</Text>
                    </View>
                    <View style={{ width: width / 3, alignItems: 'center' }}>
                        <Text style={styles.bigBlue}>Download</Text>
                        <Text style={styles.smallBlue}>(Mbps)</Text>
                        <Text style={styles.bigBlack}>{this.state.download}</Text>
                    </View>
                    <View style={{ width: width / 3, alignItems: 'center' }}>
                        <Text style={styles.bigBlue}>Upload</Text>
                        <Text style={styles.smallBlue}>(Mbps)</Text>
                        <Text style={styles.bigBlack}>{this.state.upload}</Text>
                    </View>
                </View>
                <SafeAreaView>
                    <RNSpeedometer
                        value={this.state.download}
                        size={250}
                        labels={[
                            {
                                name: '',
                                labelColor: '#ff2900',
                                activeBarColor: '#ff2900',
                            },
                            {
                                name: '',
                                labelColor: '#ff5400',
                                activeBarColor: '#ff5400',
                            },
                            {
                                name: '',
                                labelColor: '#f4ab44',
                                activeBarColor: '#f4ab44',
                            },
                            {
                                name: '',
                                labelColor: '#f2cf1f',
                                activeBarColor: '#f2cf1f',
                            },
                            {
                                name: '',
                                labelColor: '#14eb6e',
                                activeBarColor: '#14eb6e',
                            },
                            {
                                name: '',
                                labelColor: '#00ff6b',
                                activeBarColor: '#00ff6b',
                            }]}
                    />
                </SafeAreaView>
                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <View style={{ width: width / 3 * 2, height: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ ...styles.colorBox, backgroundColor: '#ff2900' }}></View>
                            <Text style={{ fontSize: 10, color: '#666666' }}>  Chậm</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ ...styles.colorBox, backgroundColor: '#f2cf1f' }}></View>
                            <Text style={{ fontSize: 10, color: '#666666' }}>  Trung bình</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ ...styles.colorBox, backgroundColor: '#00ff6b' }}></View>
                            <Text style={{ fontSize: 10, color: '#666666' }}>  Tốt</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.setState({ download: this.state.download - 5 })}>
                        <LinearGradient style={{ height: 40, width: width / 3, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} colors={['#106DB6', '#1487E1']} useAngle={true} angle={360} >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Test</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                    <View style={styles.shadowBox}>
                        <View style={{ height: 45, padding: 10, borderBottomWidth: 1, borderBottomColor: '#106DB6', justifyContent: 'center' }}>
                            <Text style={{ ...styles.shadowBoxText, color: '#106DB6' }}>Cell name</Text>
                        </View>
                        <View style={{ height: '75%', padding: 10, justifyContent: 'space-around' }}>
                            <Text style={{ ...styles.shadowBoxText, color: '#666666' }}>Mức thu sóng: </Text>
                            <Text style={{ ...styles.shadowBoxText, color: '#666666' }}>Loại mạng: </Text>
                            <Text style={{ ...styles.shadowBoxText, color: '#666666' }}>Kinh độ: </Text>
                            <Text style={{ ...styles.shadowBoxText, color: '#666666' }}>Vĩ độ: </Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', paddingHorizontal: 25, marginTop: 15 }}>
                    <TouchableOpacity style={{ width: '100%' }}>
                        <LinearGradient style={{ height: 40, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} colors={['#106DB6', '#1487E1']} useAngle={true} angle={360} >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Lưu logs</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                {this.state.chooseFile ?
                    <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: '#666666B3', elevation: 6, alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{ width: width / 5 * 4, backgroundColor: 'white', borderRadius: 15 }}>
                            <View style={{ paddingHorizontal: 15, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#1487E1', borderBottomWidth: 1, alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.setState({ chooseFile: false })}>
                                    <Image source={require('../pictures/exit.png')} style={{ width: 15, height: 15 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, color: '#1487E1' }}>Chọn file</Text>
                                <View style={{ width: 15 }} />
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#666666' }}>File Download:</Text>
                                <View style={{ padding: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        {this.state.download_1 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_1: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 1 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_1: true, download_2: false, download_5: false, download_10: false, download_20: false, download_50: false })} >
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 1 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.download_2 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_2: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 2 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_1: false, download_2: true, download_5: false, download_10: false, download_20: false, download_50: false })}>
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 2 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.download_5 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_5: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 5 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_1: false, download_2: false, download_5: true, download_10: false, download_20: false, download_50: false })}>
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 5 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        {this.state.download_10 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_10: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 10 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_1: false, download_2: false, download_5: false, download_10: true, download_20: false, download_50: false })}>
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 10 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.download_20 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_20: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 20 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_1: false, download_2: false, download_5: false, download_10: false, download_20: true, download_50: false })}>
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 20 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.download_50 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_50: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 50 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ download_1: false, download_2: false, download_5: false, download_10: false, download_20: false, download_50: true })} >
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 50 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#666666' }}>File Upload:</Text>
                                <View style={{ padding: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        {this.state.upload_1 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_1: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 1 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_1: true, upload_2: false, upload_5: false, upload_10: false, upload_20: false, upload_50: false })} >
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 1 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.upload_2 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_2: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 2 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_1: false, upload_2: true, upload_5: false, upload_10: false, upload_20: false, upload_50: false })} >
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 2 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.upload_5 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_5: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 5 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_1: false, upload_2: false, upload_5: true, upload_10: false, upload_20: false, upload_50: false })}>
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 5 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                    <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        {this.state.upload_10 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_10: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 10 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_1: false, upload_2: false, upload_5: false, upload_10: true, upload_20: false, upload_50: false })} >
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 10 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.upload_20 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_20: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 20 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_1: false, upload_2: false, upload_5: false, upload_10: false, upload_20: true, upload_50: false })}>
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 20 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                        {this.state.upload_50 ?
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_50: true })}>
                                                <View style={styles.circleBlue} >
                                                    <View style={styles.circle}></View>
                                                </View>
                                                <Text style={{ fontSize: 12 }}> 50 Mb</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ upload_1: false, upload_2: false, upload_5: false, upload_10: false, upload_20: false, upload_50: true })} >
                                                <View style={styles.circleBlue} />
                                                <Text style={{ fontSize: 12 }}> 50 Mb</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    :
                    <View />
                }
            </View >
        );
    }
}


