document.getElementById('login-toggle-btn').addEventListener('click',function(){
    document.getElementById('login-toggle-btn').classList.add('active')
    document.getElementById('register-toggle-btn').classList.remove('active');
    document.getElementById('login-form').style.display='block';
    document.getElementById('register-form').style.display='none';
})

document.getElementById('register-toggle-btn').addEventListener('click',function(){
    document.getElementById('register-toggle-btn').classList.add('active');
    document.getElementById('login-toggle-btn').classList.remove('active');
    document.getElementById('register-form').style.display='block';
    document.getElementById('login-form').style.display='none';
})


//new user register


let register=document.getElementById('register');
register.addEventListener('submit',async function(e){
e.preventDefault()
let username=document.getElementById('username').value;
let usermail=document.getElementById('usermail').value;
let password=document.getElementById('password').value;
let reenterpassword=document.getElementById('reenterpassword').value;
let checkbox=document.getElementById('checkbox').checked;
if(password===reenterpassword){
    if(username===""||usermail==""||password==""||reenterpassword==""){
        alert("Please enter all credentials");
    }else{
        if(checkbox){
            let doctorobj={username,usermail,password,reenterpassword,"doctor":"doctor"}
            let res=await fetch(`http://localhost:8080/doctor`,{
                method:"POST",
                body:JSON.stringify(doctorobj),
                headers:{"Content-Type": "application/json"},
    
            })
            let newDoctor=await res.json();
            console.log(newDoctor);
        }else{
            let normaluser={username,usermail,password,reenterpassword,"normaluser":"normaluser"}
            // console.log(normaluser)
            let res=await fetch(`http://localhost:8080/users`,{
                method:"POST",
                body:JSON.stringify(normaluser),
                headers:{"Content-Type": "application/json"},
    
            })
            let newUser=await res.json();
            console.log(newUser);
        }
    }
}else{
    alert("Passwords do not match")
}

// console.log(usermail,username)

})


let login=document.getElementById("login");
login.addEventListener('submit',async function(e){
    e.preventDefault();
    
let usermail=document.getElementById('loginmail').value;
let password=document.getElementById('loginpass').value;
if(usermail===""||password===""){
    alert("Please enter your email and password")
}else{
    let res =await fetch(`http://localhost:8080/doctor`)
res=await res.json();
console.log(res)
res.map((e)=>
console.log(e)
// {if(e.usermail===usermail||e.password===password){
//    return alert("Login successful")
// }else{
//  return   alert("Login failed Please enter write credentials")
// }}
)

}
})