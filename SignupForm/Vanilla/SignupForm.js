document.getElementById("confirmPassword").addEventListener("input", function() {
    let createPassword = document.getElementById("createPassword")
    let confirmPassword = document.getElementById("confirmPassword")

    if (createPassword.value === confirmPassword.value) {
        createPassword.style.border = "2px solid var(--color-primary)"
        console.log("password match")
    } else {
        createPassword.style.border = "2px solid var(--color-red)"
        console.log("password no match")
    }
})

let loginFormBtn = document.getElementById("loginForm-btn")
let signupFormBtn = document.getElementById("signupForm-btn")
let loginForm = document.getElementById("loginForm")
let signupForm = document.getElementById("signupForm")

loginFormBtn.addEventListener("click", function() {
    signupForm.style.visibility = "hidden"
    loginForm.style.visibility = "visible"
})

signupFormBtn.addEventListener("click", function() {
    loginForm.style.visibility = "hidden"
    signupForm.style.visibility = "visible"
})