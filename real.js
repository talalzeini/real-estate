$(function () {

$('#properties-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
arrows:false,
responsive: [
{
breakpoint: 1100,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 767,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 530,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
}
}
]
});
});
    
const propertiesSection = document.getElementById('properties');
var selPlan = document.getElementById('plans');
const cards = document.getElementById('cards'); 
const paymentForm = document.getElementById('paymentForm');
const congratsMessage= document.getElementById('congrats');

function buyButton(){
    const selPlans = document.getElementById('plans');
    selPlans.classList.remove('hide');
    propertiesSection.classList.add('hide');
}
function chooseCard(){
    paymentForm.classList.remove('hide');
    cards.classList.add('hide');
}
function closeButton(){
    paymentForm.classList.add('hide');
    cards.classList.add('hide');
    congratsMessage.classList.add('hide');
    propertiesSection.classList.remove('hide');
}
function payNow(){
// if one of the inputs is empty
if(document.getElementById('cardholder').value.trim().length == 0 || document.getElementById('cardnumber').value.trim().length < 19 || document.getElementById('cvc').value.trim().length < 3  || document.getElementById('expire').value.trim().length < 7){
    window.alert('You must fill out this form properly.');
    return;
    }
// if card holder input is a number
if(!(isNaN(document.getElementById('cardholder').value))){
    window.alert('The cards holder name is not valid.');
    return;
}
paymentForm.classList.add('hide');
congratsMessage.classList.remove('hide');
}


