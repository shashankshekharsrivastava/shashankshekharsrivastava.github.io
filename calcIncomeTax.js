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
  var totalIncome = Number(document.getElementById("totalIncome").value);
  var additionalIncomeA = Number(document.getElementById("additionalIncomeA").value);
  var additionalIncomeB = Number(document.getElementById("additionalIncomeB").value);
  var additionalIncomeC = Number(document.getElementById("additionalIncomeC").value);
  var houseRentAllowance = Number(document.getElementById("hra").value);
  var conveyanceAllowance = Number(document.getElementById("conveyance").value);
  var standardDeduction = Number(document.getElementById("standard-deduction").value);
  if (additionalIncomeA <= 10000) {
    var additionalIncomeA = additionalIncomeA;
  } else {
    additionalIncomeA = additionalIncomeA - 10000;
  }
  var grossIncome = (totalIncome + additionalIncomeA + additionalIncomeB + additionalIncomeC);
  var netIncome = (grossIncome - houseRentAllowance - conveyanceAllowance - standardDeduction);
  var providentFund = Number(document.getElementById("pf").value);
  var nationalSavingScheme = Number(document.getElementById("nsc").value);
  var publicProvidentFund = Number(document.getElementById("ppf").value);
  var mutualFunds = Number(document.getElementById("mf").value);
  var lifeInsurance = Number(document.getElementById("lic").value);
  var homeloanPrincipal = Number(document.getElementById("homeloanPrincipal").value);
  var section80C = (providentFund + nationalSavingScheme + publicProvidentFund + mutualFunds + lifeInsurance + homeloanPrincipal);
  if (section80C <= 150000) {
    var section80C = section80C;
  } else {
    section80C = 150000;
  }
  var medicalInsurancePremiumSelf = Number(document.getElementById("medicalSelf").value);
  var medicalInsurancePremiumParents = Number(document.getElementById("medicalParents").value);
  var totalMedicalInsurancePremium = (medicalInsurancePremiumSelf + medicalInsurancePremiumParents)
  var educationLoanInterest = Number(document.getElementById("education").value);
  var nationalPensionScheme = Number(document.getElementById("nps").value);
  if (nationalPensionScheme <= 50000) {
    var nationalPensionScheme = nationalPensionScheme;
  } else {
    nationalPensionScheme = 50000;
  }
  var homeLoanInterest = Number(document.getElementById("homeloanInterest").value);
  var deductions = (section80C + totalMedicalInsurancePremium + educationLoanInterest + nationalPensionScheme + homeLoanInterest);
  var taxableIncome = (netIncome - deductions);

  if (taxableIncome < 250000) {
    document.getElementById("totalTax").innerHTML = "Your taxable income is less than 2,50,000 Rupees. No tax payable!";
    return false;
  } else if (taxableIncome >= 250000 && taxableIncome <= 500000) {
    var slab = 5;
    var netTaxpayable = ( taxableIncome - 250000);
    var actualTax = (( 5 * netTaxpayable ) / 100);
  } else if (taxableIncome >= 500000 && taxableIncome <= 1000000) {
    var slab = 20;
    var netTaxpayable = (taxableIncome - 500000);
    var actualTax = (20 * netTaxpayable)/ 100 + 12500;
  }
  else if (taxableIncome > 1000000){
    slab = 30;
    netTaxpayable = ( taxableIncome - 500000);
    actualTax = (( 30 * taxableIncome ) / 100 ) + 100000 + 12500;
  }
  var cess = (3 * actualTax)/100;
  var totalTax = cess + actualTax;
  var Rupees = 'Rs.';
  document.getElementById("actualTax").innerHTML = "Income Tax : "+ actualTax.toFixed(0) + " " + Rupees;
  document.getElementById("cess").innerHTML = "Health and Education Cess : "+ cess.toFixed(0) + " " + Rupees;
  document.getElementById("totalTax").innerHTML = "Total Tax : "+ totalTax.toFixed(0) + " " + Rupees;
  document.getElementById("grossIncomeFinal").innerHTML = "Total Gross Income : "+ grossIncome + " " + Rupees;
  document.getElementById("netIncomeFinal").innerHTML = "Net Income : "+ netIncome + " " + Rupees;
  document.getElementById("totalDeductions").innerHTML = "Total Deductions : "+ deductions + " " + Rupees;
  document.getElementById("incometax").innerHTML = "Taxable Income : "+ taxableIncome  + " " + Rupees;
  document.getElementById("slab").innerHTML = "Income Tax Slab(%) : "+ slab;
  document.getElementById("savingsAccountInterest").innerHTML = "Taxable Savings Account Interest(if any) : "+ additionalIncomeA + " " + Rupees;
}

function netIncomeFn() {
  var totalIncome = Number(document.getElementById("totalIncome").value);
  var additionalIncomeA = Number(document.getElementById("additionalIncomeA").value);
  var additionalIncomeB = Number(document.getElementById("additionalIncomeB").value);
  var additionalIncomeC = Number(document.getElementById("additionalIncomeC").value);
  var grossIncome = (totalIncome + additionalIncomeA + additionalIncomeB + additionalIncomeC);
  var houseRentAllowance = Number(document.getElementById("hra").value);
  var conveyanceAllowance = Number(document.getElementById("conveyance").value);
  var standardDeduction = Number(document.getElementById("standard-deduction").value);
  var netIncome = (grossIncome - houseRentAllowance - conveyanceAllowance - standardDeduction);
  var totalAllowance = (houseRentAllowance + conveyanceAllowance);
  var providentFund = Number(document.getElementById("pf").value);
  var nationalSavingScheme = Number(document.getElementById("nsc").value);
  var publicProvidentFund = Number(document.getElementById("ppf").value);
  var mutualFunds = Number(document.getElementById("mf").value);
  var lifeInsurance = Number(document.getElementById("lic").value);
  var homeloanPrincipal = Number(document.getElementById("homeloanPrincipal").value);
  var section80C = (providentFund + nationalSavingScheme + publicProvidentFund + mutualFunds + lifeInsurance + homeloanPrincipal);
  var medicalInsurancePremiumSelf = Number(document.getElementById("medicalSelf").value);
  var medicalInsurancePremiumParents = Number(document.getElementById("medicalParents").value);
  var totalMedicalInsurancePremium = (medicalInsurancePremiumSelf + medicalInsurancePremiumParents)
  var rupeeFAIcon = '<i class="fas fa-rupee-sign"></i>';
  document.getElementById("netIncome").innerHTML = rupeeFAIcon + " " + netIncome;
  document.getElementById("grossIncome").innerHTML = rupeeFAIcon + " " + grossIncome;
  document.getElementById("totalAllowance").innerHTML = rupeeFAIcon + " " + totalAllowance;
  document.getElementById("total80c").innerHTML = rupeeFAIcon + " " + section80C;
  document.getElementById("totalmed").innerHTML = rupeeFAIcon + " " + totalMedicalInsurancePremium;
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawSavingsChart);
google.charts.setOnLoadCallback(drawInvestmentChart);

function drawChart() {
  var totalIncome = Number(document.getElementById("totalIncome").value);
  var additionalIncomeA = Number(document.getElementById("additionalIncomeA").value);
  var additionalIncomeB = Number(document.getElementById("additionalIncomeB").value);
  var additionalIncomeC = Number(document.getElementById("additionalIncomeC").value);
  var data = google.visualization.arrayToDataTable([
    ['Category', 'Amount'],
    ['Total',     totalIncome],
    ['Savings Account Interest',      additionalIncomeA],
    ['Mutual Funds/NSC',  additionalIncomeB],
    ['Other', additionalIncomeC]
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
  var providentFund = Number(document.getElementById("pf").value);
  var nationalSavingScheme = Number(document.getElementById("nsc").value);
  var publicProvidentFund = Number(document.getElementById("ppf").value);
  var mutualFunds = Number(document.getElementById("mf").value);
  var lifeInsurance = Number(document.getElementById("lic").value);
  var homeloanPrincipal = Number(document.getElementById("homeloanPrincipal").value);
  var data = google.visualization.arrayToDataTable([
    ['Category', 'Amount'],
    ['Provident Fund',     providentFund],
    ['Public Provident Fund',     publicProvidentFund],
    ['NSC',      nationalSavingScheme],
    ['Mutual Funds',  mutualFunds],
    ['Life Insurance', lifeInsurance],
    ['Home Loan Principal', homeloanPrincipal]
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

function drawInvestmentChart() {
  var nationalSavingScheme = Number(document.getElementById("nsc").value);
  var publicProvidentFund = Number(document.getElementById("ppf").value);
  var mutualFunds = Number(document.getElementById("mf").value);
  var lifeInsurance = Number(document.getElementById("lic").value);
  var nationalPensionScheme = Number(document.getElementById("nps").value);
  var data = google.visualization.arrayToDataTable([
    ['Category', 'Amount(Rs)'],
    ['NPS',     nationalSavingScheme],
    ['PPF',     publicProvidentFund],
    ['NSC',      nationalSavingScheme],
    ['MF',  mutualFunds],
    ['Life Insurance', lifeInsurance]
  ]);

  var options = {
    width: 350,
    legend: "bottom",
    title: "Breakup Summary",
    animation:{
      startup: true,
      duration: 1500,
    },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('piechartInvestments'));
  chart.draw(data, options);
}
