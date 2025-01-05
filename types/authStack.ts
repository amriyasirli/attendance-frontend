export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  TabNavigator: TabNavigatorStackParamList;
  ScanNisn: undefined;
  StudentProfil: {
    nisn: string;
  };
  RfidScan: undefined;
  Modal: undefined;
};
export type TabNavigatorStackParamList = {
  Home: undefined;
  Siswa: undefined;
  Profil: undefined;
};
