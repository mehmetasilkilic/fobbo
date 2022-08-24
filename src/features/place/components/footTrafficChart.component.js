import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const labels = [
  "",
  "09",
  "",
  "",
  "12",
  "",
  "",
  "15",
  "",
  "",
  "18",
  "",
  "",
  "21",
  "",
  "",
  "00",
];

const currentTime = new Date().getHours();

const currentBar = currentTime - 8;

const blueBar = (opacity = 1) => "#78A9FF";
const redBar = (opacity = 1) => "#9C1F19";

const data = {
  labels,
  datasets: [
    {
      data: [5, 5, 10, 10, 15, 20, 30, 40, 40, 50, 50, 60, 70, 85, 80, 70, 55],
      colors: labels.map((_, index) =>
        currentBar === index ? redBar : blueBar
      ),
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  barPercentage: 0.4,
  barRadius: 5,
  decimalPlaces: 0,
  color: (opacity = 1) => "#78A9FF",
  labelColor: (opacity = 1) => "#262626",

  style: {
    borderRadius: 16,
    fontFamily: "Bogle-Regular",
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: "#efefef",
    strokeDasharray: "0",
  },
};

const graphStyle = {
  paddingRight: 20,
  marginLeft: -11,
};

const screenWidth = Dimensions.get("window").width;

export const FootTrafficChart = () => (
  <BarChart
    fromZero={true}
    showBarTops={false}
    withHorizontalLabels={false}
    withCustomBarColorFromData={true}
    flatColor={true}
    style={graphStyle}
    data={data}
    width={screenWidth}
    height={220}
    yAxisLabel="$"
    chartConfig={chartConfig}
    verticalLabelRotation={0}
  />
);
