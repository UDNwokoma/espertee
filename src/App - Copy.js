import axios from "axios";
import React, {useState,useRef,useEffect} from 'react'
//import reactlogo from './logo.svg';
import './App.css';

import { v4 as uuidv4 } from 'uuid';


import Push,{maxpos} from './push.js';

import logo from './assets/main.png';
import home from './assets/boxicons-2.1.2/svg/regular/bx-home-circle.svg';
import layout from './assets/boxicons-2.1.2/svg/regular/bx-layout.svg';
import Settings from './assets/boxicons-2.1.2/svg/regular/bx-dock-top.svg';
import Tasks from './assets/boxicons-2.1.2/svg/regular/bx-cube-alt.svg';
import Referrer from './assets/boxicons-2.1.2/svg/regular/bx-collection.svg';
import Withdraw from './assets/boxicons-2.1.2/svg/regular/bx-copy.svg';
import Logout from './assets/boxicons-2.1.2/svg/regular/bx-log-out.svg';
import Report from './assets/boxicons-2.1.2/svg/regular/bx-detail.svg';
import support from './assets/boxicons-2.1.2/svg/regular/bx-support.svg';
import loginh from './assets/boxicons-2.1.2/svg/regular/bx-line-chart.svg';
import v_right from './assets/boxicons-2.1.2/svg/regular/bx-chevron-right.svg';
import v_leeft from './assets/boxicons-2.1.2/svg/regular/bx-chevron-left.svg';
import user from './assets/boxicons-2.1.2/svg/regular/bx-user.svg';
import set from './assets/boxicons-2.1.2/svg/regular/bx-cog.svg';
import gen from './assets/boxicons-2.1.2/svg/regular/bx-coin-stack.svg';
import good from './assets/good.jpg';

function App() {


const [box, setbox] = useState(1)
const [ba, setba] = useState(1)
const [opt1, setopt1] = useState(1)
//const [RAW, setRAW] = useState()

const [dashscreen, setdashscreen] = useState(1)
//const [winheight, setwinheight] = useState()
//const [winwidth, setwinwidth] = useState()
const [sideP, setsideP] = useState("slide-startic")
const [loxi, setloxi] = useState("logoption1")

const [u, setu] = useState('')
const [p, setp] = useState('')
const [p2, setp2] = useState('')

const [couponlist, setcouponlist] = useState([])


const [email, setemail] = useState("")
const [accountname, setaccountname] = useState("")
const [password2, setpassword2] = useState("")
const [password, setpassword] = useState("")
const [coupon, setcoupon] = useState("a")
const [refferal, setrefferal] = useState("a")

const [notex, setnotex] = useState("")
const [genmap, setgenmap] = useState([{"coupon":uuidv4(),"value":"value","email":"admin@controller"}])
const [amount, setamount] = useState([])
const [Temp, setTemp] = useState()
const toff = useRef()
const [money, setmoney] = useState([])
const [mainlaccount, setmainlaccount] = useState([])

function track(i) {
  const myg = i[0].b
 // const myg = i.find(i=> i.amount).amount
  return(myg)
}

function trace(i,b) {
  const myg = i[0].b
  return(myg)
}




const js = [  {
  "balance": "$1,972.80",
  "picture": "http://placehold.it/32x32",
  "age": 28,
  "name": "Marsh Mccall",
  "gender": "male",
  "company": "ULTRIMAX",
  "email": "marshmccall@ultrimax.com"
},{
  "balance": "$1,972.47",
  "picture": "http://placehold.it/32x32",
  "age": 28,
  "name": "Marsh Mccall",
  "gender": "male",
  "company": "ULTRIMAX",
  "email": "marshmccall@ultrimax.com"
}
]

 function cheksub(i){
  if( parseInt(money.map(i=> i.deposit))=== parseInt(i)){return("Aready Subscribed")}else{return("Subscribe")}
}

useEffect(() => {

  // onKeyUp={e=> kPress(e)}

  function kPress(e) {
    if (e.key === "Enter") {}
  }

})


function reg() {

  axios.post("http://localhost:5000/account/find",{"accountname":accountname})
  .then(function (res){ if(JSON.stringify(res.data)===("[]")){

  axios.post("http://localhost:5000/coupon/find",{"coupon":coupon})
  .then(function (res){
    if(JSON.stringify(res.data)===("[]")){setnotex("Invalid Coupon")}else{

      inter(res.data[0].value);
      Completereg();


     // setnotex("Check Internet Connection")
/*  ATTENTION 5G ONLY */
}})
  .catch(function (error) { setnotex("Check Internet Connection") });

}else{setnotex("username already exists")} })

}


function inter(i) {

  
 setmoney([{"accountname":accountname,"deposit":i,"balance":"0","withdrawal":"0","pending":"0","refferal":"0","totalweed":"0","totalDeposit":"0"}])
    axios.post("http://localhost:5000/amount/add",{"accountname":accountname,"deposit":i,"balance":"0","withdrawal":"0","pending":"0","refferal":"0","totalweed":"0","totalDeposit":"0"})
    .then(function (res){ })
    .catch(function (error) { });


  }
function Completereg() {
       setmainlaccount([{"accountname":accountname,"email":email,"password":password,"refferal":"refferal","profileID":uuidv4()}]);
      axios.post("http://localhost:5000/account/add",{"accountname":accountname,"email":email,"password":password,"refferal":"refferal","profileID":uuidv4()})
      .then(function (res){
        
        if(res){axios.post("http://localhost:5000/coupon/del",{"coupon":coupon});setba(2)
        .then(function (res){ alert("done")})
        .catch(function (error) { alert("error"); })}

      })
      //.catch(function (error) { alert(JSON.stringify()) });

    
}



function singnin() {

 axios.post("http://localhost:5000/amount/find",{"accountname":u})
 .then(function (res){ setmoney(res.data) })
 .catch(function (error) { alert(error); });
 
 axios.post("http://localhost:5000/account/find",{"accountname":u})
 .then(function (res){if(JSON.stringify(res.data)===("[]")){setnotex("Invalid usename or password")}else{
   if(p === res.data[0].password){setba(2)}else{setnotex("Invalid password")}
  //if(res.data===("[]")){setnotex("Invalid usename or password")}
  setmainlaccount(res.data)} })
 .catch(function (error) {});

    }
    
function sub(v) {
 if((parseInt(v)) > (parseInt(money[0].deposit) )){setnotex("Insuficent found")}else{
  axios.post("http://localhost:5000/amount/up",{"accountname":"noweed"
  //  "accountname":trace(money,"accountname"),"deposit":trace(money,"deposit"),"balance":trace(money,"balance"),"withdrawal":trace(money,"withdrawal"),
  //  "pending":trace(money,"pending"),"refferal":trace(money,"refferal"),"totalweed":trace(money,"totalweed"),"totalDeposit":trace(money,"totalDeposit")
  })
  .then(function (res){ alert(JSON.stringify(res.data))})
  .catch(function (error) { alert(error); });
 }
}
    
/*
  axios.post("http://localhost:5000/product/find",{"productID":Bit1})
  .then(function(axiosTestResult){
    if (axiosTestResult) {
      //setproductsE1(axiosTestResult.data)
      setFsds1(axiosTestResult.data.find(c=>c.productID == Bit1))
    }})
}
*/

function sb1(a){if(box===a){return({display:'block'})}else{return({display:'none'})}}

function sbA(a){if(ba===a){return({display:'block'})}else{return({display:'none'})}}
function DS(a){if(dashscreen===a){return({display:'block'})}else{return({display:'none'})}}

function lab(a){if(opt1===a){return("slide_item")}else{return('slide_item2')}}
function lab2(a){if(opt1===a){return("sl_name")}else{return("sl_name2")}}
function lab3(a){if(opt1===a){return("svgimg")}else{return("svgimg1")}}
function sls(){if(sideP==='slide-in'||'slide-startic'){setsideP('slide-out')}else{setsideP('slide-in')}  }
function loxikey() {if(loxi==='logoption'){setloxi('logoption1')}else{setloxi('logoption')} }
function susu(a){ if(dashscreen===a){return("subel1")}else{return("subel2")}}

function signin(){}

function skipchild(e) {
  if(e.nativeEvent) {
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopPropagation();
  }else
  e.preventDefault();
  e.stopPropagation();
}

function Dispose(){
  if(sideP==='slide-out'){setsideP('slide-in')}
  setloxi('logoption1')
}

function runme(a) {
  setopt1(a);setdashscreen(a)
  if(a===3){loxikey()}
}

window.addEventListener('resize', function() {
  //setwinheight(document.documentElement.clientHeight);
  //setwinwidth(document.documentElement.clientWidth)
  //const dh = document.documentElement.clientHeight
  const dw = document.documentElement.clientHeight
  if(dw < 700){setsideP('slide-startic')}else{setsideP('slide-in')}
}, true);

function dsname(a) {
  if (1 === dashscreen) {return("Dashboard")  }
  if (2 === dashscreen) {return("Plans")  }
  if (3 === dashscreen) {return("Account Settings")  }
  if (5 === dashscreen) {return("My Referrer")  }
  if (6 === dashscreen) {return("Withdraw Now")  }
  if (7 === dashscreen) {return("Report / Log")  }
  if (8 === dashscreen) {return("Support")  }
  if (9 === dashscreen) {return("Login History")  }
  if (10 === dashscreen) {return("Logout")  }
  if (11 === dashscreen) {return("Task")  }
  if (12 === dashscreen) {return("Done task")  }
  if (15 === dashscreen) {return("Generate coupon")  }
}

function dynlicon(a) {
  if (1 === dashscreen) {return(home)  }
  if (2 === dashscreen) {return(layout)  }
  if (11 === dashscreen) {return(Tasks)  }
  if (12 === dashscreen) {return(Tasks)  }
  if (3 === dashscreen) {return(Settings)  }
  if (5 === dashscreen) {return(Settings)  }
  if (6 === dashscreen) {return(Referrer)  }
  if (7 === dashscreen) {return(Report)  }
  if (8 === dashscreen) {return(Withdraw)  }
  if (9 === dashscreen) {return(support)  }
  if (15 === dashscreen) {return(gen)  }
}


function autogen(v) {
  const temp = [genmap]
  const func = document.getElementById("mmmm")
  const dg = document.getElementById("donegen")
  if(amount.length>1){

  const next = {"coupon":uuidv4(),"value":amount,"email":"admin@controller"}
  setgenmap([...genmap,next])
  setTimeout(() => {
  if(genmap.length<99){func.click()}else{dg.click()}
 }, 10);

}else{setamount(v); setTimeout(() => {func.click()}, 100); }
}

function validator(a) {
if(u.length<6){ setnotex("Username must be upto six characters")}else
if(p.length<6){setnotex("Password must be upto six characters")}else{singnin()}
}


function validatorb(a) {
  if(accountname.length<6){ setnotex("Username must be upto six characters")}else
  //if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)===true){setnotex("Invalid e-mail")}else
  if(accountname.length<6){setnotex("Password must be upto six characters")}else
  if(password2.length<6){setnotex("Password must be upto six characters")}else
  if(password!==password2){setnotex("Password does not match")}else{reg()}

 // if(u.length<6){setnotex("Code does not exist")}else
 // if(u.length<6){setnotex("Referrer username not found")}else{}
  }


function note() {
if(notex.length<1){return({display:"none"})}
setTimeout(() => {
  setnotex("")
}, 4000);
}
const M = JSON.stringify(genmap)



  return (
    
<div>
  
  <div id="tempdiplay" >{}</div>
<div id hidden="hidden" ref={toff} onClick={e=> inter()} ></div>
<div id="regcom" onClick={e=> Completereg()} ></div>
<div id="donegen" onClick={e=> maxpos(genmap,setcouponlist)} ></div>
<div id="mmmm" onClick={e=>autogen()} hidden="hidden"  >button</div>

<div id='notify' style={note()} ><div style={{margin:'10px' }}  >{notex}</div> </div>
  
<center>
<div id="stretch" style={sbA(1)} >
  

<div id="screenbox" style={sb1(1)} >
<div id="boxtitle">
  <div id='space1' style={{height:"1px"}} ></div>
  <div style={{height:'70px'}} ><img id='unimage' src={logo} alt='img'  /></div>
</div>

<div id="ah0">Welcome to Epartee! 👋</div>
<div id="ah1">Please sign-in to your account To Get started   </div>

<div id="inputline" >
    <div id="tex" >Username</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='Enter Username' onChange={e=> setu(e.target.value)} />
  </div>
</div>

<div id='space1' style={{height:'10px'}} ></div>


<div id="inputline" >
    <div id="tex" >Password</div>    <div id="fl" ><div id='unitex' style={{cursor: "pointer"}} onClick={e=> setbox(3)}  ><span id="link" >Forgot Password?</span> </div></div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='*******'  type='accountname' onChange={e=> setp(e.target.value)} />
  </div>
</div>


<div id='space1' style={{height:'10px'}} ></div>

<div id='remem' > <input id="chekinput" type="checkbox" /> <span id ="well" >Remember Me</span></div>

<div style={{width:'100%',marginTop:'50px'}} ><div id='unibtt' style={{width:'80%',height:"20px"}} > <div style={{cursor: "pointer"}} onClick={e=> singnin()} >Sign In</div> </div></div>


<div id='space1' style={{height:'30px'}} ></div>

<div id='ah1' >New  to our platform? <span id='link'  style={{cursor: "pointer"}} onClick={e=> setbox(2)} >Create an account</span> </div>

<div id='space1' style={{height:'30px'}} ></div>

</div>  





<div id="screenbox" style={sb1(2)} >
<div id="boxtitle">
  <div id='space1' style={{height:"20px"}} ></div>
  <div style={{height:'70px'}} ><img id='unimage' src={logo} alt='img'  /></div>
</div>

<div id="ah0">Welcome to Epartee! 👋</div>
<div id="ah1">Please create account to Get started   </div>

  <div id="plumdiv" >
<center>
<div id="inputline" >
    <div id="tex" >Username</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='Enter Username' onChange={e=> setaccountname(e.target.value)} />
  </div>
</div>

<div id="inputline" >
    <div id="tex" >Email</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='Enter Your Email' onChange={e=> setemail(e.target.value)} />
  </div>
</div>


<div id="inputline" >
    <div id="tex" >First Name</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='First Name' onChange={e=> setaccountname(e.target.value)} />
  </div>
</div>

<div id="inputline" >
    <div id="tex" >Last Name</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='Last Name' onChange={e=> setaccountname(e.target.value)} />
  </div>
</div>


<div id="inputline" >
    <div id="tex" >Password</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='******'  type='password'  onChange={e=> setpassword(e.target.value)} />
  </div>
</div>

<div id="inputline" >
    <div id="tex" >Confirm Password</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='*******' type='password'  onChange={e=> setpassword2(e.target.value)} />
  </div>
</div>

<div id="inputline" >
    <div id="tex" >Referrer</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='' onChange={e=> setrefferal(e.target.value)} />
  </div>
</div>





<div id="inputline" >
    <div id="tex" >Coupon code</div> 
  <div id ="unimputbody" >
    <input id="dinput" placeholder='Enter Coupon code' onChange={e=> setcoupon(e.target.value)} />
  </div>
</div>

</center>
</div>

<div id='space1' style={{height:'10px'}} ></div>

<div id='remem' > <input id="chekinput" type="checkbox" /> <span id ="well" >I agree to privacy policy & terms</span></div>

<div onClick={e=> validatorb()} style={{width:'100%',marginTop:'50px'}} ><div id='unibtt' style={{width:'80%',height:"20px"}} > <div style={{cursor: "pointer"}}>Sign up</div> </div></div>


<div id='space1' style={{height:'30px'}} ></div>

<div id='ah1' >Already have an account ? <span id='link'  style={{cursor: "pointer"}} onClick={e=> setbox(1)}  >Sign in instead</span> </div>
<div id='space1' style={{height:'20px'}} ></div>
<div id='ah1' >Dont have a Coupon code  ? <span id='link'  style={{cursor: "pointer"}} >Get yours Now</span> </div>

<div id='space1' style={{height:'30px'}} ></div>

</div>  






<div id="screenbox" style={sb1(3)} >
<div id="boxtitle">
  <div id='space1' style={{height:"20px"}} ></div>
  <div style={{height:'70px'}} ><img id='unimage' src={logo} alt='img' /></div>
</div>

<div id="ah0">Forgot Password? 🔒</div>
<div id="ah1">Enter your email and we'll send you instructions to reset your accountname  </div>

<div id="inputline" >
    <div id="tex" >Email</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='Enter Your Email' />
  </div>
</div>



<div id='space1' style={{height:'10px'}} ></div>




<div style={{width:'100%',marginTop:'50px'}} ><div id='unibtt' style={{width:'80%',height:"20px"}} > <div style={{cursor: "pointer"}}>Submit</div> </div></div>


<div id='space1' style={{height:'30px'}} ></div>

<div id='ah1' >Already have an account ? <span id='link'  style={{cursor: "pointer"}} onClick={e=> setbox(1)}  > Back to login</span> </div>

<div id='space1' style={{height:'30px'}} ></div>

</div>  


<div id="float" onClick={e=> setba(2)} ></div>


</div>

<div style={sbA(2)}   >

  <div id='fillscreen' onClick={e=> Dispose()}>


<div id="userbar" onClick={e=> skipchild(e)} >
  <div id='baric' ><img id='svgimg' height='23px' src={dynlicon()} alt='img'  /></div>
  <div id="dashname" >{dsname()}</div>
  <div id='usbaRicon' onClick={e=> sls()} ><img src={v_right} id='svgimg' style={{height:"35px",marginTop:'-0px',marginLeft:'-5px'}} alt='img'  /></div>
  <div id='usn' >{mainlaccount.map(i=> i.accountname)}</div>
   <div id='profileico' onClick={e=> loxikey()} ><div id='bt_icon' style={{marginTop:"3px",height:"fit-content"}} > 
   <img src={user} id="svgimg" alt='img' style={{marginTop:"6px",marginRight:"3px",height:"30px"}} /> </div></div> </div>


   <div id={loxi} >
     <div id='loghead' ><div id="usico" ><img src={user} id="svgimg" alt='img' style={{marginTop:"13px",marginRight:"4px",height:"30px"}} /></div> </div>
     <div id="logop" onClick={e=> runme(3)} ><div id='bt_icon'> <img src={user} id={lab3(1)} alt='img' /> </div><div id='logtex' >My Profile</div> </div>
     <div id="logop" ><div id='bt_icon'> <img src={set} id={lab3(1)} alt='img' /> </div><div id='logtex' >Password</div> </div>
     <div id="logop" ><div id='bt_icon'> <img src={Logout} id={lab3(1)} alt='img' /> </div><div id='logtex' >Log Out</div> </div>
   </div>

   <div id="dashbody" style={DS(1)} >


   <div id='cardpink'style={{backgroundColor:"lightgreen" }} >
  <div id='cardhead'>{money.map(i=> i.balance)}</div>
  <div id='cardmini' >Total Clicks</div>
  <div id='cardbod' >Veiw All</div>
</div>
   <div id='cardpink'style={{backgroundColor:"#8c46e0" }} >
  <div id='cardhead'>8</div>
  <div id='cardmini' >Reamining Clicks for the day</div>
  <div id='cardbod' >Veiw Alls</div>
</div>
<div id='cardpink' style={{backgroundColor:"#1b1168" }} >
  <div id='cardhead'>8</div>
  <div id='cardmini' >Today's Clicks</div>
  <div id='cardbod' >Veiw All</div></div>

  <div id='cardpink'style={{backgroundColor:"#3397b8" }} >
  <div id='cardhead'>8</div>
  <div id='cardmini' >Next Remainder</div>
  <div id='cardbod' >Veiw All</div>
</div>

<div id='cardpink'style={{backgroundColor:"#dea459" }} >
  <div id='cardhead'>{money.map(i=> i.balance)}</div>
  <div id='cardmini' >Current Balance</div>
  <div id='cardbod' >Veiw All</div>
</div>

<div id='cardpink'style={{backgroundColor:"#dc5745" }} >
  <div id='cardhead'>₦{money.map(i=> i.deposit)}</div>
  <div id='cardmini' >Total invest</div>
  <div id='cardbod' >Veiw All</div>
</div>

<div id='cardpink'style={{backgroundColor:"#2e98cc" }} >
  <div id='cardhead'>{money.map(i=> i.withdrawal)}</div>
  <div id='cardmini' >Complete Withdrawal</div>
  <div id='cardbod' >Veiw All</div>
</div>

<div id='cardpink'style={{backgroundColor:"#a81ab5" }} >
  <div id='cardhead'>{money.map(i=> i.pending)}</div>
  <div id='cardmini' >Pending Withdrawal</div>
  <div id='cardbod' >Veiw All</div>
</div>

<div id='cardpink'style={{backgroundColor:"#1b1168" }} >
  <div id='cardhead'>{money.map(i=> i.balance)}</div>
  <div id='cardmini' >Reject Withdrawal</div>
  <div id='cardbod' >Veiw All</div>
</div>

<div id='cardpink'style={{backgroundColor:"lightgreen" }} >
  <div id='cardhead'>{money.map(i=> i.refferal)}</div>
  <div id='cardmini' >Total Refferal commision</div>
  <div id='cardbod' >Veiw All</div>
</div>

   </div>


   <div id="dashbody" style={DS(2)} >

     <div style={{display:"inline-block" }} >

<div id='planbox' >
  <div id='planhead' >Economy</div>
  <div id="amount" >N<span id="sling">=</span>3000 </div>
  <div id="spacer" style={{height:"130px"}} ></div>
  <div>
  <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referrer Commission: ₦ 1000</div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

  <div id="plaxbot" onClick={e=> sub("3000") }><div id='gazel'  >{cheksub("3000")}</div></div>
  </div>
</div>


<div id='planbox' >
       <div id='planhead' >Standard</div>
       <div id="amount" >N<span id="sling">=</span>5000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 1200</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("5000") }><div id='gazel'  >{cheksub("5000")}</div></div>
       </div>
     </div>


     <div id='planbox' >
       <div id='planhead' >Elite</div>
       <div id="amount" >N<span id="sling">=</span>10000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 2000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("10000") } ><div id='gazel' >{cheksub("10000")}</div></div>
       </div>
     </div>


     <div id='planbox' >
       <div id='planhead' >Deluxe</div>
       <div id="amount" >N<span id="sling">=</span>20000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 3000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("20000") }><div id='gazel'  >{cheksub("20000")}</div></div>
       </div>
     </div>


     <div id='planbox' >
       <div id='planhead' >Gold</div>
       <div id="amount" >N<span id="sling">=</span>50000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 5000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot"  onClick={e=> sub("50000") }><div id='gazel' >{cheksub("50000")}</div></div>
       </div>
     </div>

     </div>

   </div>


<div id="dashbody" style={DS(5)} >

<div id="Refbox" >
 Referrer Link
<div id="referall" >  <div>https://www.youtube.com/results?search_query=laravel+routing</div>
<div  id='Bex'><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}} ></div>Copy Link</div>
</div></div> 

<div id="tab" >
<div id="tabody" >
<table id="customers">
   <tr>
   <th>Username</th>
   <th>Name</th>
   <th>Email</th>
   <th>Join Date</th>
   </tr>
  <tr>
    <td><tr>Item</tr></td>
    <td><tr>Item</tr></td>
    <td><tr>Item</tr></td>
    <td><tr>Item  </tr></td>
  </tr>
       </table>
</div>
</div>

</div>






<div id="dashbody" style={DS(3)} >

<div id='poax' >

<div id='setpro' >
  <div id="proicon" ></div>
  <div style={{height:'20px'}}   ></div>

  <div id="dike"><div style={{float:"left",paddingLeft:"10px"}} >Name</div> <div style={{float:"left",paddingLeft:"10px"}}  >how are you</div> </div>
  <div id="dike"><div style={{float:"left",paddingLeft:"10px"}} >Name</div> <div style={{float:"left",paddingLeft:"10px"}}  >how are you</div> </div>
  <div id="dike"><div style={{float:"left",paddingLeft:"10px"}} >Name</div> <div style={{float:"left",paddingLeft:"10px"}}  >how are you</div> </div>
     </div>

<div id='prochinwi' >
Name
  <div id='inpul' >
    <center>
    <div id='withall' >
      <div id='idiv'  style={{fontSize:'13px'}} >First Name</div>
      <div><input type='text' placeholder='Cureent Value'  id='ifw'  /></div></div>
    
    <div id='withall' >
      <div id='idiv'  style={{fontSize:'13px'}} >Last Name</div>
      <div><input type='text' placeholder='Cureent Value'id='ifw'  /></div></div>
    
    <div id='withall' >
      <div id='idiv'  style={{fontSize:'13px'}} >E-mail</div>
      <div><input type='text' placeholder='Cureent Value'id='ifw'  /></div></div>
    
    <div id='withall' >
      <div id='idiv'  style={{fontSize:'13px'}} >Mobile Number</div>
      <div><input type='text' placeholder='Cureent Value'id='ifw'  /></div></div>
    
      <div id='idiv'  style={{fontSize:'13px'}} >Payment Methods</div>
    <div id='withallfullwhidth' >
      <div id='idiv'  style={{fontSize:'13px'}} >Bank Details</div>
      <div><input type='text' placeholder='Account Name 'id='ifwfullwidth'  /></div>
      <div><input type='text' placeholder='Account Number 'id='ifwfullwidth'  /></div>
      <div><input type='text' placeholder='Bank Name 'id='ifwfullwidth'  /></div></div>

      
    <div id='withallfullwhidth' >
      <div id='idiv'  style={{fontSize:'13px'}} >USDT</div>
      <div><input type='text' placeholder='Enter Usdt Trc-20 Address' id='ifwfullwidth'  /></div></div>

<div hidden="hidden">
      <div id="widthcon"  >
      <div id='withallmini' >
      <div id='idiv'  style={{fontSize:'13px'}} >City</div>
      <div><input type='text' placeholder='Value'  id='ifw'  /></div>  </div>
      
      <div id='withallmini' >
        <div id='idiv'  style={{fontSize:'13px'}} >State</div>
        <div><input type='text' placeholder='Value'  id='ifw'  /></div>  </div>
      </div>

      <div id="widthcon" >
      <div id='withallmini' >
        <div id='idiv'  style={{fontSize:'13px'}} >Zip/postal</div>
        <div><input type='text' placeholder='Value'  id='ifw'  /></div>  </div>
      
      <div id='withallmini' >
        <div id='idiv'  style={{fontSize:'13px'}} >Country</div>
        <div><input type='text' placeholder='Value'  id='ifw'  /></div>  </div>
</div>

</div>
<div id='mulpose' ><div id='B'><img id="svgimg" src={Withdraw} style={{height:'18px',marginTop:'1px'}} alt='img' /><div style={{width:'10px'}} ></div>Submit</div></div>

    </center>
    
  </div>
</div>
</div>
</div>


<div id="dashbody" style={DS(15)} >



<div id="tab" >
  <div id='gen' onClick={e=> skipchild(e)} >
    
<div  id='Bex' onClick={e=> autogen("3000")} ><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}}  ></div>Generate 3000</div>
<div  id='Bex'  onClick={e=> autogen("5000")}><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}}></div>Generate 5000</div>
<div  id='Bex'  onClick={e=> autogen("10000")}><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}} ></div>Generate 10000</div>
<div  id='Bex'  onClick={e=> autogen("20000")}><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}} ></div>Generate 20000</div>
<div  id='Bex'  onClick={e=> autogen("50000")}><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}} ></div>Generate 50000</div>
  </div>
<div id="tabody" >
<table id="customers">
   <tr>
   <th>Coupon code</th>
   <th>Value</th>
   
   <th>Check Validity</th>
   </tr>
  <tr>
    <td>{couponlist.map(i=>  <tr>{i.coupon}</tr>)}</td>
    <td>{couponlist.map(i=>  <tr>{i.value}</tr>)}</td>
    <td>{couponlist.map(i=>  <tr>{i.email}</tr>)}</td>
    </tr>
       </table>
</div>
</div>

</div>


<div id="dashbody" style={DS(11)} >

<div id="tab" >
<div id="tabody" >
<table id="customers">
   <tr>
   <th>Username</th>
   <th>Name</th>
   <th>Email</th>
   <th>Join Date</th>
   </tr>
  <tr>
    <td><tr>Item</tr></td>
    <td><tr>Item</tr></td>
    <td><tr>Item</tr></td>
    <td><tr>Item  </tr></td>
  </tr>
       </table>
</div>
</div>

</div>


<div id="dashbody" style={DS(12)} >


<div id="tab" >
<div id="tabody" >
<table id="customers">
<tr>
<th>Username</th>
<th>Name</th>
<th>Email</th>
<th>Join Date</th>
</tr>
<tr>
 <td><tr>Item</tr></td>
 <td><tr>Item</tr></td>
 <td><tr>Item</tr></td>
 <td><tr>Item  </tr></td>
</tr>
    </table>
</div>
</div>

</div>


   <div id="dashbody" style={DS(7)} >


   <div id="tab" >
<div id="tabody" >
<table id="customers">
   <tr>
   <th>Date</th>
   <th>Transaction</th>
   <th>Amount</th>
   <th>Charge</th>
   <th>Detail</th>
   </tr>
  <tr>
    <td><tr>Item</tr></td>
    <td><tr>Item</tr></td>
    <td><tr>Item</tr></td>
    <td><tr>Item</tr></td>
    <td><tr>Item</tr></td>
  </tr>
       </table>
</div>
</div>

</div>


<div id="dashbody" style={DS(9)} >


<div id="tab" >
<div id="tabody" >
<table id="customers">
<tr>
<th>Date</th>
<th>E-mail</th>
<th>Email</th>
<th>Join Date</th>
</tr>
<tr>
 <td><tr>Item</tr></td>
 <td><tr>Item</tr></td>
 <td><tr>Item</tr></td>
 <td><tr>Item  </tr></td>
</tr>
    </table>
</div>
</div>

</div>

<div id="dashbody" style={DS(8)} >


<div id="tab" >
<div id="tabody" >
<table id="customers">
<tr>
<th>Subject</th>
<th>Status</th>
<th>Last Reply</th>
<th>Action</th>
</tr>
<tr>
 <td><tr>Item</tr></td>
 <td><tr>Item</tr></td>
 <td><tr>Item</tr></td>
 <td><tr>Item  </tr></td>
</tr>
    </table>
</div>
</div>

</div>


<div id="dashbody" style={DS(6)} >



<div id='planbox'style={{height:"430px"}} >
  <div id='planhead' style={{color:'grey',fontSize:'23px'}} >Wallet Africa</div>
  <div id='planhead' style={{color:'grey',fontSize:'17px'}} >Eligibility Scope</div>
  <div id="amount" style={{fontSize:'35px'}} >N<span style={{marginLeft:'-25px'}}>=</span>5000<span style={{fontSize:'22px'}}  >+</span> </div>
  <div id="spacer"  style={{height:"70px"}} ></div>
  <div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
  <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Charge N<span style={{marginLeft:'-8px'}} >=</span> 500 </div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Processing time 24H</div>

  <div id="plaxbot" style={{color:'#501860'}} ><div id='gazel' >Withdraw Now</div></div>
  </div>
</div>

</div>

<div id={sideP} onClick={e=> skipchild(e)} >
<div  id='slider' >

  <div id="hid" > <div id='slideback' onClick={e=> setsideP('slide-in')} ><img src={v_leeft} id='svgimg' alt='img' style={{height:"40px"}}  /></div></div>

    <div id="boxtitle"> 
      <div id='space1' style={{height:"20px"}} ></div>
      <div style={{height:'70px',float:'left',paddingLeft:'20px'}} ><img id='unimage' src={logo} alt='img'  /></div>
    </div>
    
    <div id={lab(1)} onClick={e=> runme(1)} >
      <div id='bt_icon'> <img src={home} id={lab3(1)} alt='img' /> </div> <div id={lab2(1)}>Dashboard</div>
    </div>
    
    <div id={lab(2)} onClick={e=> runme(2)} >
      <div id='bt_icon'> <img src={layout} id={lab3(2)} alt='img'  /> </div> <div id={lab2(2)}>Plans</div>
    </div>

    <div id={lab(11)} onClick={e=> runme(11)} >
      <div id='bt_icon'> <img src={Tasks} id={lab3(11)} alt='img'  /> </div> <div id={lab2(11)}>Tasks</div>
    </div>

    <div id={susu(11)} >
      <div id='elel'  onClick={e=>runme(11)} >Task</div>
      <div id='elel' onClick={e=>runme(12)}>Done task</div>
    </div>
    
    <div id={lab(3)} onClick={e=> runme(3)} >
      <div id='bt_icon'> <img src={Settings} id={lab3(3)} alt='img'  /> </div> <div id={lab2(3)}>Account Settings</div>
    </div>
    
    
    <div id={lab(5)} onClick={e=> runme(5)} >
      <div id='bt_icon'> <img src={Referrer} id={lab3(5)} alt='img'  /> </div> <div id={lab2(5)}>My Referrer</div>
    </div>
    
    <div id={lab(6)} onClick={e=> runme(6)} >
      <div id='bt_icon'> <img src={Withdraw} id={lab3(6)} alt='img'  /> </div> <div id={lab2(6)}>Withdraw Now</div>
    </div>
    
    
    <div id={lab(7)} onClick={e=> runme(7)} >
      <div id='bt_icon'> <img src={Report} id={lab3(7)} alt='img'  /> </div> <div id={lab2(7)}>Report / Log</div>
    </div>
    
    <div id={lab(8)} onClick={e=> runme(8)} >
      <div id='bt_icon'> <img src={support} id={lab3(8)} alt='img'  /> </div> <div id={lab2(8)}>Support</div>
    </div>
    
    <div id={lab(9)} onClick={e=> runme(9)} >
      <div id='bt_icon'> <img src={loginh} id={lab3(9)} alt='img'  /> </div> <div id={lab2(9)}>Login History</div>
    </div>
    <div id={lab(15)} onClick={e=> runme(15)} >
      <div id='bt_icon'> <img src={gen} id={lab3(9)} alt='img'  /> </div> <div id={lab2(15)}>Generate coupon</div>
    </div>
    
    <div id="slide_item2"  >
      <div id='bt_icon'> <img src={Logout} alt='img' id='svgimg' /> </div> <div id='sl_name2' >Logout</div>
    </div>
    
      </div>
</div>
</div>

</div>


</center>
  
</div>

  );
}

export default App;
