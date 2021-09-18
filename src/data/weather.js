export default function getData() {
  const weatherData = {
    consolidated_weather: [
      {
        id: 5562671840624640,
        weather_state_name: "Light Cloud",
        weather_state_abbr: "lc",
        wind_direction_compass: "SW",
        created: "2021-09-16T04:51:28.961916Z",
        applicable_date: "2021-09-16",
        min_temp: 11.940000000000001,
        max_temp: 23.805,
        the_temp: 23.71,
        wind_speed: 5.284163100432143,
        wind_direction: 220.06521787462992,
        air_pressure: 1014,
        humidity: 59,
        visibility: 17.018114212996103,
        predictability: 70,
      },
      {
        id: 6593666106785792,
        weather_state_name: "Showers",
        weather_state_abbr: "s",
        wind_direction_compass: "SSW",
        created: "2021-09-16T04:51:31.077209Z",
        applicable_date: "2021-09-17",
        min_temp: 12.94,
        max_temp: 21.585,
        the_temp: 22.035,
        wind_speed: 7.444092393623904,
        wind_direction: 201.34501104827777,
        air_pressure: 1008,
        humidity: 71,
        visibility: 7.503057146265807,
        predictability: 73,
      },
      {
        id: 5286934294298624,
        weather_state_name: "Heavy Cloud",
        weather_state_abbr: "hc",
        wind_direction_compass: "WSW",
        created: "2021-09-16T04:51:34.147524Z",
        applicable_date: "2021-09-18",
        min_temp: 11.455,
        max_temp: 23.67,
        the_temp: 23.3,
        wind_speed: 4.297384149415414,
        wind_direction: 251.50035577304658,
        air_pressure: 1013,
        humidity: 59,
        visibility: 14.217283563986319,
        predictability: 71,
      },
      {
        id: 4546851006054400,
        weather_state_name: "Showers",
        weather_state_abbr: "s",
        wind_direction_compass: "SSW",
        created: "2021-09-16T04:51:37.196902Z",
        applicable_date: "2021-09-19",
        min_temp: 12.305,
        max_temp: 21.295,
        the_temp: 20.869999999999997,
        wind_speed: 5.503898962077468,
        wind_direction: 195.58581700749383,
        air_pressure: 1015,
        humidity: 72,
        visibility: 12.370568380656962,
        predictability: 73,
      },
      {
        id: 5466188487327744,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "NNW",
        created: "2021-09-16T04:51:40.164404Z",
        applicable_date: "2021-09-20",
        min_temp: 11.940000000000001,
        max_temp: 18.255000000000003,
        the_temp: 17.91,
        wind_speed: 5.556004251202313,
        wind_direction: 337.0839751497301,
        air_pressure: 1019.5,
        humidity: 83,
        visibility: 12.590844468305098,
        predictability: 75,
      },
      {
        id: 6379568580526080,
        weather_state_name: "Light Cloud",
        weather_state_abbr: "lc",
        wind_direction_compass: "NNE",
        created: "2021-09-16T04:51:43.164326Z",
        applicable_date: "2021-09-21",
        min_temp: 11.629999999999999,
        max_temp: 23.025,
        the_temp: 28.46,
        wind_speed: 4.563032689095682,
        wind_direction: 29.000000000000004,
        air_pressure: 1014,
        humidity: 56,
        visibility: 8.987512924520798,
        predictability: 70,
      },
    ],
    time: "2021-09-16T07:31:43.165273+01:00",
    sun_rise: "2021-09-16T07:00:34.525259+01:00",
    sun_set: "2021-09-16T19:37:50.216245+01:00",
    timezone_name: "LMT",
    parent: {
      title: "Ireland",
      location_type: "Country",
      woeid: 23424803,
      latt_long: "53.419609,-8.240550",
    },
    sources: [
      {
        title: "BBC",
        slug: "bbc",
        url: "http://www.bbc.co.uk/weather/",
        crawl_rate: 360,
      },
      {
        title: "Forecast.io",
        slug: "forecast-io",
        url: "http://forecast.io/",
        crawl_rate: 480,
      },
      {
        title: "HAMweather",
        slug: "hamweather",
        url: "http://www.hamweather.com/",
        crawl_rate: 360,
      },
      {
        title: "Met Office",
        slug: "met-office",
        url: "http://www.metoffice.gov.uk/",
        crawl_rate: 180,
      },
      {
        title: "OpenWeatherMap",
        slug: "openweathermap",
        url: "http://openweathermap.org/",
        crawl_rate: 360,
      },
      {
        title: "Weather Underground",
        slug: "wunderground",
        url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
        crawl_rate: 720,
      },
      {
        title: "World Weather Online",
        slug: "world-weather-online",
        url: "http://www.worldweatheronline.com/",
        crawl_rate: 360,
      },
    ],
    title: "Dublin",
    location_type: "City",
    woeid: 560743,
    latt_long: "53.343761,-6.249530",
    timezone: "Europe/Dublin",
  };
  return weatherData;
}
