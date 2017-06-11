//Graph 1

var svg = d3.select(".graphone"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var z = d3.scaleOrdinal()
    .range(["#8B0000", "#B22222", "#CD5C5C", "#F08080"]);

d3.csv("https://raw.githubusercontent.com/cityfinalproject/cityfinalproject.github.io/master/graph1.csv", function(d, i, columns) {
  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
  d.total = t;
  return d;
}, function(error, data) {
  if (error) throw error;

  var keys = data.columns.slice(1);

  x.domain(data.map(function(d) { return d.Year; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
  z.domain(keys);

  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.data.Year); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
      .attr("width", x.bandwidth());

  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
      .attr("x", 2)
      .attr("y", y(y.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-family", "Playfair Display, serif")
      .attr("font-weight", "bold")
      .attr("text-anchor", "end")
      .text("");

  var legend = g.append("g")
      .attr("class", "legend")
      .attr("font-family", "Playfair Display, serif")
      .attr("font-size", 12)
      .attr("text-anchor", "start")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 15 + ")"; });

  legend.append("rect")
      .attr("x", width - 620)
      .attr("width", 135)
      .attr("height", 14)
      .attr("fill", z);

  legend.append("text")
      .attr("x", width - 620)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return d; });


});

//Graph 2

$(function () {
    var charttwo = Highcharts.chart('graphtwo', {
        chart: {
          type: 'bar',
          backgroundColor: 'transparent'
        },
        title: {
          text: ' ',
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
           '#a80000',
           '#a80000',
           '#a80000',
           '#a80000',
           '#a80000',
           '#a80000',
       ],
        xAxis: {
          categories: ['Easyjet', 'British Airways', 'Ryanair', 'Monarch', 'Easyjet', 'British Airways', 'Ryanair', 'Monarch', 'Easyjet', 'British Airways'],
          gridLineWidth: 0
        },
        yAxis: {
          title: {
              text: '',
            }
       },
       tooltip: {
         formatter: function() {
           return 'Flights through <b>' + this.x + '</b> were delayed by more than 3 hours <b>' + this.y + '</b> times since 2004 ';
                }
              },
       legend: {
          enabled: false
       },
       credits: {
         enabled: false
       },
       series: [{
         data: [10, 9, 8, 7, 6, 5, 4, 3 ,2, 1]
        }]
    });
});

//Graph 3

$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

    Highcharts.chart('graphthree', {
        chart: {
        },
        title: {
            text: ' '
        },
        xAxis: {
            type: 'datetime',
            gridLineWidth: 0
        },
        yAxis: {
            title: {
                text: ' '
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'line',
            name: 'USD to EUR',
            color: '#990000',
            data: data
        }]
    });
});

// Interactive WORKING

var data1;
  function setData1(){
    data1 = document.getElementById('selone').value;
    funfact1 = $("#selone option:selected").data("fact");
    airportname1 = $("#selone option:selected").html();
  }

var data2;
  function setData2(){
    data2 = document.getElementById('seltwo').value;
    funfact2 = $("#seltwo option:selected").data("fact");
    airportname2 = $("#seltwo option:selected").html();
  }

function airportCompare(){
  // First Bar
  document.getElementById('airportchart1').style.width = data1 + "%" ;
  document.getElementById('airportchart1').style.background = "#990000";
  document.getElementById('airportchart1').style.height = "60px";
  document.getElementById('airportchart1').innerHTML = "<span style='font-size:40px'>" + data1 + "% </span>";
  // Second Bar
  document.getElementById('airportchart2').style.width = data2 + "%";
  document.getElementById('airportchart2').style.background = "#ff6666";
  document.getElementById('airportchart2').style.height = "60px";
  document.getElementById('airportchart2').innerHTML = "<span style='font-size:40px'>" + data2 + "% </span>";
  //Facts
  document.getElementById('factone').innerHTML = "<b>" + data1 + "%</b> of all flights from <b>" + airportname1 + "</b> were delayed by over 15 minutes last year, compared to <b>" + data2 + "%</b> flights from <b>" + airportname2 + ".</b>";
  document.getElementById('facttwo').innerHTML = funfact1;
  document.getElementById('factthree').innerHTML = funfact2;
  document.getElementById('facts').style.display = "block";
}

// Case Study WORKING

$(document).ready(function() {
    var objone = document.createElement("audio");
    objone.src="\sound.mp3";
    objone.volume=0.10;
    objone.autoPlay=false;
    objone.preLoad=true;

    $("#cscaptionone").click(function() {
        objone.play();
    });

});

$(document).ready(function() {
    var objtwo = document.createElement("audio");
    objtwo.src="\sound.mp3";
    objtwo.volume=0.10;
    objtwo.autoPlay=false;
    objtwo.preLoad=true;

    $("#cscaptiontwo").click(function() {
        objtwo.play();
    });

});

function caseStudyOne() {
    textColourOne();
    moveProgressBarOne();
};

function caseStudyTwo() {
    textColourTwo();
    moveProgressBarTwo();
};

function textColourOne() {
  console.log("textColourOne");
    document.getElementById("progresstextone").style.color = "#990000";
};

function textColourTwo() {
  console.log("textColourTwo");
    document.getElementById("progresstexttwo").style.color = "#990000";
};

function moveProgressBarOne() {
  console.log("moveProgressBarOne");
    var getPercent = ($('.progress-wrapone').data('progress-percentone') / 100);
    var getProgressWrapWidth = $('.progress-wrapone').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 4500;

    $('.progress-barone').stop().animate({
                left: progressTotal
            }, animationLength);
        }

function moveProgressBarTwo() {
  console.log("moveProgressBarTwo");
    var getPercent = ($('.progress-wraptwo').data('progress-percenttwo') / 100);
    var getProgressWrapWidth = $('.progress-wraptwo').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 4500;

    $('.progress-bartwo').stop().animate({
                left: progressTotal
            }, animationLength);
        }
