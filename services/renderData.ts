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

    return {month, year};
  };

  const {month, year} = getMonthYear(value);

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

export const AQIDetailData = [
  {
    aqiIndex: 176,
    img: require('../assets/home/rain.png'),
    'PM2.5(µg/m³)': 22.4,
    'PM10(µg/m³)': 34.4,
    'CO(ppm)': 8.1,
    'SO2(ppb)': 66.4,
    'NO2(ppb)': 20.4,
    'O3(pmm)': 20.4,
  },
  {
    aqiIndex: 85,
    img: require('../assets/home/rain.png'),
    'PM2.5(µg/m³)': 12.1,
    'PM10(µg/m³)': 20.2,
    'CO(ppm)': 4.5,
    'SO2(ppb)': 30.2,
    'NO2(ppb)': 10.1,
    'O3(pmm)': 15.3,
  },
  {
    aqiIndex: 150,
    img: require('../assets/home/sun.png'),
    'PM2.5(µg/m³)': 25.0,
    'PM10(µg/m³)': 40.0,
    'CO(ppm)': 7.0,
    'SO2(ppb)': 50.0,
    'NO2(ppb)': 15.0,
    'O3(pmm)': 25.0,
  },
  {
    aqiIndex: 45,
    img: require('../assets/home/sun.png'),
    'PM2.5(µg/m³)': 8.0,
    'PM10(µg/m³)': 12.0,
    'CO(ppm)': 2.0,
    'SO2(ppb)': 15.0,
    'NO2(ppb)': 5.0,
    'O3(pmm)': 10.0,
  },
  {
    aqiIndex: 120,
    img: require('../assets/home/rain.png'),
    'PM2.5(µg/m³)': 18.0,
    'PM10(µg/m³)': 25.0,
    'CO(ppm)': 5.0,
    'SO2(ppb)': 40.0,
    'NO2(ppb)': 12.0,
    'O3(pmm)': 20.0,
  },
  {
    aqiIndex: 190,
    img: require('../assets/home/sun.png'),
    'PM2.5(µg/m³)': 30.0,
    'PM10(µg/m³)': 45.0,
    'CO(ppm)': 9.0,
    'SO2(ppb)': 60.0,
    'NO2(ppb)': 18.0,
    'O3(pmm)': 28.0,
  },
  {
    aqiIndex: 160,
    img: require('../assets/home/rain.png'),
    'PM2.5(µg/m³)': 26.0,
    'PM10(µg/m³)': 38.0,
    'CO(ppm)': 6.5,
    'SO2(ppb)': 55.0,
    'NO2(ppb)': 14.0,
    'O3(pmm)': 22.0,
  },
];

export const getRandomData = () => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const districts = [
    'Ba Dinh',
    'Hoan Kiem',
    'Tay Ho',
    'Long Bien',
    'Cau Giay',
    'Dong Da',
    'Hai Ba Trung',
    'Hoang Mai',
    'Thanh Xuan',
    'Soc Son',
    'Dong Anh',
  ];

  const today = new Date();
  const dateData = Array.from({length: 7}, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = date.toLocaleString('default', {month: 'long'});
    return {
      label:
        i === 0
          ? `Today, ${day}th ${month}`
          : `${dayOfWeek}, ${day}th ${month}`,
      value: `day${i}`,
    };
  });

  const assignAQI = (district: string, min: number, max: number) => {
    const aqiIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    return {
      label: `${district} - AQI: ${aqiIndex}`,
      value: `${district}-${aqiIndex}`,
    };
  };

  const randomData = [
    assignAQI(districts[0], 151, 200),
    assignAQI(districts[1], 101, 150),
    assignAQI(districts[2], 51, 100),
    assignAQI(districts[3], 0, 50),
    ...districts.slice(4).map(district => {
      const aqiIndex = Math.floor(Math.random() * 201);
      return {
        label: `${district} - AQI: ${aqiIndex}`,
        value: `${district}-${aqiIndex}`,
      };
    }),
  ];

  return {dateData, randomData};
};
