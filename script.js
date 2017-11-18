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

var tool_tip = d3.tip()
     .attr("class", "d3-tip")
     .offset([-8, 0])
     //.html( + "flights were delayed by " + " in ");
     .html(function(d) { return d + " test"; });
   svg.call(tool_tip);

d3.csv("https://raw.githubusercontent.com/ryanleewatts/final-project/master/data/graph1.csv", function(d, i, columns) {
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
      .attr("width", x.bandwidth())

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
      .attr("font-size", 14)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 16 + ")"; });

  legend.append("rect")
      .attr("x", width - 35)
      .attr("y", 32)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", z)
      .style("stroke", "black")
      .style("stroke-width", 0.2);

  legend.append("text")
      .attr("x", width - 40)
      .attr("y", 40)
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
          categories: ['Thomas Cook', 'Monarch', 'Thomson', 'Jet2', 'Virgin', 'FlyBe', 'EasyJet', 'British Airways', 'Eastern', 'Ryanair'],
          gridLineWidth: 0
        },
        yAxis: {
          title: {
              text: '',
            }
       },
       tooltip: {
         formatter: function() {
           return '<b>' + this.y + '%</b> of flights organised through <b>' + this.x + '</b> were delayed by more than 3 hours since 2004.';
                }
              },
       legend: {
          enabled: false
       },
       credits: {
         enabled: false
       },
       series: [{
         data: [2.26, 1.71, 1.25, 0.96, 0.95, 0.72, 0.64, 0.5 ,0.5, 0.45]
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
  document.getElementById('airportchart1').style.width = data1*5 + "%" ;
  document.getElementById('airportchart1').style.background = "#990000";
  document.getElementById('airportchart1').style.height = "60px";
  document.getElementById('airportchart1').innerHTML = "<span style='font-size:40px'>" + data1 + " mins </span>";
  // Second Bar
  document.getElementById('airportchart2').style.width = data2*5 + "%";
  document.getElementById('airportchart2').style.background = "#ff6666";
  document.getElementById('airportchart2').style.height = "60px";
  document.getElementById('airportchart2').innerHTML = "<span style='font-size:40px'>" + data2 + " mins </span>";
  //Facts
  document.getElementById('factone').innerHTML = "The average delay at <b>" + airportname1 + "</b> was <b>" + data1 + "</b> minutes compared to <b>" + data2 + "</b> minutes at <b>" + airportname2 + ".</b>";
  document.getElementById('facttwo').innerHTML = "<b>" + funfact1 + "%</b> of flights from <b>" + airportname1 + "</b> have been delayed by over 15 minutes since 2004";
  document.getElementById('factthree').innerHTML = "<b>" + funfact2 + "%</b> of flights from <b>" + airportname2 + "</b> have been delayed by over 15 minutes since 2004";
  document.getElementById('facts').style.display = "block";
}
