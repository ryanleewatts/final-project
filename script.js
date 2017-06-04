// Graph One

$(function () {
    var chartone = Highcharts.chart('graphone', {
        chart: {
          type: 'bar',
          backgroundColor: 'transparent'
        },
        title: {
          text: 'Which GNR album has been played the most over the years?',
          align: 'left',
          style: {
                  fontSize:'21px'
                }
        },
        plotOptions: {
            bar: {
                colorByPoint: true
                }
        },
        colors: [
           '#a80000',
           '#0c244c',
           '#0c244c',
           '#0c244c',
           '#0c244c'
       ],
        subtitle: {
          text: "'Appetite For Destruction' has been played in full 38 times over three decades",
          align: 'left'
        },
        xAxis: {
          categories: ['Appetite For Destruction', 'Chinese Democracy', 'Use Your Illusion 2', 'Use Your Illusion 1', "G N' R Lies"]
        },
        yAxis: {
          title: {
              text: 'Tracks played from that album',
            }
        },
        tooltip: {
          useHTML: true,
          headerFormat: '<small>{point.key}</small><table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                       '<td style="text-align: right"><b>{point.y} EUR</b></td></tr>',
          footerFormat: '</table>',
            formatter: function() {
                          return '<img src="img/' + this.x + '.jpg" height="125" width="125">';
                },
          valueDecimals: 2
       },
       legend: {
          enabled: false
       },
       credits: {
         enabled: false
       },
       series: [{
         data: [5272, 2047, 1562, 1290, 892]
        }]
    });
});

// Graph Two

$(function () {
    var charttwo = Highcharts.chart('graphtwo', {
        chart: {
          type: 'bar',
          backgroundColor: 'transparent'
        },
        title: {
          text: 'Which hit has been the most frequently played at GNR shows?',
          align: 'left',
          style: {
                  fontSize:'20px'
                }
        },
        plotOptions: {
            bar: {
                colorByPoint: true
                }
        },
        colors: [
           '#a80000',
           '#a80000',
           '#a80000',
           '#a80000',
           '#0c244c',
           '#a80000',
           '#0c244c',
           '#a80000',
           '#0c244c',
           '#0c244c'
       ],
        subtitle: {
          text: "Classic track 'Welcome to the Jungle' tops the charts with 734 plays",
          align: 'left'
        },
        xAxis: {
          categories: ['Welcome to the Jungle', 'Mr. Brownstone', 'Paradise City', "Sweet Child O' Mine", "Knockin' on Heaven's Door", "It's So Easy", "Live and Let Die", "Nightrain", "November Rain", "You Could Be Mine"]
        },
        yAxis: {
          title: {
              text: 'Times played',
            }
       },
       tooltip: {
         formatter: function() {
           return '<b>' + this.x + '</b> has been played live <b>' + this.y + '</b> times ';
                }
              },
       legend: {
          enabled: false
       },
       credits: {
         enabled: false
       },
       series: [{
         data: [734, 698, 686, 679, 677, 639, 576, 570, 569, 558]
        }]
    });
});

// Interactive

function submitFunction() {
    var x = document.getElementById('databit');
    if (x.style.display !== 'none') {
        x.style.display = 'none';
    } else {
      	x.style.display = 'block';
    }
}

//Changes the inner html for the databit
var select = document.getElementById('myDropdown');
var input = document.getElementById('name');
select.onchange = function() {
    document.getElementById('databitone').innerHTML = "<div>Guns N Roses vs " + select.value + "</div>"
    document.getElementById('databittwo').innerHTML = "<div>Countries visited in 2016</div>"
    document.getElementById('databitthree').innerHTML = "<div>Length of set by song length</div>"
    document.getElementById('databitfour').innerHTML = "<div>Percentage of set from first album</div>"

}
