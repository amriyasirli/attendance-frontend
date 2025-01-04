import { StyleSheet } from 'react-native';
import React from 'react';
import ToastManager from 'toastify-react-native';
import { Colors } from 'constants/colors';

const Toast = () => {
  return (
    <ToastManager
      style={styles.toastContainer}
      positionValue={10}
      showProgressBar={false}
      showCloseIcon={false}
      duration={2500}
      animationStyle={'zoomInOut'}
      textStyle={styles.toastText}
    />
  );
};

export default Toast;

const styles = StyleSheet.create({
  toastContainer: {
    borderRadius: 8,
  },
  toastText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.text,
  },
});
