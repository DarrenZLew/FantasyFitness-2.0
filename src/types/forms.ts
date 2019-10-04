export interface IFormContainerProps {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
  type?: string;
  formHeader?: string;
  submitText?: string;
  bottomForm?: React.FC;
  addItem?: any;
  addItemText?: string;
  ButtonComponent?: React.FC;
}
