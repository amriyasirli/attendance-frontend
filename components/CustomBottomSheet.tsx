import { Keyboard, StyleSheet, TextInput as RNTextInput } from 'react-native';
import React, {
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Button, Text, TextInput, TextInputProps } from 'react-native-paper';
import { Colors } from 'constants/colors';
import { RfidCard } from 'types/students';
import CustomButton from './Button';

interface BottomSheetsProps extends PropsWithChildren {
  label: string;
  visible: number;
  setVisible: React.Dispatch<SetStateAction<number>>;
  submit: () => void;
}

const BottomSheets: React.FC<BottomSheetsProps> = ({
  label,
  visible,
  setVisible,
  submit,
  children,
}) => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '35%'], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        onPress={() => {
          Keyboard.dismiss();
        }}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={visible}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={() => {
        setVisible(-1);
      }}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={styles.container}>
        <Text variant="titleMedium" className="my-1">
          {label}
        </Text>
        {children}

        <CustomButton
          className="my-8"
          onPress={() => {
            submit();
            sheetRef.current?.close();
          }}>
          Submit
        </CustomButton>
      </BottomSheetView>
    </BottomSheet>
  );
};

export const ScanRfidBottomSheet = ({
  label,
  studentId,
  visible,
  setVisible,
  handleChange,
}: {
  label: string;
  visible: number;
  studentId?: number;
  setVisible: React.Dispatch<SetStateAction<number>>;
  handleChange: (payload: RfidCard) => void;
}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<RNTextInput>(null);

  // Function to run after card ID is updated
  const handleCardScan = (id: string) => {
    if (id) {
      if (id.length > 10) {
        setValue(id.slice(-10));
      }
    }
  };

  // Automatically call the function when card ID is updated
  useEffect(() => {
    if (value) {
      handleCardScan(value);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [value]);

  // Menjaga agar selalu fokus
  const keepFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <BottomSheets
      label={label}
      visible={visible}
      setVisible={setVisible}
      submit={() => handleChange({ id: studentId, rfid_card_id: value })}>
      <TextInput
        ref={inputRef}
        autoFocus={true}
        placeholder={label}
        showSoftInputOnFocus={false}
        onBlur={keepFocus}
        mode="outlined"
        value={value}
        onChangeText={setValue}
        right={value ? <TextInput.Icon onPress={() => setValue('')} icon="close" /> : undefined}
      />
    </BottomSheets>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  radioText: {
    color: Colors.text,
  },
});
