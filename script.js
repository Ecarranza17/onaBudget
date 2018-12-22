
// function that will take the input do the calculations and display results
function unitsTotal() {

    budget = parseFloat(document.getElementById('budget').value);
    realBudget = parseFloat(document.getElementById('budget').value);
    pricePerPackage = parseFloat(document.getElementById('pricePerPackage').value);
    unitsPerPackage = parseFloat(document.getElementById('unitsPerPackage').value);
    tax = parseFloat(document.getElementById('tax').value);

    // calculates sum of tax amount and price per package
    let priceWithTax = (pricePerPackage) + (pricePerPackage * (tax/100));

    // outputs the amount of packages you can buy with the given budget
    let packages = Math.trunc(budget/priceWithTax);

    // gives the number of units you can buy with the given budget
    let sumOfUnits = packages * unitsPerPackage;

    //Outputs result for  max amount packages and sum of units that can be bought with budget
    document.getElementById('packages').innerHTML= packages;
    document.getElementById('sumOfUnits').innerHTML= sumOfUnits;

    // for loop keeps subtracting priceWithTax(price per package + tax) from the budget
    for ( budget ; budget >= priceWithTax; budget-=priceWithTax) {
        let a = budget;


        // inside every loop variable a is subtracted from priceWithTax
        a-=priceWithTax;

        // if variavle a becomes less priceWithTax then look at next comment
        if ( a < priceWithTax ) {

          //the total amount that is going to be paid is calculated from the difference of the realBudget(original budget) and a(left over of budget in the loops)
          let totalAmount = realBudget - a;

            //Outputs the amount Paid for the packages plus tax
            document.getElementById('amountPaid').innerHTML = `$${totalAmount.toFixed(2)}`;
            }
        }

}

// Will clear all the data from input and output elements
function refresh() {

  //the getElementsByClassName method returns an array-like object that will be saved to variable 'data'
  let data = document.getElementsByClassName('reset');

  //the for loops will loop the array in 'data', as long as 'i' is less than length of array,
  for (let i=0; i < data.length; i++) {

    //the if statement will be executed, when the elements contain text,
    if (data[i].type = 'text') {

      // this will clear all text in input,
      data[i].value = '';

      // and also clear text in divs elements that contain results.
      data[i].innerHTML = '';

    }
 }

}
