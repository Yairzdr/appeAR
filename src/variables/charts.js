/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: ["2015-05-03","2015-05-04","2015-05-05","2015-05-06","2015-05-07","2015-05-08","2015-05-09","2015-05-10","2015-05-11","2015-05-12","2015-05-13","2015-05-14","2015-05-15","2015-05-16","2015-05-17","2015-05-18","2015-05-19","2015-05-20","2015-05-21","2015-05-22","2015-05-23","2015-05-24","2015-05-25","2015-05-26","2015-05-27","2015-05-28","2015-05-29","2015-05-30","2015-05-31","2015-06-01","2015-06-02","2015-06-03","2015-06-04","2015-06-05","2015-06-06","2015-06-07","2015-06-08","2015-06-09","2015-06-10","2015-06-11","2015-06-12","2015-06-13","2015-06-14","2015-06-15","2015-06-16","2015-06-17","2015-06-18","2015-06-19","2015-06-20","2015-06-21","2015-06-22","2015-06-23","2015-06-24","2015-06-25","2015-06-26","2015-06-27","2015-06-28","2015-06-29","2015-06-30","2015-07-01","2015-07-02","2015-07-03","2015-07-04","2015-07-05","2015-07-06","2015-07-07","2015-07-08","2015-07-09","2015-07-10","2015-07-11","2015-07-12","2015-07-13","2015-07-14","2015-07-15","2015-07-16","2015-07-17","2015-07-18","2015-07-19","2015-07-20","2015-07-21","2015-07-22","2015-07-23","2015-07-24","2015-07-25","2015-07-26","2015-07-27","2015-07-28","2015-07-29","2015-07-30","2015-07-31","2015-08-01","2015-08-02","2015-08-03","2015-08-04","2015-08-05","2015-08-06","2015-08-07","2015-08-08","2015-08-09","2015-08-10","2015-08-11","2015-08-12","2015-08-13","2015-08-14","2015-08-15","2015-08-16","2015-08-17","2015-08-18","2015-08-19","2015-08-20","2015-08-21","2015-08-22","2015-08-23","2015-08-24","2015-08-25","2015-08-26","2015-08-27","2015-08-28","2015-08-29","2015-08-30","2015-08-31","2015-09-01","2015-09-02","2015-09-03","2015-09-04","2015-09-05","2015-09-06","2015-09-07","2015-09-08","2015-09-09","2015-09-10","2015-09-11","2015-09-12","2015-09-13","2015-09-14","2015-09-15","2015-09-16","2015-09-17","2015-09-18"],
      datasets: [
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [80, 149, 221, 253, 208, 124, 63, 56, 83, 178, 198, 223, 178, 127, 156, 239, 190, 124, 125, 150, 108, 93, 173, 181, 190, 220, 127, 112, 95, 188, 201, 198, 195, 147, 101, 106, 186, 128, 201, 151, 100, 58, 103, 186, 264, 261, 205, 159, 109, 83, 228, 246, 176, 197, 169, 87, 87, 198, 160, 189, 151, 151, 110, 94, 213, 240, 246, 201, 176, 95, 87, 203, 224, 208, 213, 136, 96, 109, 225, 217, 263, 212, 133, 114, 134, 257, 258, 234, 206, 159, 79, 100, 194, 206, 228, 124, 169, 63, 59, 128, 128, 193, 169, 111, 88, 76, 201, 195, 212, 200, 129, 90, 93, 172, 155, 203, 192, 147, 76, 146, 170, 150, 138, 129, 146, 78, 78, 184, 147, 189, 181, 191, 99, 88, 145, 155, 130, 44, 15],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [273, 510, 532, 608, 526, 490, 251, 282, 341, 537, 532, 623, 476, 386, 442, 600, 615, 403, 510, 431, 334, 294, 542, 538, 475, 542, 408, 378, 333, 491, 497, 525, 580, 422, 344, 324, 469, 451, 535, 445, 302, 265, 330, 562, 736, 639, 651, 457, 378, 300, 559, 591, 543, 476, 441, 323, 312, 488, 471, 445, 435, 466, 338, 389, 526, 627, 645, 591, 509, 342, 308, 611, 589, 526, 502, 424, 377, 331, 658, 608, 675, 578, 501, 404, 408, 605, 654, 581, 523, 494, 341, 337, 530, 528, 561, 485, 539, 290, 274, 482, 349, 508, 443, 386, 312, 337, 575, 490, 495, 479, 404, 319, 309, 501, 456, 516, 449, 517, 319, 519, 424, 419, 388, 413, 407, 286, 338, 511, 454, 530, 451, 580, 339, 377, 419, 550, 318, 236, 30],
        },
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [747, 1033, 1241, 1278, 1243, 1054, 693, 664, 883, 1215, 1276, 1290, 1195, 1045, 1121, 1447, 1458, 1231, 1188, 1152, 892, 949, 1297, 1191, 1189, 1197, 1070, 862, 894, 1233, 1262, 1258, 1240, 1133, 883, 876, 1136, 1298, 1301, 1135, 861, 672, 769, 1187, 1301, 1274, 1230, 1102, 832, 853, 1237, 1264, 1167, 1089, 1076, 840, 934, 1240, 1152, 1120, 1166, 1138, 879, 847, 1213, 1318, 1351, 1343, 1278, 1201, 1216, 1450, 1479, 1334, 1179, 1128, 912, 919, 1378, 1291, 1199, 1181, 1284, 1506, 1800, 1545, 1190, 1271, 1152, 1045, 860, 840, 1165, 1151, 1114, 1128, 1061, 717, 735, 1019, 1019, 1114, 1058, 935, 743, 805, 1142, 1134, 1097, 1041, 969, 784, 775, 1024, 1080, 1037, 1068, 1080, 821, 873, 1024, 1009, 977, 1001, 972, 797, 803, 1085, 1151, 1198, 1270, 1185, 863, 936, 1166, 1124, 637, 564, 85],
        },


      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

const dashboardEmailStatisticsChart = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const dashboardCTRPerCategory = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [0, 10, 8, 12, 15, 27, 40, 44, 38, 50, 40, 68],
          fill: false,
          borderColor: "#D9534F",
          backgroundColor: "transparent",
          pointBorderColor: "#D9534F",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [0, 10, 35, 30, 20, 25, 32, 36, 40, 41, 50, 60],
          fill: false,
          borderColor: "#5cb85c",
          backgroundColor: "transparent",
          pointBorderColor: "#5cb85c",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [0, 2, 6, 10, 15, 30, 33, 25, 43, 48, 53, 66],
          fill: false,
          borderColor: "#808080",
          backgroundColor: "transparent",
          pointBorderColor: "#808080",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardCTRPerCategory: dashboardCTRPerCategory,
};
