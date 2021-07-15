//update
var linelabels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: linelabels,
    // スタイルシートでグラフの大きさを変更可能
    datasets: [{
        label: '初めてのグラフ',
        borderColor: 'rgb(150, 50, 60)',
        backgroundColor: 'rgb(255, 100, 130)',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
}

var lineConfig = {
    type: 'line',
    data,
    options: {},
}

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);

// const barconfig = {
//     type: 'bar',
//     data: data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
// };

// var lineChart = new Chart(
//     // document.getElementById('barChart'),
//     $('#barChart'),
//     barConfig,
// );
