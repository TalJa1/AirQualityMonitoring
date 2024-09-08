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

export const GenerateChartHomeData = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const labels = [];
  const data = [];

  for (let i = 1; i <= currentDate.getDate(); i++) {
    labels.push(`${i}/${currentMonth + 1}`);
    data.push({
      value: Math.floor(Math.random() * 100) + 51, // Ensures value is between 51 and 150
      label: `${i}/${currentMonth + 1}`,
    });
  }

  return data;
};
