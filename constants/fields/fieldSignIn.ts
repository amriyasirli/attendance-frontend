interface FieldSignInTypes {
  name: 'username' | 'password';
  label: string;
  secureText?: boolean;
  icon?: boolean;
  inputMode?: 'none' | 'text' | 'url' | 'decimal' | 'numeric';
  autoCapitalize?: 'none' | 'characters' | 'sentences' | 'words';
}

const FieldSignIn: FieldSignInTypes[] = [
  {
    name: 'username',
    label: 'Username',
    inputMode: 'text',
    autoCapitalize: 'none',
  },
  {
    name: 'password',
    label: 'Password',
    secureText: true,
    icon: true,
  },
];

export default FieldSignIn;
