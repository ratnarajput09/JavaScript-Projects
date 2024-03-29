const form = document.querySelector("form")

form.addEventListener('submit' , function(e){
  //submit default action will be prevented here!
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give valid number ${height}`
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML = `Please give valid number ${weight}`
  }else {
    const BMI = (weight / ((height*height)/10000)).toFixed(1)
    //show the result
    results.innerHTML = `<span>${BMI}<span>`
  }
  const BMI = (weight / ((height*height)/10000)).toFixed(1)
  if(BMI <18.6){
    results.innerHTML=`<span>Underweight ${BMI}<span>`;
  }else if (BMI>18.6 && BMI<24.9){
    results.innerHTML = `<span>Normal Range ${BMI}<span>`
  }else {
    results.innerHTML = `<span>Over weight ${BMI} <span>`
  }
});
