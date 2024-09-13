import {ImageSourcePropType} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

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
  scrollX: SharedValue<number>;
}

export type ImgSliderList = {
  itemList: ImageSliderType[];
};

export interface PaginationSliderPropsComponent {
  items: ImageSliderType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
}

export interface GradientBackgroundProps {
  children: React.ReactNode;
  colors: string[];
}

export interface TabBarProps {
  tabs: string[];
  setTabIndex: (index: number) => void;
  tabIndex: number;
}

export type Location = {
  latitude: number;
  longitude: number;
};

export interface OnboardingInterfaceProps {
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {name: string; age: string; goal: string; location: string};
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      age: string;
      goal: string;
      location: string;
    }>
  >;
}

export interface UserInforInterface {
  name: string;
  age: string;
  goal: string;
  location: string;
}
