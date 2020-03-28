// DOM references
const maleRadio = document.querySelector('#male');
const femaleRadio = document.querySelector('#female');
const activityLevel = document.querySelector('#activity');
const userWeightInput = document.querySelector('#weight-input');
const calculate = document.querySelector('#calculate');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');
 
 // global variables
 let gender;
 let weightInput;
 let level;
 let calorieResult;
 
// reset form fields
 const reset = () => {
   maleRadio.checked = false;
   femaleRadio.checked = false;
   userWeightInput.value = '';
   activityLevel.selectedIndex = 0;
 }

 // clear results display
 const clearResult = () => {
   result.innerHTML = 'Calories Burned';
 }
 
 const calculateCalories = (activity,yourWeight,gender) => {
 let caloriesPerHour;
 
 /* determine reference weight value based on gender pick (Male 175lbs or Female 140lbs)
    if the user picks male form the radio input refWeight will be 175
    if the user picks female from the radio input refWeight will be 140
*/
 refWeight = (gender === 'male') ? 175 : 140;


 // logic to pick from the calories burned per hour chart
 if(activity === "light") {
     caloriesPerHour = (refWeight === 175) ? 300 : 240; 
 } else if(activity === "moderate"){
     caloriesPerHour = (refWeight === 175) ? 460 : 370   
 } else if(activity === "strenuous"){
     caloriesPerHour = (refWeight === 175) ? 730 : 580   
 } else if(activity === "very-strenuous"){
     caloriesPerHour = (refWeight === 175) ? 920 : 740
 }
   return  caloriesPerHour * yourWeight / refWeight  ; 
}

// event listeners
maleRadio.addEventListener('change',(e) => {
 gender = 'male'
})
femaleRadio.addEventListener('change',(e) => {
 gender = 'female'
 
})
userWeightInput.addEventListener('change',(e) => {
  userWeight = e.target.value
})
activityLevel.addEventListener('change',(e) => {
  level = e.target.value
})
calculate.addEventListener('click',(e) => {
   calorieResults = calculateCalories(level,userWeight,gender)
   result.innerHTML = `${Math.round(calorieResults)} Calories!`
   reset(); 
})
clear.addEventListener('click',(e) => {
clearResult()
})



