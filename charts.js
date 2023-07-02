// Hàm xử lý sự kiện khi click vào biểu đồ
function handleClick(event, chart, dataInfoElement) {
  var activePoints = chart.getElementsAtEvent(event);
  if (activePoints.length > 0) {
    var clickedDatasetIndex = activePoints[0]._datasetIndex;
    var clickedIndex = activePoints[0]._index;
    var pointData = chart.data.datasets[clickedDatasetIndex].data[clickedIndex];

    displayDataInfo(pointData, dataInfoElement);
  }
}
// Hàm hiển thị thông tin dữ liệu
function displayDataInfo(pointData, dataInfoElement) {
  dataInfoElement.innerHTML = `
    <h3>${pointData.labels}</h3>
    <p>Value: ${pointData.data}</p>
  `;
}

// Lấy canvas và context của canvas
var canvas1 = document.getElementById("myChart1");
var ctx1 = canvas1.getContext("2d");
var canvas2 = document.getElementById("myChart2");
var ctx2 = canvas2.getContext("2d");
var canvas3 = document.getElementById("myChart3");
var ctx3 = canvas3.getContext("2d");

// Lấy dữ liệu cho biểu đồ 1
var chartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My Dataset",
      data: [10, 20, 15, 25, 18, 30, 22],
      fill: false,
      borderColor: "rgb(50, 192, 192)",
      tension: 0.2,
    },
  ],
};

// Thiết lập các options cho biểu đồ 1
var chartOptions1 = {
  title: {
    display: true,
    text: "Solar Panel a month in year",
    fontSize: 25,
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  onClick: function (e) {
    handleClick(e, myChart1, document.getElementById("dataInfo1"));
  },
};

// Tạo đối tượng biểu đồ 1 bằng Chart.js
var myChart1 = new Chart(ctx1, {
  type: "line",
  data: chartData1,
  options: chartOptions1,
});

// Lấy dữ liệu cho biểu đồ 2
var chartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My Dataset",
      data: [10, 20, 15, 25, 18, 30, 22],
      fill: false,
      borderColor: "rgb(50, 192, 192)",
      tension: 0.2,
    },
  ],
};

// Thiết lập các options cho biểu đồ 2
var chartOptions2 = {
  title: {
    display: true,
    text: "Solar Panel a month in year",
    fontSize: 25,
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  onClick: function (e) {
    handleClick(e, myChart2, document.getElementById("dataInfo2"));
  },
};

// Tạo đối tượng biểu đồ 2 bằng Chart.js
var myChart2 = new Chart(ctx2, {
  type: "line",
  data: chartData2,
  options: chartOptions2,
});

// Lấy dữ liệu cho biểu đồ 3
var chartData3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My Dataset",
      data: [10, 20, 15, 25, 18, 30, 22],
      fill: false,
      borderColor: "rgb(50, 192, 192)",
      tension: 0.2,
    },
  ],
};

// Thiết lập các options cho biểu đồ 3
var chartOptions3 = {
  title: {
    display: true,
    text: "Solar Panel a month in year",
    fontSize: 25,
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  onClick: function (e) {
    handleClick(e, myChart3, document.getElementById("dataInfo3"));
  },
};

// Tạo đối tượng biểu đồ 3 bằng Chart.js
var myChart3 = new Chart(ctx3, {
  type: "line",
  data: chartData3,
  options: chartOptions3,
});