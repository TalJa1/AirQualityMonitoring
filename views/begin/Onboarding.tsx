/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import OnboardingComponent from '../../components/begin/OnboardingComponent';
import {centerAll, containerStyle, vh, vw} from '../../services/styleSheet';

const Onboarding = () => {
  const [isBoarding, setIsBoarding] = useState(false);
  const [step, setStep] = useState(0.2);
  const [isNext, setIsNext] = useState(false);
  const [formData, setFormData] = useState({name: '', age: '', goal: ''});

  const getStepComponent = (): React.ReactNode => {
    switch (step) {
      case 0.2:
        return (
          <GetNameView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 0.4:
        return (
          <GetAgeView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 0.6:
        return <WelcomeView />;
      case 0.8:
        return <WelcomeView1 />;
      case 1:
        return (
          <WelcomeViewLast
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
    }
  };

  return (
    <>
      {isBoarding === false ? (
        <SafeAreaView
          style={[
            styles.container,
            {
              paddingHorizontal: vw(5),
              justifyContent: 'flex-end',
              paddingBottom: vh(5),
            },
          ]}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#3E3792',
                borderRadius: 44,
                paddingVertical: vh(1.5),
              },
              centerAll,
            ]}
            onPress={() => setIsBoarding(true)}>
            <Text style={{color: '#FCFCFC', fontSize: 20, fontWeight: '700'}}>
              Get started
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        <OnboardingComponent
          setStep={setStep}
          step={step}
          title={
            step < 0.5
              ? "Before jumping in, let's know each orther"
              : `Welcome ${formData.name}`
          }
          description={
            step === 0.6
              ? 'Choose a location to start'
              : step === 0.8 || step === 1
              ? 'Just a few steps to personalize your experience'
              : null
          }
          ui={getStepComponent()}
          isNext={isNext}
        />
      )}
    </>
  );
};

const WelcomeViewLast: React.FC<{
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {name: string; age: string; goal: string};
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      age: string;
      goal: string;
    }>
  >;
}> = ({formData, setFormData, setIsNext}) => {
  useEffect(() => {
    if (formData.goal.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.goal, setIsNext]);

  return (
    <View style={{rowGap: vh(1.5)}}>
      <Text style={{color: '#3E3792', fontSize: 24, fontWeight: '700'}}>
        Tell us about
      </Text>
      <Text>
        <Text style={{color: '#4C4C4C', fontSize: 20, fontWeight: '700'}}>
          Your GOAL
        </Text>
        <Text style={{color: '#4C4C4C'}}> /optional</Text>
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.goal}
        onChangeText={text => setFormData({...formData, goal: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
    </View>
  );
};

const WelcomeView1: React.FC = () => {
  return <></>;
};

const WelcomeView: React.FC = () => {
  return (
    <View>
      <Text style={{color: '#6E778B'}}>T</Text>
    </View>
  );
};

const GetAgeView: React.FC<{
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {name: string; age: string; goal: string};
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      age: string;
      goal: string;
    }>
  >;
}> = ({setIsNext, formData, setFormData}) => {
  useEffect(() => {
    if (formData.age.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.age, setIsNext]);

  return (
    <View style={[centerAll, {rowGap: vh(2)}]}>
      <Text style={{color: '#3E3792', fontWeight: '700', fontSize: 24}}>
        Your Age
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.age}
        keyboardType="number-pad"
        onChangeText={text => setFormData({...formData, age: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
    </View>
  );
};

const GetNameView: React.FC<{
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {name: string; age: string; goal: string};
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      age: string;
      goal: string;
    }>
  >;
}> = ({setIsNext, formData, setFormData}) => {
  useEffect(() => {
    if (formData.name.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.name, setIsNext]);

  return (
    <View style={[centerAll, {rowGap: vh(2)}]}>
      <Text style={{color: '#3E3792', fontWeight: '700', fontSize: 24}}>
        Your name
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.name}
        onChangeText={text => setFormData({...formData, name: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: containerStyle,
});
