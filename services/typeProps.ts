import {ImageSourcePropType} from 'react-native';

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

export interface HeaderProps {
  title: string;
  subtitle?: string;
  isBack: boolean;
}

export interface ImageSliderType {
  img: ImageSourcePropType;
  title: string;
  description: string;
}

export interface ImageSliderPropsComponent {
  item: ImageSliderType;
  index: number;
}

export type ImgSliderList = {
  itemList: ImageSliderType[];
};
