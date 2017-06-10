// Interactive

//d3.csv("https://raw.githubusercontent.com/ryanleewatts/datasets/master/airplanes.csv", function(error, data) {
  //if (error) throw error;
//});

var data1;
 function setDataOne(){
   data1 = document.getElementById('selone').value;

   var x = d3.scaleLinear()
       .domain([0, 100])
       .range([0, 620]);

   d3.select(".airportchart1")
     .selectAll("div")
       .data(data1)
     .enter().append("div")
       .style("width", function(d) { return x(d) + "px"; })
       .text(function(d) { return d + "% of flights at Heathrow delayed in 2016";});
 }

 var data2;
  function setDataTwo(){
    data2 = document.getElementById('seltwo').value;

    var x = d3.scaleLinear()
        .domain([0, 100])
        .range([0, 620]);

    d3.select(".airportchart2")
      .selectAll("div")
        .data(data2)
      .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d + "% of flights at Heathrow delayed in 2016";});
  }

//var data1 = document.getElementById('selone').value;

//var data2 = document.getElementById('seltwo').value;

//var x = d3.scaleLinear()
  //  .domain([0, 100])
    //.range([0, 620]);

//d3.select(".airportchart1")
  //.selectAll("div")
    //.data(data1)
  //.enter().append("div")
    //.style("width", function(d) { return x(d) + "px"; })
    //.text(function(d) { return d + "% of flights at Heathrow delayed in 2016";});

//d3.select(".airportchart2")
  //.selectAll("div")
    //.data(data2)
  //.enter().append("div")
    //.style("width", function(d) { return x(d) + "px"; })
    //.text(function(d) { return d + "% of flights at Heathrow delayed in 2016";});

//Graph 1

//d3.csv("https://raw.githubusercontent.com/ryanleewatts/datasets/master/finalproject1.csv", function(error, data) {

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
