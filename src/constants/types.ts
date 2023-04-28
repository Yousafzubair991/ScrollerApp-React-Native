export interface TPayloadInterface {
  email: string;
  firstName: string;
  lastName: string;
  provider: string;
  providerKey: string;
  token: string;
}

export interface TButtonProps {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  width?: string;
  height?: string;
  loading?: string;
  disabled?: string;
  textColor?: string;
  maxWidth?: string;
  marginVertical?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  fontSize?: string;
}

export interface TUser {
  id: number;
  name: {
    title: string;
    first: string;
    last: string;
  };
}
