let numberSum
function add(a, b) {
    sum = a+b
    numberSum = sum
    return sum
}

function isEven() {
    if(numberSum %2 === 0) return true
    else return false
}
  
function greet(name) {
    alert(`Welcome to the club ${name}`)
}

function isAnAdult(age) {
    if(age<18) return false
    else if(isNaN(age)) alert("Enter an integer next time!") 
    else return true
    
}

function yearsToAdulthood(age) {
    if(age<18) yearsToBecomeAdult = 18-age
    return yearsToBecomeAdult
}
  
function admit(user) {
    if(isAnAdult(user.age)){
        greet(user.name)
        return `${user.name} entered the club`
    }else {
        alert(`Come back after ${yearsToAdulthood(user.age)} years ${user.name}.\n\n You are too young to enter the night-club!!!!`)
        return `${user.name} is too young to enter the club`
    }
      
}

nameOfUser = prompt("Enter your name below: \n")
ageOfUser = Number(prompt("Enter your current age below: \n"))
const user={
      name: nameOfUser, 
      age: ageOfUser
    }

  admit(user)