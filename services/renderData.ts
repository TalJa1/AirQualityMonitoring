import {
  chanceOfRainIcon,
  humidityIcon,
  sensedTemperatureIcon,
  turbidityOfCloudsIcon,
  windICon,
} from '../assets/svgXml';
import {vw} from './styleSheet';

export const AQIDetailsData = [
  {
    icon: humidityIcon(vw(4), vw(4)),
    data: '76%',
    label: 'Humidity',
  },
  {
    icon: sensedTemperatureIcon(vw(4), vw(4)),
    data: '28°C',
    label: 'Sensed Temperature',
  },
  {
    icon: chanceOfRainIcon(vw(4), vw(4)),
    data: '20%',
    label: 'Chance of Rain',
  },
  {
    icon: turbidityOfCloudsIcon(vw(4), vw(4)),
    data: '20%',
    label: 'Turbidity of Clouds',
  },
  {
    icon: windICon(vw(4), vw(4)),
    data: '20 km/h',
    label: 'Wind speed',
  },
];

export const GenerateChartHomeData = (value: string) => {
  const getMonthYear = (value1: string) => {
    const currentDate = new Date();
    let monthOffset = 0;

    if (value1.startsWith('previous')) {
      monthOffset = -parseInt(value1.replace('previous', ''), 10);
    } else if (value1 === 'current') {
      monthOffset = 0;
    }

    currentDate.setMonth(currentDate.getMonth() + monthOffset);
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    return { month, year };
  };

  const { month, year } = getMonthYear(value);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const labels = [];
  const data = [];
  let previousValue = Math.floor(Math.random() * 100) + 51; // Initial value for comparison
  let increaseOrDecrease = '';
  let randomNumber = 0;

  for (let i = 1; i <= daysInMonth; i++) {
    const currentValue = Math.floor(Math.random() * 100) + 51; // Ensures value is between 51 and 150
    increaseOrDecrease = currentValue > previousValue ? 'increase' : 'decrease';
    randomNumber = Math.floor(Math.random() * 16) + 10; // Generate a random number between 10 and 25

    labels.push(`${i}/${month + 1}`);
    data.push({
      value: currentValue,
      label: `${i}/${month + 1}`,
    });

    previousValue = currentValue; // Update previousValue for next iteration
  }

  return {
    data,
    increaseOrDecrease,
    randomNumber,
  };
};

export const SliderBottomSaveTabData = [
  {
    img: require('../assets/home/slider1.png'),
    title: 'Overwhelming Heat:',
    description: "This Week's Weather Forecast",
  },
  {
    img: require('../assets/home/slider2.png'),
    title: 'Summer Weather Forecast:',
    description: 'Heat Warning',
  },
  {
    img: require('../assets/home/slider3.png'),
    title: 'Weekend Weather Forecast:',
    description: 'Localized Thunderstorms',
  },
  {
    img: require('../assets/home/slider4.png'),
    title: 'Seasonal Weather: Climate:',
    description: 'Changes, How to Adapt',
  },
];
