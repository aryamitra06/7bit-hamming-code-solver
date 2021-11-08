function showingHammingCode(){
    document.getElementById('hamming-value').innerText = document.getElementById('hamming-code').value;
}

function showingDataBit(){
    document.getElementById('d-three').innerText = document.getElementById('hamming-code').value.charAt(4);
    document.getElementById('d-five').innerText = document.getElementById('hamming-code').value.charAt(2);
    document.getElementById('d-six').innerText = document.getElementById('hamming-code').value.charAt(1);
    document.getElementById('d-seven').innerText = document.getElementById('hamming-code').value.charAt(0);
}

function showingParityBit(){
    document.getElementById('p-one').innerText = document.getElementById('hamming-code').value.charAt(6);
    document.getElementById('p-two').innerText = document.getElementById('hamming-code').value.charAt(5);
    document.getElementById('p-four').innerText = document.getElementById('hamming-code').value.charAt(3);
}

function selectParity(){
    const rbs = document.querySelectorAll('input[name="choice"]');
    let selectedValue; //which will show the option
    
    for( const rb of rbs )
    {
        if(rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    
    document.getElementById('parity-type').innerText = selectedValue;
}


function evenPFour(){
    const pFour = parseInt(document.getElementById('p-four').innerText);
    const dFive = parseInt(document.getElementById('d-five').innerText);
    const dSix = parseInt(document.getElementById('d-six').innerText);
    const dSeven = parseInt(document.getElementById('d-seven').innerText);

    const evenPFourAddition = pFour + dFive + dSix + dSeven;

    if(evenPFourAddition%2 === 0){
        document.getElementById('updated-p-four').innerText = "0";
    }
    else{
        document.getElementById('updated-p-four').innerText = "1";
    }
}

function evenPTwo(){
    const pTwo = parseInt(document.getElementById('p-two').innerText);
    const dThree = parseInt(document.getElementById('d-three').innerText);
    const dSix = parseInt(document.getElementById('d-six').innerText);
    const dSeven = parseInt(document.getElementById('d-seven').innerText);

    const evenPFourAddition = pTwo + dThree + dSix + dSeven;

    if(evenPFourAddition%2 === 0){
        document.getElementById('updated-p-two').innerText = "0";
    }
    else{
        document.getElementById('updated-p-two').innerText = "1";
    }
}

function evenPOne(){
    const pOne = parseInt(document.getElementById('p-one').innerText);
    const dThree = parseInt(document.getElementById('d-three').innerText);
    const dFive = parseInt(document.getElementById('d-five').innerText);
    const dSeven = parseInt(document.getElementById('d-seven').innerText);

    const evenPFourAddition = pOne + dThree + dFive + dSeven;

    if(evenPFourAddition%2 === 0){
        document.getElementById('updated-p-one').innerText = "0";
    }
    else{
        document.getElementById('updated-p-one').innerText = "1";
    }
}

function oddPFour(){
    const pFour = parseInt(document.getElementById('p-four').innerText);
    const dFive = parseInt(document.getElementById('d-five').innerText);
    const dSix = parseInt(document.getElementById('d-six').innerText);
    const dSeven = parseInt(document.getElementById('d-seven').innerText);

    const oddPFourAddition = pFour + dFive + dSix + dSeven;

    if(oddPFourAddition%2 !== 0){
        document.getElementById('updated-p-four').innerText = "0";
    }
    else{
        document.getElementById('updated-p-four').innerText = "1";
    }
}

function oddPTwo(){
    const pTwo = parseInt(document.getElementById('p-two').innerText);
    const dThree = parseInt(document.getElementById('d-three').innerText);
    const dSix = parseInt(document.getElementById('d-six').innerText);
    const dSeven = parseInt(document.getElementById('d-seven').innerText);

    const oddPFourAddition = pTwo + dThree + dSix + dSeven;

    if(oddPFourAddition%2 !== 0){
        document.getElementById('updated-p-two').innerText = "0";
    }
    else{
        document.getElementById('updated-p-two').innerText = "1";
    }
}

function oddPOne(){
    const pOne = parseInt(document.getElementById('p-one').innerText);
    const dThree = parseInt(document.getElementById('d-three').innerText);
    const dFive = parseInt(document.getElementById('d-five').innerText);
    const dSeven = parseInt(document.getElementById('d-seven').innerText);

    const oddPFourAddition = pOne + dThree + dFive + dSeven;

    if(oddPFourAddition%2 !== 0){
        document.getElementById('updated-p-one').innerText = "0";
    }
    else{
        document.getElementById('updated-p-one').innerText = "1";
    }
}


function convertToDecimal(){
    const num = document.getElementById('updated-p-four').innerText + document.getElementById('updated-p-two').innerText + document.getElementById('updated-p-one').innerText;
    const decimal = (parseInt(num, 2));
    
    if(decimal===0){
        const errMsg = document.getElementById('error-msg');
        errMsg.innerHTML = `<h1 class="has-text-success">SUCCESS: No error found! </h1>`

    }
    else{
        const errMsg = document.getElementById('error-msg');
        errMsg.innerHTML = `<h1 class= "has-text-danger"> ERROR: There is a error in no. ${decimal} bit! </h1>`    
    }
}

function showCorrection(){

    const one = document.getElementById('hamming-code').value.charAt(0);
    const two = document.getElementById('hamming-code').value.charAt(1);
    const three = document.getElementById('hamming-code').value.charAt(2);
    const four = document.getElementById('hamming-code').value.charAt(3);
    const five = document.getElementById('hamming-code').value.charAt(4);
    const six = document.getElementById('hamming-code').value.charAt(5);
    const seven = document.getElementById('hamming-code').value.charAt(6);



const finalAns = document.getElementById('final-ans');

const num = document.getElementById('updated-p-four').innerText + document.getElementById('updated-p-two').innerText + document.getElementById('updated-p-one').innerText;
const decimal = (parseInt(num, 2));

if(decimal===0){
    finalAns.innerText = "Nothing to change in the given hamming code!"
}
else if(decimal===7){
    if(document.getElementById('hamming-code').value.charAt(0)===0)
        {
            finalAns.innerText = `1 ${two} ${three} ${four} ${five} ${six} ${seven}`
        }
    else
        {
            finalAns.innerText = `0 ${two} ${three} ${four} ${five} ${six} ${seven}`
        }    

        
}

else if(decimal === 6){
    if(document.getElementById('hamming-code').value.charAt(1)===0)
    {
        finalAns.innerText = `${one} 1 ${three} ${four} ${five} ${six} ${seven}`
    }
    else
    {
        finalAns.innerText = `${one} 0 ${three} ${four} ${five} ${six} ${seven}`
    }    
}

else if(decimal === 5){
    if(document.getElementById('hamming-code').value.charAt(2)===0)
    {
        finalAns.innerText = `${one} ${two} 1 ${four} ${five} ${six} ${seven}`
    }
    else
    {
        finalAns.innerText = `${one} ${two} 0 ${four} ${five} ${six} ${seven}`
    }    
}

else if(decimal === 4){
    if(document.getElementById('hamming-code').value.charAt(3)===0)
    {
        finalAns.innerText = `${one} ${two} ${three} 1 ${five} ${six} ${seven}`
    }
    else
    {
        finalAns.innerText = `${one} ${two} ${three} 0 ${five} ${six} ${seven}`
    }    
}

else if(decimal === 3){
    if(document.getElementById('hamming-code').value.charAt(4)===0)
    {
        finalAns.innerText = `${one} ${two} ${three} ${four} 1 ${six} ${seven}`
    }
    else
    {
        finalAns.innerText = `${one} ${two} ${three} ${four} 0 ${six} ${seven}`
    }    
}

else if(decimal === 2){
    if(document.getElementById('hamming-code').value.charAt(5)===0)
    {
        finalAns.innerText = `${one} ${two} ${three} ${four} ${five} 1 ${seven}`
    }
    else
    {
        finalAns.innerText = `${one} ${two} ${three} ${four} ${five} 0 ${seven}`
    }    
}


else if(decimal === 1){
    if(document.getElementById('hamming-code').value.charAt(6)===0)
    {
        finalAns.innerText = `${one} ${two} ${three} ${four} ${five} ${six} 1`
    }
    else
    {
        finalAns.innerText = `${one} ${two} ${three} ${four} ${five} ${six} 0`
    }    
}

}


function solved(){

    const rbs = document.querySelectorAll('input[name="choice"]');
    let selectedValue; //which will show the option
    
    for( const rb of rbs )
    {
        if(rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    //FOR EVEN PARITY
    if(document.getElementById('hamming-code').value!==0 && document.getElementById('hamming-code').value.length === 7 && selectedValue=== 'EVEN' ){
        showingHammingCode();
        selectParity();
        showingDataBit(); 
        showingParityBit(); 
        evenPFour();
        evenPTwo();
        evenPOne();
        convertToDecimal();
        showCorrection();
    }

    //FOR ODD PARITY

    else if(document.getElementById('hamming-code').value!==0 && document.getElementById('hamming-code').value.length === 7 && selectedValue=== 'ODD' ){
        showingHammingCode();
        selectParity();
        showingDataBit(); 
        showingParityBit(); 
        oddPFour();
        oddPTwo();
        oddPOne();
        convertToDecimal();
        showCorrection();
    }
    else{
        alert('Enter the 7 bit hamming code and select the parity type to get started!');
    }
}

