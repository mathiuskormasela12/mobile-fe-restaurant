// ========= Input Props

export interface IInputProps {
  error?: string;
  placeholder: string;
  type: 'default' | 'email-address' | 'phone-pad';
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}
