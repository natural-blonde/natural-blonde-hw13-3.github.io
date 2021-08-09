let getID = id => document.getElementById(id);
let passRegExp = /^[a-zA-Z]{2,20}$/;

getID('firstName').oninput = function(){
  let firstName = passRegExp.test(this.value);
  if(firstName){
      this.style.backgroundImage = `url("images/galochka-green.png")`;
      this.style.backgroundSize = '20px 20px';
      this.style.borderColor = 'green';
      this.style.borderStyle = 'solid';
      this.style.borderWidth = '3px';
      this.style.backgroundRepeat = 'no-repeat';
      this.style.backgroundPositionX = 'right';
      this.style.backgroundPositionY = 'center';
      document.querySelector(".firstAttention").hidden = true;
  }
  else{
    this.style.backgroundImage = `url("images/cross-red.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".firstAttention").hidden = false;
    this.style.borderWidth = '5px';
    this.style.borderColor = 'blue';
    this.style.borderStyle = 'solid';
  }
}

getID('lastName').oninput = function(){
  let lastName = passRegExp.test(this.value);
  if(lastName){
      this.style.backgroundImage = `url("images/galochka-green.png")`;
      this.style.borderColor = 'green';
      this.style.borderStyle = 'solid';
      this.style.borderWidth = '3px';
      this.style.backgroundSize = '20px 20px';
      this.style.backgroundRepeat = 'no-repeat';
      this.style.backgroundPositionX = 'right';
      this.style.backgroundPositionY = 'center';
      document.querySelector(".lastAttention").hidden = true;
  }
  else{
    this.style.backgroundImage = `url("images/cross-red.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".lastAttention").hidden = false;
    this.style.borderWidth = '5px';
    this.style.borderColor = 'blue';
    this.style.borderStyle = 'solid';
  }
}

let email = /^[a-z0-9\-.]+@[a-z]+\.[a-z]+$/;
getID('email').oninput = function(){
  let passEmail = email.test(this.value);
  if(passEmail){
      this.style.backgroundImage = `url("images/galochka-green.png")`;
      this.style.borderColor = 'green';
      this.style.borderStyle = 'solid';
      this.style.borderWidth = '3px';
      this.style.backgroundSize = '20px 20px';
      this.style.backgroundRepeat = 'no-repeat';
      this.style.backgroundPositionX = 'right';
      this.style.backgroundPositionY = 'center';
      document.querySelector(".email").hidden = true;
  }
  else{
    this.style.backgroundImage = `url("images/cross-red.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".email").hidden = false;
    this.style.borderWidth = '5px';
    this.style.borderColor = 'blue';
    this.style.borderStyle = 'solid';
  }
}

let password = /^\w{8,15}$/;
getID('password').oninput = function(){
  let passPassword = password.test(this.value);
  if(passPassword){
      this.style.backgroundImage = `url("images/galochka-green.png")`;
      this.style.borderColor = 'green';
      this.style.borderStyle = 'solid';
      this.style.borderWidth = '3px';
      this.style.backgroundSize = '20px 20px';
      this.style.backgroundRepeat = 'no-repeat';
      this.style.backgroundPositionX = 'right';
      this.style.backgroundPositionY = 'center';
      document.querySelector(".password").hidden = true;
  }
  else{
    this.style.backgroundImage = `url("images/cross-red.png")`;
    this.style.backgroundSize = '20px 20px';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundPositionX = 'right';
    this.style.backgroundPositionY = 'center';
    document.querySelector(".password").hidden = false;
    this.style.borderWidth = '5px';
    this.style.borderColor = 'blue';
    this.style.borderStyle = 'solid';
  }
}

let testFirst;
let testLast;
let testEmail;
let testPassword;
getID('firstName').onchange = function(){
  testFirst = passRegExp.test(getID('firstName').value);
  console.log(testFirst);
  let testAgree = getID("agree");
  let testSignUp = getID("signUp");
  if(testFirst && testLast && testEmail && testPassword){
    testAgree.disabled = false;
    console.log('welcome');
      if(testAgree.disabled == false){
        testAgree.onclick = function() {
          testSignUp.disabled = false;
        }
      }
  }
  else if(testFirst || testLast || testEmail || testPassword){
    testAgree.disabled = true;
    console.log('something wrong');
      if(testAgree.disabled == true){
        testSignUp.disabled = true;
      }
  }
}
getID('lastName').onchange = function(){
  testLast = passRegExp.test(getID('lastName').value);
  console.log(testLast);
  let testAgree = getID("agree");
  let testSignUp = getID("signUp");
  if(testFirst && testLast && testEmail && testPassword){
    testAgree.disabled = false;
    console.log('welcome');
      if(testAgree.disabled == false){
        testAgree.onclick = function() {
          testSignUp.disabled = false;
        }
      }
  }
  else if(testFirst || testLast || testEmail || testPassword){
    testAgree.disabled = true;
    console.log('something wrong');
      if(testAgree.disabled == true){
        testSignUp.disabled = true;
      }
  }
}
getID('email').onchange = function(){
  testEmail = email.test(getID('email').value);
  console.log(testEmail);
  let testAgree = getID("agree");
  let testSignUp = getID("signUp");
  if(testFirst && testLast && testEmail && testPassword){
    testAgree.disabled = false;
    console.log('welcome');
      if(testAgree.disabled == false){
        testAgree.onclick = function() {
          testSignUp.disabled = false;
        }
      }
  }
  else if(testFirst || testLast || testEmail || testPassword){
    testAgree.disabled = true;
    console.log('something wrong');
      if(testAgree.disabled == true){
        testSignUp.disabled = true;
      }
  }
}

getID('password').onchange = function(){
  testPassword = password.test(getID('password').value);
  let testAgree = getID("agree");
  let testSignUp = getID("signUp");
  console.log(testPassword);
  if(testFirst && testLast && testEmail && testPassword){
    testAgree.disabled = false;
    console.log('welcome');
      if(testAgree.disabled == false){
        testAgree.onclick = function() {
          testSignUp.disabled = false;
        }
      }
  }
  else if(testFirst || testLast || testEmail || testPassword){
    testAgree.disabled = true;
    console.log('something wrong');
      if(testAgree.disabled == true){
        testSignUp.disabled = true;
      }
  }
}

getID("signUp").onclick = function(){
  this.style.backgroundColor = 'rgb(16, 16, 177)';
  document.querySelector(".grey").hidden = false;
}

getID('startExploring').onclick = function(){
  this.style.backgroundColor = 'rgb(197, 133, 13)';
  window.location.reload();
}