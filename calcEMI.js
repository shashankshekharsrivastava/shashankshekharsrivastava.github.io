function calc() {
  var P = Number(document.getElementById("principal").value);
  var R = document.getElementById("rate").value/1200;
  var N = Number(document.getElementById("duration").value*12);
  var EMI = P * R / (1 - (Math.pow(1/(1 + R), N)));
  var EMIinWords = numberToWords.toWords(EMI);
  document.getElementById("myModalLabel").innerHTML = "The EMI is : - " + EMI.toFixed(2) + " Rupees.";
  document.getElementById("myModalLabelinWords").innerHTML = "In other words, your EMI is : - " + EMIinWords + " Rupees(rounded off).";
}

function toWords() {
  var P = Number(document.getElementById("principal").value);
  var N = Number(document.getElementById("duration").value*12);
  var principalAmount = numberToWords.toWords(P);
  var months = numberToWords.toWords(N);
  document.getElementById("principalAmountInput").innerHTML = "The total loan amount chosen is... " + principalAmount;
  document.getElementById("durationInMonths").innerHTML = "The duration in months is... " + months;
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(calcBreakUp);
function calcBreakUp() {
  var P = Number(document.getElementById("principal").value);
  var R = document.getElementById("rate").value/1200;
  var N = Number(document.getElementById("duration").value*12);
  var EMI = P * R / (1 - (Math.pow(1/(1 + R), N)));
  var totalAmount = (EMI * N);
  console.log(totalAmount)
  var totalInterest = (totalAmount - P);
  console.log(totalInterest)
  document.getElementById("totalAmountModalLabel").innerHTML = "Total amount you will pay against " + "the principal amount of Rupees " + P + " is... " + totalAmount.toFixed(2) + " Rupees";
  document.getElementById("totalInterestModalLabel").innerHTML = "Out of which the total interest you will end up with is... " + totalInterest.toFixed(2) + " Rupees";
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Total Amount', totalAmount],
    ['Total Interest',     totalInterest]
  ]);
  var options = {
    title: 'EMI Breakup Chart',
    width: 325,
    legend: 'Amount',
    is3D: true,
    animation: {"startup": true},
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

  if (navigator.userAgent.match(/Trident\/7\./)) {
    google.visualization.events.addListener(chart, 'click', function() {
      chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
      console.log(chart_div.innerHTML);
    });
    chart.draw(data, options);
  } else {
    google.visualization.events.addListener(chart, 'select png', function() {
      chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
      console.log(chart_div.innerHTML);
    });
    chart.draw(data, options);
    document.getElementById('png').innerHTML = '<a href="' + chart.getImageURI() + '" target="_blank"><span class="glyphicon glyphicon-print"></span></a>';
  }
}

function toMonths() {
  var N = Number(document.getElementById("duration").value*12);
  var months = numberToWords.toWords(N);
  document.getElementById("durationInMonths").innerHTML = "The duration in months is... " + months;
}
