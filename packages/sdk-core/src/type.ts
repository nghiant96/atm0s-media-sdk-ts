
import {
    RTCPeerConnection as RNRTCPeerConnection,
    MediaStream as RNMediaStream,
    MediaStreamTrack as RNMediaStreamTrack,
    RTCRtpTransceiver as RNRTCRtpTransceiver,
    mediaDevices as RNMediaDevices

} from 'react-native-webrtc';
import { Mixin } from "ts-mixer";

let platform: "mobile" | "web";

export function setPlatform(plat: "mobile" | "web") {
    platform = plat;
}

export class CrossPlatformPeerConnection extends Mixin(RTCPeerConnection, RNRTCPeerConnection) {
}
export class CrossPlatformMediaStreamTrack extends Mixin(MediaStreamTrack, RNMediaStreamTrack) {
}
export class CrossPlatformMediaStream extends Mixin(MediaStream, RNMediaStream) {
}
export class CrossPlatformRTCRtpTransceiver extends Mixin(RTCRtpTransceiver, RNRTCRtpTransceiver) {
}

// Hàm tạo kết nối ngang hàng
export function createPeerConnection(config?: RTCConfiguration): CrossPlatformPeerConnection {
    if (platform === 'web') {
        return new RTCPeerConnection(config) as CrossPlatformPeerConnection;
    } else {
        return new RNRTCPeerConnection(config) as CrossPlatformPeerConnection;
    }
}
export function mediaDevices() {
    if (platform === 'web') {
        return (navigator as any).mediaDevices;
    } else {
        return RNMediaDevices;
    }
}