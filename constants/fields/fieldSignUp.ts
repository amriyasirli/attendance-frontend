interface FieldSignUpTypes {
  name: 'fullname' | 'username' | 'email' | 'password';
  label: string;
  secureText?: boolean;
  icon?: boolean;
  inputMode?: 'none' | 'email' | 'text' | 'url' | 'decimal' | 'numeric';
  autoCapitalize?: 'none' | 'characters' | 'sentences' | 'words';
}

const FieldSignUp: FieldSignUpTypes[] = [
  {
    name: 'fullname',
    label: 'Nama Lengkap',
  },
  {
    name: 'username',
    label: 'Username',
  },
  {
    name: 'email',
    label: 'Email',
    inputMode: 'email',
    autoCapitalize: 'none',
  },
  {
    name: 'password',
    label: 'Password',
    secureText: true,
    icon: true,
  },
];

export default FieldSignUp;
