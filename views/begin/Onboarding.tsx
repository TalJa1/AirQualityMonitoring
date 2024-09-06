/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import OnboardingComponent from '../../components/begin/OnboardingComponent';
import {centerAll, containerStyle, vh, vw} from '../../services/styleSheet';

const Onboarding = () => {
  const [isBoarding, setIsBoarding] = useState(false);
  const [step, setStep] = useState(0.2);
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
          title="Before jumping in, let's know each orther"
          ui={<GetNameView />}
        />
      )}
    </>
  );
};

const GetNameView: React.FC = () => {
  return (
    <View style={centerAll}>
      <Text style={{color: 'red'}}>Tai</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: containerStyle,
});
