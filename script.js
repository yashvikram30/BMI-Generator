document.querySelector("#bmi-form").addEventListener('submit',submitFunction,false);
//document.querySelector("#submitButton").addEventListener('click',submitFunction,false);

function submitFunction(e){
    //this will prevent the HTML from submitting and refreshing, therefore our result will be permanently there, instead of disappearing
    e.preventDefault();
    // height and weight
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;

    if(h.length==0 || w.length==0 || h<=0 || w<=0){
        alert("Please ensure that the details are correct")
        return;
    }

    let personBMI = (w * 100 * 100)/ (h * h);
    personBMI = personBMI.toFixed(2);
    let result =document.querySelector("#result");

    result.innerHTML=`Your BMI is ${personBMI}`

    let category;

    if(personBMI<=18.5) category='Underweight';
    else if(personBMI<=24.9)    category='Healthy';
    else category='Overweight';

    result.innerHTML+=`<br>${category}`

};