/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {containerStyle, vh, vw} from '../../services/styleSheet';
import {OnboardingComponentProps} from '../../services/typeProps';
import * as Progress from 'react-native-progress';
import {arrowBackIcon, arrowNextIcon} from '../../assets/svgXml';

const OnboardingComponent: React.FC<OnboardingComponentProps> = ({
  title,
  step,
  description,
  setStep,
  ui,
}) => {
  useStatusBar('white');
  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: vw(5)}]}>
      <ScrollView contentContainerStyle={{paddingVertical: vh(2), flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View>{ui && React.isValidElement(ui) ? ui : null}</View>
          <StepLoader step={step} setStep={setStep} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const StepLoader: React.FC<{
  step: number;
  setStep: (newStep: number) => void;
}> = ({step, setStep}) => {
  return (
    <View>
      <Progress.Bar
        progress={step}
        borderWidth={0}
        color="#3E3792"
        unfilledColor="#CCCED5"
        width={vw(90)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={step === 0.2}
          onPress={() => {
            setStep(step - 0.2);
          }}
          style={[
            styles.circleButton,
            step === 0.2 && {backgroundColor: '#CCCED5'},
          ]}>
          <Text style={styles.buttonText}>{arrowBackIcon(vw(6), vw(6))}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStep(step + 0.2);
          }}
          style={styles.circleButton}>
          <Text style={styles.buttonText}>{arrowNextIcon(vw(6), vw(6))}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingComponent;

const styles = StyleSheet.create({
  container: containerStyle,
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#3E3792',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    color: '#6E778B',
  },
  step: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D5CFF9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
