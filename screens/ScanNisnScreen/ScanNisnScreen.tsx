import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from 'components/Button';
import Loader from 'components/global/Loader';
import { Overlay } from 'components/Scanner/Overlay';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { RootStackParamList } from 'types/authStack';

export default function ScanNisnScreen({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList>;
}) {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <Loader />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <CustomButton
          customStyle={{
            marginHorizontal: 32,
          }}
          icon={'camera-outline'}
          onPress={requestPermission}>
          Izinkan Kamera
        </CustomButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={'back'}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'code128', 'code39'],
        }}
        onBarcodeScanned={({ data }) => {
          if (data) {
            // qrLock.current = false;
            console.log(data);
            navigation.navigate('StudentProfil', { nisn: data });
          }
        }}>
        <Overlay />
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // padding: 32,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
