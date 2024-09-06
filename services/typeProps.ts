export interface LoginBtnProps {
  title: string;
  icon?: any;
  textColor: string;
  btnColor: string;
}

export interface OnboardingComponentProps {
  title: string;
  description?: string | null;
  step: number;
  setStep: (newStep: number) => void;
  ui: React.ReactNode;
  isNext: boolean;
}
