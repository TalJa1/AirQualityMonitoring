import {
  chanceOfRainIcon,
  goodQualityIcon,
  harmfulQualityIcon,
  humidityIcon,
  mediumQualityIcon,
  notGoodQualityIcon,
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
    'PM2.5(µg/m³)': 25.1,
    'PM10(µg/m³)': 40.3,
    'CO(ppm)': 7.2,
    'SO2(ppb)': 50.5,
    'NO2(ppb)': 15.4,
    'O3(pmm)': 25.6,
  },
  {
    aqiIndex: 45,
    img: require('../assets/home/sun.png'),
    'PM2.5(µg/m³)': 8.3,
    'PM10(µg/m³)': 12.7,
    'CO(ppm)': 2.1,
    'SO2(ppb)': 15.8,
    'NO2(ppb)': 5.4,
    'O3(pmm)': 10.2,
  },
  {
    aqiIndex: 44,
    img: require('../assets/home/rain.png'),
    'PM2.5(µg/m³)': 18.2,
    'PM10(µg/m³)': 25.4,
    'CO(ppm)': 5.3,
    'SO2(ppb)': 40.7,
    'NO2(ppb)': 12.5,
    'O3(pmm)': 20.8,
  },
  {
    aqiIndex: 190,
    img: require('../assets/home/sun.png'),
    'PM2.5(µg/m³)': 30.6,
    'PM10(µg/m³)': 45.2,
    'CO(ppm)': 9.1,
    'SO2(ppb)': 60.3,
    'NO2(ppb)': 18.7,
    'O3(pmm)': 28.9,
  },
  {
    aqiIndex: 51,
    img: require('../assets/home/rain.png'),
    'PM2.5(µg/m³)': 26.4,
    'PM10(µg/m³)': 38.5,
    'CO(ppm)': 6.5,
    'SO2(ppb)': 55.2,
    'NO2(ppb)': 14.3,
    'O3(pmm)': 22.7,
  },
];

const HanoiDistricts = [
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

const HCMDistricts = [
  'District 1',
  'District 3',
  'District 4',
  'District 5',
  'District 6',
  'District 7',
  'District 8',
  'District 10',
  'District 12',
  'Tan Binh',
  'Phu Nhuan',
];

export const getRandomData = (title: string) => {
  console.log('title', title);

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const districts = title.trim() === 'TP HCM' ? HCMDistricts : HanoiDistricts;

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

export const Mapimages = [
  require('../assets/map/good.png'),
  require('../assets/map/medium.png'),
  require('../assets/map/notgood.png'),
  require('../assets/map/harmful.png'),
];

export const Mapicons = [
  goodQualityIcon(vw(8), vw(8)),
  mediumQualityIcon(vw(8), vw(8)),
  notGoodQualityIcon(vw(8), vw(8)),
  harmfulQualityIcon(vw(8), vw(8)),
];
