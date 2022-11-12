import '../../style/App.css'
import { Chart } from "react-google-charts";

//PieChart
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

//AreaChart
export const dataAreaChart = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const optionsAreaChart = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

//BarChart
export const dataBarChart = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const optionsBarChart = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

//BubbleChart
export const dataBubbleChart = [
  ["ID", "Life Expectancy", "Fertility Rate", "Region", "Population"],
  ["CAN", 80.66, 1.67, "North America", 33739900],
  ["DEU", 79.84, 1.36, "Europe", 81902307],
  ["DNK", 78.6, 1.84, "Europe", 5523095],
  ["EGY", 72.73, 2.78, "Middle East", 79716203],
  ["GBR", 80.05, 2, "Europe", 61801570],
  ["IRN", 72.49, 1.7, "Middle East", 73137148],
  ["IRQ", 68.09, 4.77, "Middle East", 31090763],
  ["ISR", 81.55, 2.96, "Middle East", 7485600],
  ["RUS", 68.6, 1.54, "Europe", 141850000],
  ["USA", 78.09, 2.05, "North America", 307007000],
];

export const optionsBubbleChart = {
  title:
    "Correlation between life expectancy, fertility rate " +
    "and population of some world countries (2010)",
  hAxis: { title: "Life Expectancy" },
  vAxis: { title: "Fertility Rate" },
  bubble: { textStyle: { fontSize: 11 } },
};

//CategoryFilterControl
export const dataCategoryFilterControl = [
  ["Name", "Gender", "Age", "Donuts eaten"],
  ["Michael", "Male", 12, 5],
  ["Elisa", "Female", 20, 7],
  ["Robert", "Male", 7, 3],
  ["John", "Male", 54, 2],
  ["Jessica", "Female", 22, 6],
  ["Kylie", "NonBinary", 22, 2],
  ["Aaron", "Male", 3, 1],
  ["Margareth", "Female", 42, 8],
  ["Laurie", "NonBinary", 32, 2],
];

export const optionsCategoryFilterControl = {
  legend: "none",
  chartArea: { left: 15, top: 15, right: 0, bottom: 0 },
  pieSliceText: "label",
};

//Table
export const dataTable = [
  ["Name", "Salary", "Full time employee"],
  ["Mike", { v: 10000, f: "$10,000" }, true],
  ["Jim", { v: 8000, f: "$8,000" }, false],
  ["Alice", { v: 12500, f: "$12,500" }, true],
  ["Bob", { v: 7000, f: "$7,000" }, true],
];

export const optionsTable = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  pageSize: 1,
};

function App() {
  return (
    <div className="App">
      {/* PieChart */}
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

      {/* AreaChart */}
      <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={dataAreaChart}
      options={optionsAreaChart}
    />

  {/* BarChart */}
      <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={dataBarChart}
      options={optionsBarChart}
    />

  {/* BubbleChart */}
<Chart
      chartType="BubbleChart"
      width="100%"
      height="400px"
      data={dataBubbleChart}
      options={optionsBubbleChart}
    />

  {/* что-то прикольное, не непонятное */}
<Chart
      width={"100%"}
      height={"100%"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Name", "Age"],
        ["Michael", 12],
        ["Elisa", 20],
        ["Robert", 7],
        ["John", 54],
        ["Jessica", 22],
        ["Aaron", 3],
        ["Margareth", 42],
        ["Miranda", 33],
      ]}
      rootProps={{ "data-testid": "6" }}
      chartPackages={["corechart", "controls"]}
      render={({ renderControl, renderChart }) => {
        return (
          <div style={{ display: "flex" }}>
            <div style={{ width: "40%" }}>{renderControl(() => true)}</div>
            <div style={{ width: "60%" }}>{renderChart()}</div>
          </div>
        );
      }}
      controls={[
        {
          controlType: "StringFilter",
          options: {
            filterColumnIndex: 0,
            matchType: "any", // 'prefix' | 'exact',
            ui: {
              label: "Search by name",
            },
          },
        },
        {
          controlType: "NumberRangeFilter",
          controlID: "age-filter",
          options: {
            filterColumnIndex: 1,
            ui: {
              labelStacking: "vertical",
              label: "Age Selection:",
              allowTyping: false,
              allowMultiple: false,
            },
          },
        },
      ]}
    />

  {/* CategoryFilterControl */}
  <Chart
      chartType="PieChart"
      width="80%"
      height="400px"
      data={dataCategoryFilterControl}
      options={optionsCategoryFilterControl}
      chartWrapperParams={{ view: { columns: [0, 3] } }}
      chartPackages={["corechart", "controls"]}
      controls={[
        {
          controlEvents: [
            {
              eventName: "statechange",
              callback: ({ chartWrapper, controlWrapper }) => {
                console.log("State changed to", controlWrapper?.getState());
              },
            },
          ],
          controlType: "CategoryFilter",
          options: {
            filterColumnIndex: 1,
            ui: {
              labelStacking: "vertical",
              label: "Gender Selection:",
              allowTyping: false,
              allowMultiple: false,
            },
          },
        },
      ]}
    />

      {/* Table */}
      {/* Эта штука наезжает на предыдущую, нашла, где поправить в консоли, но не вижу, как тут - http://joxi.ru/8Anl4keTNZxLxm */}
  <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={dataTable}
      options={optionsTable}
    />
    </div>

    
  );
}

export default App;
