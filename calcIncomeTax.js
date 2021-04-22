function enableCalcBtn() {
  if (Number(document.getElementById("totalIncome").value.length > 0)) {
    document.getElementById("incometaxCalculateBtn").disabled = false;
    document.getElementById("downloadPDFBtn").disabled = false;
  }
  else {
    document.getElementById("incometaxCalculateBtn").disabled = true;
    document.getElementById("downloadPDFBtn").disabled = true;
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
    var netTaxpayable = (taxableIncome - 250000);
    var actualTax = ((5 * netTaxpayable) / 100);
  } else if (taxableIncome >= 500000 && taxableIncome <= 1000000) {
    var slab = 20;
    var netTaxpayable = (taxableIncome - 500000);
    var actualTax = (20 * netTaxpayable) / 100 + 12500;
  }
  else if (taxableIncome > 1000000) {
    slab = 30;
    netTaxpayable = (taxableIncome - 500000);
    actualTax = ((30 * netTaxpayable) / 100) + 100000 + 12500;
  }
  var cess = (3 * actualTax) / 100;
  var totalTax = cess + actualTax;
  var Rupees = 'Rs.';
  document.getElementById("actualTax").innerHTML = "Income Tax : " + actualTax.toFixed(0) + " " + Rupees;
  document.getElementById("cess").innerHTML = "Health and Education Cess : " + cess.toFixed(0) + " " + Rupees;
  document.getElementById("totalTax").innerHTML = "Total Tax : " + totalTax.toFixed(0) + " " + Rupees;
  document.getElementById("grossIncomeFinal").innerHTML = "Total Gross Income : " + grossIncome + " " + Rupees;
  document.getElementById("netIncomeFinal").innerHTML = "Net Income : " + netIncome + " " + Rupees;
  document.getElementById("totalDeductions").innerHTML = "Total Deductions : " + deductions + " " + Rupees;
  document.getElementById("incometax").innerHTML = "Taxable Income : " + taxableIncome + " " + Rupees;
  document.getElementById("slab").innerHTML = "Income Tax Slab(%) : " + slab;
  document.getElementById("savingsAccountInterest").innerHTML = "Taxable Savings Account Interest(if any) : " + additionalIncomeA + " " + Rupees;
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

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawSavingsChart);
google.charts.setOnLoadCallback(drawInvestmentChart);

function drawChart() {
  var totalIncome = Number(document.getElementById("totalIncome").value);
  var additionalIncomeA = Number(document.getElementById("additionalIncomeA").value);
  var additionalIncomeB = Number(document.getElementById("additionalIncomeB").value);
  var additionalIncomeC = Number(document.getElementById("additionalIncomeC").value);
  // get chart canvas
  var ctx = document.getElementById("piechart");
  // create the chart using the chart canvas
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Total Salary', 'Savings Account Interest', 'Mutual Funds/NSC', 'Other'],
      datasets: [{
        label: 'Rupees',
        data: [totalIncome, additionalIncomeA, additionalIncomeB, additionalIncomeC],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", 'rgb(66, 244, 167)']
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Income Breakup'
      }
    }
  });
}

function drawSavingsChart() {
  var providentFund = Number(document.getElementById("pf").value);
  var nationalSavingScheme = Number(document.getElementById("nsc").value);
  var publicProvidentFund = Number(document.getElementById("ppf").value);
  var mutualFunds = Number(document.getElementById("mf").value);
  var lifeInsurance = Number(document.getElementById("lic").value);
  var homeloanPrincipal = Number(document.getElementById("homeloanPrincipal").value);
  var chartData = {
    labels: ['Provident Fund', 'Public Provident Fund', 'NSC', 'Mutual Funds', 'Life Insurance Policies'],
    datasets: [{
      label: 'Rupees',
      data: [providentFund, publicProvidentFund, nationalSavingScheme, mutualFunds, lifeInsurance],
      spanGaps: false,
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", 'rgb(66, 244, 167)', 'rgb(157, 65, 244)']
    }]
  }
  // get chart canvas
  var ctx = document.getElementById("piechartSavings");
  // create the chart using the chart canvas
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: {
      title: {
        display: true,
        text: 'Section 80C Breakup'
      }
    }
  });
}

function drawInvestmentChart() {
  var nationalSavingScheme = Number(document.getElementById("nsc").value);
  var publicProvidentFund = Number(document.getElementById("ppf").value);
  var mutualFunds = Number(document.getElementById("mf").value);
  var lifeInsurance = Number(document.getElementById("lic").value);
  var nationalPensionScheme = Number(document.getElementById("nps").value);
  var ctx = document.getElementById('barchartInvestments');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['NPS', 'PPF', 'NSC', 'MF', 'Life Insurance'],
      datasets: [{
        label: 'Rupees',
        data: [nationalPensionScheme, publicProvidentFund, nationalSavingScheme, mutualFunds, lifeInsurance],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function totalIncomeInWordsFn() {
  var totalIncomeInWords = numberToWords.toWords(Number(document.getElementById("totalIncome").value));
  document.getElementById("totalIncomeInWords").innerHTML = totalIncomeInWords;
}

function additionalIncomeAFn() {
  var totalIncomeInWords = numberToWords.toWords(Number(document.getElementById("additionalIncomeA").value));
  document.getElementById("additionalIncomeAInWords").innerHTML = totalIncomeInWords;
}

function additionalIncomeBFn() {
  var totalIncomeInWords = numberToWords.toWords(Number(document.getElementById("additionalIncomeB").value));
  document.getElementById("additionalIncomeBInWords").innerHTML = totalIncomeInWords;
}

function additionalIncomeCFn() {
  var totalIncomeInWords = numberToWords.toWords(Number(document.getElementById("additionalIncomeC").value));
  document.getElementById("additionalIncomeCInWords").innerHTML = totalIncomeInWords;
}
