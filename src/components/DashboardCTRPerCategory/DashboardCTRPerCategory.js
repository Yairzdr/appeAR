import React, {useEffect, useState}  from "react";
import {Card, CardBody, CardFooter, CardHeader, CardTitle} from "reactstrap";
import {Line} from "react-chartjs-2";
import {dashboardCTRPerCategory} from "../../variables/charts";

function DashboardCTRPerCategory(props){
    // const [days, setDays] = useState();
    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://ec2-18-168-221-214.eu-west-2.compute.amazonaws.com/days')
    //         .then(response => response.json()).then(response => setDays(response.days));
    // }, []);

    const dashboardCTRPerCategory = {
        data: (canvas) => {
            return {
                labels: ["2015-05-03","2015-05-04","2015-05-05","2015-05-06","2015-05-07","2015-05-08","2015-05-09","2015-05-10","2015-05-11","2015-05-12","2015-05-13","2015-05-14","2015-05-15","2015-05-16","2015-05-17","2015-05-18","2015-05-19","2015-05-20","2015-05-21","2015-05-22","2015-05-23","2015-05-24","2015-05-25","2015-05-26","2015-05-27","2015-05-28","2015-05-29","2015-05-30","2015-05-31","2015-06-01","2015-06-02","2015-06-03","2015-06-04","2015-06-05","2015-06-06","2015-06-07","2015-06-08","2015-06-09","2015-06-10","2015-06-11","2015-06-12","2015-06-13","2015-06-14","2015-06-15","2015-06-16","2015-06-17","2015-06-18","2015-06-19","2015-06-20","2015-06-21","2015-06-22","2015-06-23","2015-06-24","2015-06-25","2015-06-26","2015-06-27","2015-06-28","2015-06-29","2015-06-30","2015-07-01","2015-07-02","2015-07-03","2015-07-04","2015-07-05","2015-07-06","2015-07-07","2015-07-08","2015-07-09","2015-07-10","2015-07-11","2015-07-12","2015-07-13","2015-07-14","2015-07-15","2015-07-16","2015-07-17","2015-07-18","2015-07-19","2015-07-20","2015-07-21","2015-07-22","2015-07-23","2015-07-24","2015-07-25","2015-07-26","2015-07-27","2015-07-28","2015-07-29","2015-07-30","2015-07-31","2015-08-01","2015-08-02","2015-08-03","2015-08-04","2015-08-05","2015-08-06","2015-08-07","2015-08-08","2015-08-09","2015-08-10","2015-08-11","2015-08-12","2015-08-13","2015-08-14","2015-08-15","2015-08-16","2015-08-17","2015-08-18","2015-08-19","2015-08-20","2015-08-21","2015-08-22","2015-08-23","2015-08-24","2015-08-25","2015-08-26","2015-08-27","2015-08-28","2015-08-29","2015-08-30","2015-08-31","2015-09-01","2015-09-02","2015-09-03","2015-09-04","2015-09-05","2015-09-06","2015-09-07","2015-09-08","2015-09-09","2015-09-10","2015-09-11","2015-09-12","2015-09-13","2015-09-14","2015-09-15","2015-09-16","2015-09-17","2015-09-18"],
                datasets: [
                    {
                        //data: days,
                        data: [786, 1101, 1308, 1368, 1308, 1110, 761, 741, 951, 1304, 1346, 1366, 1274, 1141, 1199, 1547, 1548, 1333, 1273, 1234, 974, 1045, 1416, 1278, 1282, 1295, 1195, 968, 993, 1325, 1353, 1341, 1308, 1213, 969, 942, 1252, 1368, 1399, 1238, 928, 746, 840, 1255, 1365, 1339, 1311, 1150, 881, 933, 1283, 1309, 1245, 1179, 1173, 909, 1013, 1319, 1256, 1215, 1246, 1186, 931, 919, 1277, 1373, 1416, 1406, 1414, 1459, 1469, 1651, 1630, 1493, 1300, 1284, 1010, 1047, 1528, 1421, 1330, 1300, 1454, 1557, 1751, 1601, 1318, 1411, 1273, 1177, 994, 953, 1306, 1279, 1267, 1298, 1185, 827, 858, 1128, 1166, 1280, 1222, 1063, 849, 934, 1274, 1274, 1234, 1152, 1107, 897, 909, 1178, 1206, 1152, 1214, 1200, 934, 990, 1178, 1127, 1101, 1161, 1104, 906, 931, 1223, 1291, 1306, 1407, 1308, 994, 1076, 1338, 1268, 682, 627, 800],
                        fill: false,
                        borderColor: "#fbc658",
                        backgroundColor: "transparent",
                        pointBorderColor: "#fbc658",
                        pointRadius: 0.5,
                        pointHoverRadius: 4,
                        pointBorderWidth: 8,
                        tension: 0.4,
                    },
                    // {
                    //     data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
                    //     fill: false,
                    //     borderColor: "#51CACF",
                    //     backgroundColor: "transparent",
                    //     pointBorderColor: "#51CACF",
                    //     pointRadius: 4,
                    //     pointHoverRadius: 4,
                    //     pointBorderWidth: 8,
                    //     tension: 0.4,
                    // },
                    // {
                    //     data: [0, 10, 8, 12, 15, 27, 40, 44, 38, 50, 40, 68],
                    //     fill: false,
                    //     borderColor: "#D9534F",
                    //     backgroundColor: "transparent",
                    //     pointBorderColor: "#D9534F",
                    //     pointRadius: 4,
                    //     pointHoverRadius: 4,
                    //     pointBorderWidth: 8,
                    //     tension: 0.4,
                    // },
                    // {
                    //     data: [0, 10, 35, 30, 20, 25, 32, 36, 40, 41, 50, 60],
                    //     fill: false,
                    //     borderColor: "#5cb85c",
                    //     backgroundColor: "transparent",
                    //     pointBorderColor: "#5cb85c",
                    //     pointRadius: 4,
                    //     pointHoverRadius: 4,
                    //     pointBorderWidth: 8,
                    //     tension: 0.4,
                    // },
                    // {
                    //     data: [0, 2, 6, 10, 15, 30, 33, 25, 43, 48, 53, 66],
                    //     fill: false,
                    //     borderColor: "#808080",
                    //     backgroundColor: "transparent",
                    //     pointBorderColor: "#808080",
                    //     pointRadius: 4,
                    //     pointHoverRadius: 4,
                    //     pointBorderWidth: 8,
                    //     tension: 0.4,
                    // },
                ],
            };
        },
        options: {
            plugins: {
                legend: { display: false },
            },
        },
    };
    return(
        <Card className="card-chart">
            <CardHeader>
                <CardTitle tag="h5">Total Visits Per Date</CardTitle>
                <p className="card-category">Total Visits For All Factory54 Stores</p>
            </CardHeader>
            <CardBody>
                <Line
                    data={dashboardCTRPerCategory.data}
                    options={dashboardCTRPerCategory.options}
                    width={400}
                    height={100}
                />
            </CardBody>
            <CardFooter>
                <div className="chart-legend">
                    {/*<i className="fa fa-circle text-info" /> Shirts*/}
                    {/*<i className="fa fa-circle text-warning" /> Pants*/}
                    {/*<i className="fa fa-circle text-danger" /> Shoes*/}
                    {/*<i className="fa fa-circle text-success" /> Hats*/}
                    {/*<i className="fa fa-circle text-secondary" /> Bags*/}
                </div>
                <hr />
                <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                </div>
            </CardFooter>
        </Card>
    )
}
export default DashboardCTRPerCategory