function enableCalcBtn() {
  if (Number(document.getElementById("totalIncome").value.length > 0)) {
    document.getElementById("incometaxCalculateBtn").disabled=false;
    document.getElementById("downloadPDFBtn").disabled=false;
  }
  else {
    document.getElementById("incometaxCalculateBtn").disabled=true;
    document.getElementById("downloadPDFBtn").disabled=true;
  }
}

function calc() {
  var TI = Number(document.getElementById("totalIncome").value);
  var TIA = Number(document.getElementById("additionalIncomeA").value);
  var TIB = Number(document.getElementById("additionalIncomeB").value);
  var TIC = Number(document.getElementById("additionalIncomeC").value);
  var HRA = Number(document.getElementById("hra").value);
  var CA = Number(document.getElementById("conveyance").value);
  if (TIA <= 10000) {
    var TIA = TIA;
  } else {
    TIA = TIA - 10000;
  }
  var GI = (TI + TIA + TIB + TIC);
  var NI = (GI - HRA - CA);
  var PF = Number(document.getElementById("pf").value);
  var NSC = Number(document.getElementById("nsc").value);
  var PPF = Number(document.getElementById("ppf").value);
  var MF = Number(document.getElementById("mf").value);
  var LIC = Number(document.getElementById("lic").value);
  var HLP = Number(document.getElementById("homeloanPrincipal").value);
  var T80C = (PF + NSC + PPF + MF + LIC + HLP);
  if (T80C <= 150000) {
    var T80C = T80C;
  } else {
    T80C = 150000;
  }
  var MS = Number(document.getElementById("medicalSelf").value);
  var MP = Number(document.getElementById("medicalParents").value);
  var TM = (MS + MP)
  var EL = Number(document.getElementById("education").value);
  var NPS = Number(document.getElementById("nps").value);
  if (NPS <= 50000) {
    var NPS = NPS;
  } else {
    NPS = 50000;
  }
  var HLI = Number(document.getElementById("homeloanInterest").value);
  var DEDUCTIONS = (T80C + TM + EL + NPS + HLI);
  var taxableIncome = (NI - DEDUCTIONS);

  if (taxableIncome < 250000) {
    document.getElementById("totalTax").innerHTML = "Your taxable income is less than 2,50,000 Rupees. No tax payable!";
    return false;
  } else if (taxableIncome >= 250000 && taxableIncome <= 500000) {
    var slab = 5;
    var netTaxpayable = ( taxableIncome - 250000);
    var AT = (( 5 * netTaxpayable ) / 100);
  } else if (taxableIncome >= 500000 && taxableIncome <= 1000000) {
    var slab = 20;
    var netTaxpayable = (taxableIncome - 500000);
    var AT = (20 * netTaxpayable)/ 100 + 12500;
  }
  else if (taxableIncome > 1000000){
    slab = 30;
    netTaxpayable = ( taxableIncome - 500000);
    AT = (( 30 * taxableIncome ) / 100 ) + 100000 + 12500;
  }
  var cess = (3 * AT)/100;
  var totalTax = cess + AT;
  var Rupees = 'Rs.';
  document.getElementById("actualTax").innerHTML = "Income Tax : "+ AT.toFixed(0) + " " + Rupees;
  document.getElementById("cess").innerHTML = "Health and Education Cess : "+ cess.toFixed(0) + " " + Rupees;
  document.getElementById("totalTax").innerHTML = "Total Tax : "+ totalTax.toFixed(0) + " " + Rupees;
  document.getElementById("grossIncomeFinal").innerHTML = "Total Gross Income : "+ GI + " " + Rupees;
  document.getElementById("netIncomeFinal").innerHTML = "Net Income : "+ NI + " " + Rupees;
  document.getElementById("totalDeductions").innerHTML = "Total Deductions : "+ DEDUCTIONS + " " + Rupees;
  document.getElementById("incometax").innerHTML = "Taxable Income : "+ taxableIncome  + " " + Rupees;
  document.getElementById("slab").innerHTML = "Income Tax Slab(%) : "+ slab;
  document.getElementById("savingsAccountInterest").innerHTML = "Taxable Savings Account Interest(if any) : "+ TIA + " " + Rupees;
}

function netIncomeFn() {
  var TI = Number(document.getElementById("totalIncome").value);
  var TIA = Number(document.getElementById("additionalIncomeA").value);
  var TIB = Number(document.getElementById("additionalIncomeB").value);
  var TIC = Number(document.getElementById("additionalIncomeC").value);
  var GI = (TI + TIA + TIB + TIC);
  var HRA = Number(document.getElementById("hra").value);
  var CA = Number(document.getElementById("conveyance").value);
  var NI = (GI - HRA - CA);
  var TA = (HRA + CA);
  var PF = Number(document.getElementById("pf").value);
  var NSC = Number(document.getElementById("nsc").value);
  var PPF = Number(document.getElementById("ppf").value);
  var MF = Number(document.getElementById("mf").value);
  var LIC = Number(document.getElementById("lic").value);
  var HLP = Number(document.getElementById("homeloanPrincipal").value);
  var T80C = (PF + NSC + PPF + MF + LIC + HLP);
  var MS = Number(document.getElementById("medicalSelf").value);
  var MP = Number(document.getElementById("medicalParents").value);
  var TM = (MS + MP)
  var rupee = '<i class="fas fa-rupee-sign"></i>';
  document.getElementById("netIncome").innerHTML = rupee + " " + NI;
  document.getElementById("grossIncome").innerHTML = rupee + " " + GI;
  document.getElementById("totalAllowance").innerHTML = rupee + " " + TA;
  document.getElementById("total80c").innerHTML = rupee + " " + T80C;
  document.getElementById("totalmed").innerHTML = rupee + " " + TM;
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawSavingsChart);
  function drawChart() {
    var TI = Number(document.getElementById("totalIncome").value);
    var TIA = Number(document.getElementById("additionalIncomeA").value);
    var TIB = Number(document.getElementById("additionalIncomeB").value);
    var TIC = Number(document.getElementById("additionalIncomeC").value);
    var data = google.visualization.arrayToDataTable([
      ['Category', 'Amount'],
      ['Total',     TI],
      ['Savings Account',      TIA],
      ['Mutual Funds/NSC',  TIB],
      ['Other', TIC]
    ]);

    var options = {
      width: 325,
      is3D: true,
      position: "right"
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }

  function drawSavingsChart() {
    var PF = Number(document.getElementById("pf").value);
    var NSC = Number(document.getElementById("nsc").value);
    var PPF = Number(document.getElementById("ppf").value);
    var MF = Number(document.getElementById("mf").value);
    var LIC = Number(document.getElementById("lic").value);
    var HLP = Number(document.getElementById("homeloanPrincipal").value);
    var data = google.visualization.arrayToDataTable([
      ['Category', 'Amount'],
      ['Provident Fund',     PF],
      ['Public Provident Fund',     PPF],
      ['NSC',      NSC],
      ['Mutual Funds',  MF],
      ['Life Insurance', LIC],
      ['Home Loan Principal', HLP]
    ]);

    var options = {
      width: 325,
      pieHole: 0.4,
      position: "right",
      animation:{
        startup: true,
        duration: 100,
    },
  };
    var chart = new google.visualization.PieChart(document.getElementById('piechartSavings'));
      chart.draw(data, options);
  }
