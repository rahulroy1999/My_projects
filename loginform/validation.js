function validate(){
    var email = document.getElementById('floatingInput').value
    var pass = document.getElementById('floatingPassword').value

    if(email.trim() == ""){
        document.getElementById('v1').innerHTML = 'Please enter something'
        document.getElementById('v1').style.color = 'red'
        document.getElementById('floatingInput').style.border = '1.5px solid red'
        return false
    }
    if(pass.trim() == ""){
        document.getElementById('v2').innerHTML = 'Please enter somethings'
        document.getElementById('v2').style.color = 'red'
        document.getElementById('floatingPassword').style.border = '1px solid red'
        return false
    }
}
function validate2(){
    let conPass = ''
    let fname = document.getElementById('f1').value
    let lname = document.getElementById('f2').value
    let email = document.getElementById('f3').value
    let pass = document.getElementById('f4').value
    conPass = document.getElementById('Con').value

    if(fname.trim()==''){
        document.getElementById('c1').innerHTML = 'Please fill this field'
        document.getElementById('c1').style.color = 'red'
        document.getElementById('c1').style.fontSize = '14px'
        document.getElementById('f1').style.border = '1px solid red'
        return false
    }
    if(lname.trim()==''){
        document.getElementById('c2').innerHTML = 'Please fill this field'
        document.getElementById('c2').style.color = 'red'
        document.getElementById('c2').style.fontSize = '14px'
        document.getElementById('f2').style.border = '1px solid red'
        return false
    }
    if(email.trim()==''){
        document.getElementById('c3').innerHTML = 'Please fill this field'
        document.getElementById('c3').style.color = 'red'
        document.getElementById('c3').style.fontSize = '14px'
        document.getElementById('f3').style.border = '1px solid red'
        return false
    }
    if(pass.trim()==''){
        document.getElementById('c4').innerHTML = 'Please fill this field'
        document.getElementById('c4').style.color = 'red'
        document.getElementById('c4').style.fontSize = '14px'
        document.getElementById('f4').style.border = '1px solid red'
        return false
    }
    if(pass.length<6){
        document.getElementById('c4').innerHTML = 'Minimum 6 characters required'
        document.getElementById('c4').style.color = 'red'
        document.getElementById('c4').style.fontSize = '14px'
        document.getElementById('f4').style.border = '1px solid red'
        return false
    }
    if(pass.search(/[A-Z]/)==-1){
        document.getElementById('c4').innerHTML = 'Atleast one upercase letter required'
        document.getElementById('c4').style.color = 'red'
        document.getElementById('c4').style.fontSize = '14px'
        document.getElementById('f4').style.border = '1px solid red'
        return false
    }
    if(pass.search(/[0-9]/)==-1){
        document.getElementById('c4').innerHTML = 'Atleast one number required'
        document.getElementById('c4').style.color = 'red'
        document.getElementById('c4').style.fontSize = '14px'
        document.getElementById('f4').style.border = '1px solid red'
        return false
    }
    if(pass.search(/[!\@\#\$\%\&\*]/)==-1){
        document.getElementById('c4').innerHTML = 'Atleast one special character required'
        document.getElementById('c4').style.color = 'red'
        document.getElementById('c4').style.fontSize = '14px'
        document.getElementById('f4').style.border = '1px solid red'
        return false
    }
    if(pass!=conPass){
        document.getElementById('c5').innerHTML = "Password doesn't matched"
        document.getElementById('c5').style.color = 'red'
        document.getElementById('c5').style.fontSize = '14px'
        document.getElementById('Con').style.border = '1px solid red'
        return false
    }

}