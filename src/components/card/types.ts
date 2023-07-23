// ========= Card Types

export interface ICardProps {
  disabled: boolean;
  title: string;
  subtitle: string;
  description?: string;
  secondaryText?: string;
  badgeTitle?: string;
  badgeOnpress?: () => void;
  variant: 'primary' | 'danger';
}
