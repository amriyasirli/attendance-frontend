import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';
import { useSignOut } from 'hooks/mutations/useSignOut';
import CustomButton from './Button';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const { isPending, mutateAsync: sigOutMutate } = useSignOut();

  const logout = async () => {
    await sigOutMutate();
  };

  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      <CustomButton disabled={isPending} onPress={logout}>
        Keluar
      </CustomButton>
      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
