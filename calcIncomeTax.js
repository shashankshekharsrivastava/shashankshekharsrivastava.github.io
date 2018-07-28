function calc() {
  var TI = Number(document.getElementById("totalIncome").value);
  var TIA = Number(document.getElementById("additionalIncomeA").value);
  var TIB = Number(document.getElementById("additionalIncomeB").value);
  var TIC = Number(document.getElementById("additionalIncomeC").value);
  var HRA = Number(document.getElementById("hra").value);
  var CA = Number(document.getElementById("conveyance").value);
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
  document.getElementById("actualTax").innerHTML = "Income Tax : "+ AT;
  document.getElementById("cess").innerHTML = "Health and Education Cess : "+ cess.toFixed(0);
  document.getElementById("totalTax").innerHTML = "Total Tax : "+ totalTax;
  document.getElementById("grossIncomeFinal").innerHTML = "Total Gross Income : "+ GI;
  document.getElementById("netIncomeFinal").innerHTML = "Net Income : "+ NI;
  document.getElementById("totalDeductions").innerHTML = "Total Deductions : "+ DEDUCTIONS;
  document.getElementById("incometax").innerHTML = "Taxable Income : "+ taxableIncome;
  document.getElementById("slab").innerHTML = "Income Tax Slab(%) : "+ slab;
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

  document.getElementById("netIncome").innerHTML = NI;
  document.getElementById("grossIncome").innerHTML = GI;
  document.getElementById("totalAllowance").innerHTML = TA;
  document.getElementById("total80c").innerHTML = T80C;
  document.getElementById("totalmed").innerHTML = TM;
}

function toWords() {
  var P = Number(document.getElementById("principal").value);
  var N = Number(document.getElementById("duration").value*12);
  var principalAmount = numberToWords.toWords(P);
  var months = numberToWords.toWords(N);
  document.getElementById("principalAmountInput").innerHTML = "The total loan amount chosen is... " + principalAmount;
  document.getElementById("durationInMonths").innerHTML = "The duration in months is... " + months;
}
