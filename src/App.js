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
import task from './assets/boxicons-2.1.2/svg/regular/bx-notepad.svg';
import user from './assets/boxicons-2.1.2/svg/regular/bx-user.svg';
import set from './assets/boxicons-2.1.2/svg/regular/bx-cog.svg';
import gen from './assets/boxicons-2.1.2/svg/regular/bx-menu.svg';
import bxm from './assets/boxicons-2.1.2/svg/regular/bx-menu.svg';
import withsl from './assets/boxicons-2.1.2/svg/regular/bx-money.svg';
import gcuoupon from './assets/boxicons-2.1.2/svg/regular/bx-scan.svg';
import loading from './assets/Ripple-1s-200px.svg';
import cori from './assets/280245.jpg';
import good from './assets/good.jpg';

function App() {
  

const [box, setbox] = useState(1)
const [ba, setba] = useState(1)
const [opt1, setopt1] = useState(1)
//const [RAW, setRAW] = useState()
const [type, settype] = useState(1)
const [dashscreen, setdashscreen] = useState(1)
//const [winheight, setwinheight] = useState()
//const [winwidth, setwinwidth] = useState()
const [sideP, setsideP] = useState("slidestartic")
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
const [firstname, setfirstname] = useState("a")
const [lastname, setlastname] = useState("a")
const [refferal, setrefferal] = useState("a")

const [notex, setnotex] = useState("")
const [genmap, setgenmap] = useState([{"coupon":uuidv4(),"value":"value","email":"admin@controller"}])
const [amount, setamount] = useState([])
const [rate, setrate] = useState()
const [bonus, setbonus] = useState()
const [Temp, setTemp] = useState()
const toff = useRef()

const [money, setmoney] = useState([{}])
const [mainlaccount, setmainlaccount] = useState([{}])
const [slidable, setslidable] = useState("slide-in")
const [alertx, setalertx] = useState("")
const [allaccount, setallaccount] = useState([{}])
const [screenote, setscreenote] = useState([{}])
const [allreport, setallreport] = useState([{}])

const [xaccountname, xsaccountname] = useState("")
const [xemail, xsemail] = useState("")
const [xfirstname, xsfirstname] = useState("")
const [xlastname, xslastname] = useState("")
const [xpassword, xspassword] = useState("")
const [xaccountnum, xsaccountnum] = useState("")
const [xbankname, xsbankname] = useState("")
const [xphone, xsphone] = useState("")
const [xusdt, xsusdt] = useState("")
const [xid, xsid] = useState("")
const [refid, setrefid] = useState("")
const [ssl, setssl] = useState("si")

const [art, setart] = useState(0)
const [iDS, setiDS] = useState(0)
const [epass, setepass] = useState("")
const [starticuuid, setstarticuuid] = useState("")
const [Task, setTask] = useState([{}])
const [t1, sett1] = useState("")
const [t2, sett2] = useState("")

const [report, setreport] = useState("")
const [notification, setnotification] = useState("")
const [balance, setbalance] = useState()
const [anouncement, setanouncement] = useState("")

const Ru = useRef("")
const Rp = useRef("")

const mainlaccountRam = mainlaccount

//document.location.hash = 'lookAtMeNow';
//window.history.pushState("object or string", "Title", "/new-url")
//window.history.replaceState("object or string", "Title", "/new-url")


//window.onbeforeunload = function(){
//  return 'Are you sure you want to leave?';
//};

useEffect(() => {

  // onKeyUp={e=> kPress(e)}

})

//window.onunload = function() { alert('Bye.');}
//window.history.forward();
//        function noBack() {
//            window.history.forward();

//window.addEventListener("hashchange", function() { /*prelogout()*/ alert("sddksdj")})
 
const sin = {
  marginLeft:"-50px",
}
const sout = {
  marginLeft:"auto",
}

window.addEventListener('resize', function() {
  const dw = document.documentElement.clientWidth
}, true);

function msl() {
window.addEventListener('resize', function(){return (document.documentElement.clientHeight)} )

  //if(dw > 700){return("autoslide-o")}else{return("autoslide-i")}
}

function slidfunc() {
  if(ssl==="si"){setssl("so")}else{setssl("si")}
}

async function suuid() {
  const mit = document.getElementById("stcl")
  setstarticuuid(uuidv4())
  setTimeout(() => { mit.click() }, 500);
}function staticid(){if(starticuuid===""){suuid()}else{return(starticuuid)}  }

  function kPress(e) {
    if (e.key === "Enter") {cheksign(e)}
  }

function track(i) {
  const myg = i[0].b
 // const myg = i.find(i=> i.amount).amount
  return(myg)
}

function trace(i,b) {
  const myg = i[0].b
  return(myg)
}

function copyText() {
 //const node = document.getElementById('grabdata');
 //const text  = node.textContent || node.innerText;
 //setnotex("Link copied");
 //navigator.clipboard.writeText(text);
 navigator.clipboard.writeText(mainlaccount[0].id);
}

function displayBuilder(i){
<table id="customers">
   <tr>
   <th>accountname</th>
   <th>conde</th>
   
   <th></th>
   </tr>
  <tr>
    <td>{couponlist.map(i=>  <tr>{i.coupon}</tr>)}</td>
    <td>{couponlist.map(i=>  <tr>{i.value}</tr>)}</td>
    <td>{couponlist.map(i=>  <tr>{i.email}</tr>)}</td>
    </tr>
       </table>
}


const js = [  {
  "balance": "100",
  "picture": "http://placehold.it/32x32",
  "age": 28,
  "name": "Marsh Mccall",
  "gender": "male",
  "company": "ULTRIMAX",
  "email": "marshmccall@ultrimax.com"
},{
  "balance": "12",
  "picture": "http://placehold.it/32x32",
  "age": 28,
  "name": "Marsh Mccall",
  "gender": "male",
  "company": "ULTRIMAX",
  "email": "marshmccall@ultrimax.com"
},{
  "balance": "47",
  "picture": "http://placehold.it/32x32",
  "age": 28,
  "name": "Marsh Mccall",
  "gender": "male",
  "company": "ULTRIMAX",
  "email": "marshmccall@ultrimax.com"
},{
  "balance": "90",
  "picture": "http://placehold.it/32x32",
  "age": 28,
  "name": "Marsh Mccall",
  "gender": "male",
  "company": "ULTRIMAX",
  "email": "marshmccall@ultrimax.com"
}
]

function noart(params) {
  setart(0)
}

function prelogout() {
  setart(1)
}
function logoout() {
  setba(1);setart(0)
}


function ckepass(params) {
  if(epass===mainlaccount[0].password){setiDS(1)}else{setnotex("incorrect password")}
}

function filpro(i,a) {
  const fileram = mainlaccount
  if(i===1)if(a==="") {return( fileram[0].accountname)}else{return(a)}
  if(i===2)if(a==="") {return( fileram[0].email)}else{return(a)}
  if(i===3)if(a==="") {return( fileram[0].firstname)}else{return(a)}
  if(i===4)if(a==="") {return( fileram[0].lastname)}else{return(a)}
  if(i===5)if(a==="") {return( fileram[0].password)}else{return(a)}
  if(i===6)if(a==="") {return( fileram[0].refferal)}else{return(a)}
  if(i===7)if(a==="") {return( fileram[0].accountnum)}else{return(a)}
  if(i===8)if(a==="") {return( fileram[0].bankan)}else{return(a)}
  if(i===9)if(a==="") {return( fileram[0].bankname)}else{return(a)}
  if(i===10)if(a===""){return( fileram[0].phone)}else{return(a)}
  if(i===11)if(a===""){return( fileram[0].usdt)}else{return(a)}
  if(i===12)if(a===""){return( fileram[0].id)}else{return(a)}
}
function nfil(i){if(i===null){return("")}else{return(i)}}

 const xarc = {
   "accountname":filpro(1,""),
    "email":filpro(2,xemail),
    "firstname":filpro(3,xfirstname),
    "lastname":filpro(4,xlastname),
    "password" :filpro(5,xpassword),
    "refferal" :filpro(6,""),
    "accountnum":filpro(7,xaccountnum),
    "bankan":filpro(8,xaccountname),
    "bankname":filpro(9,xbankname),
    "phone":filpro(10,xphone),
    "usdt":filpro(11,xusdt),
    "id":filpro(12,""),
   }

   const mxyt ={
		"_id": "629d28ad0a3e6534ab4abdb2",
		"accountname": "udstone",
		"email": "pubmail700@gmail.com",
		"firstname": "ud",
		"lastname": "Nwokoma",
		"password": "1111111",
		"refferal": "refferal",
		"id": "0230db44-0ac0-4ee3-99de-d991801741ab",
	}
function udateprofile() {
  axios.post("https://esperteedb.herokuapp.com/account/up",xarc)
  .then(function (res){ setnotex("profile updated") })
  .catch(function (error) { });
}

function updatetask() {
 // const ints = Task[0].id;
  axios.post("https://esperteedb.herokuapp.com/task/up",{"task":uuidv4(),"ts1":t1,"ts2":t2,"id":"e1e7c090-24d8-4ba-82e3-24cafda4bb76"})
  .then(function (res){ setnotex("Task Updated")})
  .catch(function (error) {  });
  
}

function cheksign() {
  if(u==="Admin"){return(settype(2),signadmin())}else{settype(1);singnin()}


  function signadmin() {

    axios.post("https://esperteedb.herokuapp.com/report")
    .then(function (res){ setallreport(res.data) })
    .catch(function (error) {  });

    axios.post("https://esperteedb.herokuapp.com/amount")
    .then(function (res){ setallaccount(res.data) })
    .catch(function (error) {  });

    axios.post("https://esperteedb.herokuapp.com/task")
    .then(function (res){ setTask(res.data) })
    .catch(function (error) {  });

    axios.post("https://esperteedb.herokuapp.com/coupon")
    .then(function (res){ setcouponlist(res.data)})
    .catch(function (error) {  });
  if(p==="1234567"){setba(2);runme(100)}else{setnotex("Invalid usename or password")}
}

}
 function cheksub(i){
  sucolor(i)
  if( parseInt(money.map(i=> i.deposit))=== parseInt(i)){return("Aready Subscribed")}else{return("Subscribe")}
}function sucolor(i) {
  if( parseInt(money.map(i=> i.deposit))=== parseInt(i)){return({backgroundColor:"#77e44c"})}else{return({backgroundColor:"#e7e7e7"})}
}function subpos(i) {
  if( parseInt(money.map(i=> i.deposit))=== parseInt(i)){return({display:"inline-block"})}else{return({display:"none"})}
}function subposx(i) {
  if( parseInt(money.map(i=> i.deposit))=== parseInt(i)){return({display:"none"})}else{return({display:"inline-block"})}
}


function accountype(i){if(type===i){return({display:"block"})}else{return({display:"none"})};}
function acts(i) { 
  if(type===i){return("sliderx")}else{return("slider")}
  }



function reg() {

  axios.post("https://esperteedb.herokuapp.com/account/find",{"accountname":accountname})
  .then(function (res){ if(JSON.stringify(res.data)===("[]")){


    axios.post("https://esperteedb.herokuapp.com/account/id",{"id":refid})
    .then(function (res){ if(JSON.stringify(res.data)===("[]")){setnotex("Invalid refferal")}else{

  axios.post("https://esperteedb.herokuapp.com/coupon/find",{"coupon":coupon})
  .then(function (res){
    if(JSON.stringify(res.data)===("[]")){setnotex("Invalid Coupon")}else{

      inter(res.data[0].value,res.data[0].rate);
      Completereg();
/*  ATTENTION 5G ONLY */
}}).catch(function (error) { setnotex("Check Internet Connection") });

}  })
    .catch(function (error) { alert(error); });

}else{setnotex("username already exists")} })

}


function inter(i,r) {

  
 setmoney([{"accountname":accountname,"deposit":i,"rate":r,"balance":"0","withdrawal":"0","pending":"0","refferal":"0","totalweed":"0","totalDeposit":"0","task":"0","ts1":"0","ts2":"0"}])
    axios.post("https://esperteedb.herokuapp.com/amount/add",{"accountname":accountname,"deposit":i,"rate":r,"balance":"0","withdrawal":"0","pending":"0","refferal":"0","totalweed":"0","totalDeposit":"0","task":"0","ts1":"0","ts2":"0","id":uuidv4()})
    .then(function (res){ })
    .catch(function (error) { });
  }
 function Completereg() {
   async function midreg (){setmainlaccount([{"accountname":accountname,"email":email,"password":password,"firstname":firstname,"lastname":lastname,"refferal":"refferal","id":staticid()}]);};
  midreg().then(function () {
    

      axios.post("https://esperteedb.herokuapp.com/account/add",{"accountname":accountname,"email":email,"password":password,"firstname":firstname,"lastname":lastname,"refferal":"refferal","id":staticid()})
      .then(function (res){
        setstarticuuid("")
        if(res){axios.post("https://esperteedb.herokuapp.com/coupon/del",{"coupon":coupon});setba(2)
        .then(function (res){ })
        .catch(function (error) { })}
      })
      //.catch(function (error) { alert(JSON.stringify()) });

  })
}



function singnin() {
  setart(2)
 axios.post("https://esperteedb.herokuapp.com/amount/find",{"accountname":u},{timeout:10000})
 .then(function (res){ if(JSON.stringify(res.data)==="[]"){setmoney([{}])}else{setmoney(res.data)} })
 .catch(function (error) { setnotex("check network connection") });
 
 axios.post("https://esperteedb.herokuapp.com/note")
 .then(function (res){ setscreenote(res.data)})
 .catch(function (error) { alert(error); });

 axios.post("https://esperteedb.herokuapp.com/account/find",{"accountname":u},{timeout:10000})
 .then(function (res){if(JSON.stringify(res.data)===("[]")){ setart(0);setnotex("Invalid usename or password")}else{
   if(p === res.data[0].password){setba(2);dump()}else{ setart(0);setnotex("Invalid password")}
  //if(res.data===("[]")){setnotex("Invalid usename or password")}
  setTimeout(() => { setart(0) }, 500);setmainlaccount(res.data)} });grabtask()
 .catch(function (error) {if(error){setart(0);setnotex("check network connection")}});

  }
  function grabtask() {
     
  axios.post("https://esperteedb.herokuapp.com/task")
  .then(function (res){ setTask(res.data)})
  .catch(function (error) { alert(error); });
  
  }
    
function sub(v) {
 if((parseInt(v)) > (parseInt(money[0].deposit) )){setnotex("Insuficent found")}else{
  axios.post("https://esperteedb.herokuapp.com/amount/up",{"accountname":"neweed"
  //  "accountname":trace(money,"accountname"),"deposit":trace(money,"deposit"),"balance":trace(money,"balance"),"withdrawal":trace(money,"withdrawal"),
  //  "pending":trace(money,"pending"),"refferal":trace(money,"refferal"),"totalweed":trace(money,"totalweed"),"totalDeposit":trace(money,"totalDeposit")
  })
  .then(function (res){ alert(JSON.stringify(res.data))})
  .catch(function (error) { alert(error); });
 }
}

function dump() {
  setu("");setp("")
}
    
/*
  axios.post("https://esperteedb.herokuapp.com/product/find",{"productID":Bit1})
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
function loxikey() {if(loxi==='logoption'){setloxi('logoption1')}else{setloxi('logoption')} }
function sDS(a){ if(iDS===a){return({display:'block'})}else{return({display:'none'})} }

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
  if(sideP==='slide-out'){setsideP('slide-in')}else{}
  setloxi('logoption1');
}

function runme(a) {
  setopt1(a);setdashscreen(a)
}

function dsname(a) {
  if (1 === dashscreen) {return("Dashboard")  }
  if (100 === dashscreen) {return("Dashboard")  }
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
  if (16 === dashscreen) {return("New Task")  }
  if (17 === dashscreen) {return("Withdrawal Request")  }
  if (18 === dashscreen) {return("Generate coupon")  }
  if (19 === dashscreen) {return("New Task")  }
  if (20 === dashscreen) {return("New Task")  }
  if (25 === dashscreen) {return("Users")  }
  if (80 === dashscreen) {return("Notify")  }
  if (81 === dashscreen) {return("Report")  }
}

function dynlicon(a) {
  if (1 === dashscreen) {return(home)  }
  if (100 === dashscreen) {return(home)  }
  if (2 === dashscreen) {return(layout)  }
  if (11 === dashscreen) {return(Tasks)  }
  if (12 === dashscreen) {return(Tasks)  }
  if (3 === dashscreen) {return(Settings)  }
  if (5 === dashscreen) {return(Settings)  }
  if (6 === dashscreen) {return(Referrer)  }
  if (7 === dashscreen) {return(Report)  }
  if (8 === dashscreen) {return(Withdraw)  }
  if (9 === dashscreen) {return(support)  }
  if (16 === dashscreen) {return(withsl)  }
  if (17 === dashscreen) {return(withsl)  }
  if (18 === dashscreen) {return(gcuoupon)  }
  if (19 === dashscreen) {return(task)  }
  if (20 === dashscreen) {return(task)  }
  if (25 === dashscreen) {return(task)  }
  if (80 === dashscreen) {return(task)  }
  if (81 === dashscreen) {return(task)  }
}


function autogen(v,r,b) {
  const temp = [genmap]
  const func = document.getElementById("mmmm")
  const dg = document.getElementById("donegen")
  if(amount.length>1){

  const next = {"coupon":uuidv4(),"value":amount,"rate":rate,"bonus":bonus,"email":"admin@controller"}
  setgenmap([...genmap,next])
  setTimeout(() => {
  if(genmap.length<99){func.click()}else{dg.click()}
 }, 10);

}else{setamount(v);setrate(r);setbonus(b); setTimeout(() => {func.click()}, 100); }
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

function lart(a) {
  if (a === art) {return({display:'block'})}else{return({display:'none'})  }
}


function slt(i) {
  const ana = mainlaccount.map(i=> i.accountname).toString()
  const ban = mainlaccount.map(i=> i.accountnum).toString()
  const anu = mainlaccount.map(i=> i.bankname).toString()
  if(i===1){if(ana===""){return("Account Name")}else{return(ana)}}
  if(i===2){if(ban===""){return("Bank Name")}else{return(ban)}}
  if(i===3){if(anu===""){return("Account Number")}else{return(anu)}}
}

function taskman(i) {
  if(i==1){if(Task[0].ts1===money[0].ts1){return({display:"none"})}else{return({display:"block"})}}
  if(i==2){if(Task[0].ts2===money[0].ts2){return({display:"none"})}else{return({display:"block"})}}
}

function moneypro(i,a) {
  const all = money
  if(i===1)if(a==="") {return( money[0].accountname)}else{return(a)}
  if(i===2)if(a==="") {return( money[0].balance)}else{return(a)}
  if(i===3)if(a==="") {return( money[0].withdrawal)}else{return(a)}
  if(i===4)if(a==="") {return( money[0].deposit)}else{return(a)}
  if(i===5)if(a==="") {return( money[0].rate)}else{return(a)}
  if(i===6)if(a==="") {return( money[0].pending)}else{return(a)}
  if(i===7)if(a==="") {return( money[0].refferal)}else{return(a)}
  if(i===8)if(a==="") {return( money[0].totalweed)}else{return(a)}
  if(i===9)if(a==="") {return( money[0].totalDeposit)}else{return(a)}
  if(i===10)if(a==="") {return( money[0].task)}else{return(a)}
  if(i===11)if(a==="") {return( money[0].ts1)}else{return(a)}
  if(i===12)if(a==="") {return( money[0].ts2)}else{return(a)}
  if(i===13)if(a==="") {return( money[0].id)}else{return(a)}
}

const [bal, setbal] = useState("")
const [dep, setdep] = useState("")

const remony = {
  "accountname":moneypro(1,""),
  "balance":moneypro(2,bal),
  "withdrawal":moneypro(3,""),
  "deposit":moneypro(4,""),
  "rate":moneypro(5,""),
  "pending":moneypro(6,""),
  "refferal":moneypro(7,""),
  "totalweed":moneypro(8,""),
  "totalDeposit":moneypro(9,""),
  "task":moneypro(10,""),
  "ts1":moneypro(11,t1),
  "ts2":moneypro(12,t2),
  "id":moneypro(13,"")
}

function runlink() {
  setbal()
  window.open(
    'https://support.wwf.org.uk/earth_hour/index.php?type=individual',
    '_blank' // <- This is what makes it open in a new window.
  );
}

function updateVtask() {
  
  axios.post("https://esperteedb.herokuapp.com/amount/up",remony)
  .then(function (res){setmoney([remony]); setnotex("Task Completed")})
  .catch(function (error) { setnotex("Task error"); });
}
function runtask(i) {
  const prceed = document.getElementById("updt")
  const modmon = money
  const badd = parseInt(money[0].rate)/2;
  const afad = parseInt(money[0].balance)+badd
  
setbal(afad.toString())
 if(i==1){sett1(Task[0].ts1);setTimeout(() => { window.open( Task[0].ts1, '_blank'  /* <- new window.*/)}, 500);}
 if(i==2){sett2(Task[0].ts2);setTimeout(() => { window.open( Task[0].ts2, '_blank'  /* <- new window.*/)}, 500);}

 setTimeout(() => { prceed.click() }, 1000);
  
 // modmon.splice(i=> i.ts1 === "me")
 // window.open( Task[0].ts1, '_blank'  /* <- new window.*/
 // );

} 

   function pronote(){if(notification===""){return(null)}else{return(notification)}}
 function sendnote() {
  axios.post("https://esperteedb.herokuapp.com/note/up",{"note":pronote(),"id":"bc2fe131-9812-4dc1-afe0-4eecc698e2d4"})
  .then(function (res){ setnotex("notification sent")})
  .catch(function (error) { alert(error) });
 }
function tinvest() {
  const arrox = allaccount.map(i=> parseInt(i.deposit))
  const initialValue = 0;
  const sumWithInitial = arrox.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);
  return (sumWithInitial)
}


function tobal() {
  const arrox = allaccount.map(i=> parseInt(i.balance))
  const initialValue = 0;
  const sumWithInitial = arrox.reduce((previousValue, currentValue) => previousValue + currentValue,initialValue);
  return (sumWithInitial)
}


function subreport() {
  if(report.length < 3){setnotex("please write report")}else{
    axios.post("https://esperteedb.herokuapp.com/report/add",{"accountname":mainlaccount[0].accountname,"report":report,"id":uuidv4()})
    .then(function (res){ alert(JSON.stringify(res.data))})
    .catch(function (error) { alert(error); });
  }
}




function Sld() {
  return(
  
<div  id={acts(2)} onClick={e=> setloxi('logoption1')} >

  <div id="hid" > <div id='slideback' onClick={e=> slidfunc()} ><img src={v_leeft} id='svgimg' alt='img' style={{height:"40px"}}  /></div></div>

    <div id="boxtitle"> 
      <div id='space1' style={{height:"20px"}} ></div>
      <div style={{height:'70px',float:'left',paddingLeft:'20px'}} ><img id='unimage' src={logo} alt='img'  /></div>
    </div>
    
    <div id={lab(1)} onClick={e=> runme(1)} style={accountype(1)} >
      <div id='bt_icon'> <img src={home} id={lab3(1)} alt='img' /> </div> <div id={lab2(1)}>Dashboard</div>
    </div>
        
    <div id={lab(100)} onClick={e=> runme(100)} style={accountype(2)} >
      <div id='bt_icon'> <img src={home} id={lab3(100)} alt='img' /> </div> <div id={lab2(100)}>Dashboard</div>
    </div>



<div id={lab(25)} onClick={e=> runme(25)} style={accountype(2)} >
      <div id='bt_icon'> <img src={task} id={lab3(25)} alt='img'  /> </div> <div id={lab2(25)}>users</div>
    </div>

<div id={lab(80)} onClick={e=> runme(80)} style={accountype(2)} >
  <div id='bt_icon'> <img src={task} id={lab3(80)} alt='img'  /> </div> <div id={lab2(80)}>Notify Users</div>
</div>
    
    <div id={lab(2)} onClick={e=> runme(2)} style={accountype(1)} >
      <div id='bt_icon'> <img src={layout} id={lab3(2)} alt='img'  /> </div> <div id={lab2(2)}>Plans</div>
    </div>

    <div id={lab(11)} onClick={e=> runme(11)} style={accountype(1)} >
      <div id='bt_icon'> <img src={Tasks} id={lab3(11)} alt='img'  /> </div> <div id={lab2(11)}>Tasks</div>
    </div>
{/*
    <div id={susu(11)} >
    
      <div id='elel'  onClick={e=>runme(11)} >Task</div>
      <div id='elel' onClick={e=>runme(12)}>Done task</div>
    
    </div>
    */}
    
    <div id={lab(3)} onClick={e=> runme(3)} style={accountype(1||2)} >
      <div id='bt_icon'> <img src={Settings} id={lab3(3)} alt='img'  /> </div> <div id={lab2(3)}>Account Settings</div>
    </div>
    
    
    <div id={lab(5)} onClick={e=> runme(5)} style={accountype(1)} >
      <div id='bt_icon'> <img src={Referrer} id={lab3(5)} alt='img'  /> </div> <div id={lab2(5)}>My Referrer</div>
    </div>
    
    <div id={lab(6)} onClick={e=> runme(6)} style={accountype(1)} >
      <div id='bt_icon'> <img src={Withdraw} id={lab3(6)} alt='img'  /> </div> <div id={lab2(6)}>Withdraw Now</div>
    </div>
    
    
    <div id={lab(7)} onClick={e=> runme(7)} style={accountype(null)} >
      <div id='bt_icon'> <img src={Report} id={lab3(7)} alt='img'  /> </div> <div id={lab2(7)}>Report / Log</div>
    </div>
    
    <div id={lab(8)} onClick={e=> runme(8)} style={accountype(1)} >
      <div id='bt_icon'> <img src={support} id={lab3(8)} alt='img'  /> </div> <div id={lab2(8)}>Support</div>
    </div>
    
    <div id={lab(9)} onClick={e=> runme(9)} style={accountype(null)} >
      <div id='bt_icon'> <img src={loginh} id={lab3(15)} alt='img'  /> </div> <div id={lab2(9)}>Login History</div>
    </div>

    <div id={lab(18)} onClick={e=> runme(18)} style={accountype(2)} >
      <div id='bt_icon'> <img src={gcuoupon} id={lab3(18)} alt='img'  /> </div> <div id={lab2(18)}>Generate coupon</div>
    </div>

    <div id={lab(17)} onClick={e=> runme(17)} style={accountype(2)} >
      <div id='bt_icon'> <img src={withsl} id={lab3(17)} alt='img'  /> </div> <div id={lab2(17)}>Withdrawal Request</div>
    </div>

    <div id={lab(19)} onClick={e=> runme(19)} style={accountype(2)} >
  <div id='bt_icon'> <img src={task} id={lab3(19)} alt='img'  /> </div> <div id={lab2(19)}>New Task</div>
</div>

<div id={lab(81)} onClick={e=> runme(81)} style={accountype(2)} >
  <div id='bt_icon'> <img src={task} id={lab3(81)} alt='img'  /> </div> <div id={lab2(81)}>Report</div>
</div>

    <div id="slide_item2"  onClick={e=> prelogout()} >
      <div id='bt_icon'> <img src={Logout} alt='img' id='svgimg' /> </div> <div id='sl_name2' >Logout</div>
    </div>
    
      </div>

  )
}




  return (
    
<div >
<div >{JSON.stringify()}</div>
  <div id="alertx" style={lart(1)} >
    <div id="subalert" >
      <div>{alertx}  are you sure you want to log out </div>
      <div id="bufllex" >
      <div id="Bu" onClick={e=> logoout()} >yes</div>
      <div id="Bu" onClick={e=> noart()} >no</div></div>
    </div>
  </div>
  
  
  <div id="preloader" style={lart(2)}>
  <div id="loader"></div>
</div>


<div hidden="hidden" id="stcl" onClick={staticid() } ></div>
<div hidden="hidden" id="updt" onClick={e=> updateVtask() } ></div>
<div id="float" onClick={e=> setba(2)} hidden="hidden" ></div>
  <div id="tempdiplay" >{}</div>
<div id hidden="hidden" ref={toff} onClick={e=> inter()} ></div>
<div id="regcom" onClick={e=> Completereg()} ></div>
<div id="donegen" onClick={e=> maxpos(genmap,setcouponlist)} ></div>
<div id="mmmm" onClick={e=>autogen()} hidden="hidden"  >button</div>

<div id='notify' style={note()} ><div style={{margin:'10px' }}  >{notex}</div> </div>
  
<center>
<div id="strecth" style={sbA(1)} >
  
<div id="ubb" ></div>
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
    <input id="dinput" placeholder='Enter Username' onKeyUp={e=> kPress(e)} ref={Ru} onChange={e=> setu(e.target.value)} />
  </div>
</div>

<div id='space1' style={{height:'10px'}} ></div>


<div id="inputline" >
    <div id="tex" >Password</div>    <div id="fl" ><div id='unitex' style={{cursor: "pointer"}} onClick={e=> setbox(3)}  ><span id="link" >Forgot Password?</span> </div></div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='*******'  type='accountname' onKeyUp={e=> kPress(e)} ref={Ru} onChange={e=> setp(e.target.value)} />
  </div>
</div>


<div id='space1' style={{height:'10px'}} ></div>

<div id='remem' > <input id="chekinput" type="checkbox" /> <span id ="well" >Remember Me</span></div>

<div style={{width:'100%',marginTop:'50px'}} ><div id='unibtt' style={{width:'80%',height:"20px"}} > <div style={{cursor: "pointer"}} onClick={e=> cheksign()} >Sign In</div> </div></div>


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
    <input id="dinput" placeholder='First Name' onChange={e=> setfirstname(e.target.value)} />
  </div>
</div>

<div id="inputline" >
    <div id="tex" >Last Name</div>
  <div id ="unimputbody" >
    <input id="dinput" placeholder='Last Name' onChange={e=> setlastname(e.target.value)} />
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
    <input id="dinput" placeholder='' onChange={e=> setrefid(e.target.value)} />
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




</div>

<div style={sbA(2)}   >

  <div id='fillscreen' onClick={e=> Dispose()}>


<div id="userbar" onClick={e=> skipchild(e)} >
  <div id='baric' ><img id='svgimg' height='23px' src={dynlicon()} alt='img'  /></div>
  <div id="dashname" >{dsname()}</div>
  <div id='usbaRicon' onClick={e=> slidfunc()} ><img src={bxm} id='svgimg' style={{height:"35px",marginTop:'-0px',marginLeft:'-5px'}} alt='img'  /></div>
  <div id='usn' >{mainlaccount.map(i=> i.accountname)}</div>
   <div id='profileico' onClick={e=> loxikey()} ><div id='bt_icon' style={{marginTop:"3px",height:"fit-content"}} > 
   <img src={user} id="svgimg" alt='img' style={{marginTop:"6px",marginRight:"3px",height:"30px"}} /> </div></div> </div>


   <div id={loxi} >
     <div id='loghead' ><div id="usico" ><img src={user} id="svgimg" alt='img' style={{marginTop:"13px",marginRight:"4px",height:"30px"}} /></div> </div>
     <div id="logop" onClick={e=> runme(3)} ><div id='bt_icon'> <img src={user} id={lab3(1)} alt='img' /> </div><div id='logtex' >My Profile</div> </div>
     <div id="logop" ><div id='bt_icon'> <img src={set} id={lab3(1)} alt='img' /> </div><div id='logtex' onClick={e=> runme(20)} >Password</div> </div>
     <div id="logop" onClick={e=> prelogout()} ><div id='bt_icon'> <img src={Logout} id={lab3(1)} alt='img' /> </div><div id='logtex' >Log Out</div> </div>
   </div>

   <div id="dashbody"  style={DS(100)} >


   <div id='cardpink' style={{backgroundColor:"lightgreen" }} >
  <div id='cardhead'>{allaccount.length}</div>
  <div id='cardmini' >All Users</div>
  <div id='cardbod' >Veiw  All</div>
</div>


<div id='cardpink'style={{backgroundColor:"#dc5745" }} >
  <div id='cardhead'>₦{tinvest()}</div>
  <div id='cardmini' >Total invest</div>
  <div id='cardbod' >Veiw </div>
</div>

<div id='cardpink'style={{backgroundColor:"#2e98cc" }} >
  <div id='cardhead'>{"0"}</div>
  <div id='cardmini' >Withdrawal Request</div>
  <div id='cardbod' >Veiw All</div>
</div>

<div id='cardpink'style={{backgroundColor:"#dea459" }} >
  <div id='cardhead'>₦{tobal()}</div>
  <div id='cardmini' >Total Balance</div>
  <div id='cardbod' >Veiw </div>
</div>
</div>

   <div id="dashbody"  style={DS(1)} >

     <div style={{color:"gray", fontSize:"20px"}} >{screenote[0].note}</div>

   <div id='cardpink' style={{backgroundColor:"lightgreen" }} >
  <div id='cardhead'>auto</div>
  <div id='cardmini' >Total Clicks</div>
  <div id='cardbod' >Veiw  All</div>
</div>
   <div id='cardpink'style={{backgroundColor:"#8c46e0" }} >
  <div id='cardhead'>₦{money.map(i=> i.rate)}</div>
  <div id='cardmini' >Earning rate</div>
  <div id='cardbod' >Veiw All </div>
</div>
<div id='cardpink' onClick={e=> runme(11)} style={{backgroundColor:"#1b1168" }} >
  <div id='cardhead'>2</div>
  <div id='cardmini' >Today's Clicks</div>
  <div id='cardbod' >Veiw All</div></div>

  <div id='cardpink'style={{backgroundColor:"#3397b8" }} >
  <div id='cardhead'>24hrs</div>
  <div id='cardmini' >Next Remainder</div>
  <div id='cardbod' >Veiw </div>
</div>

<div id='cardpink'style={{backgroundColor:"#dea459" }} >
  <div id='cardhead'>₦{money.map(i=> i.balance)}</div>
  <div id='cardmini' >Current Balance</div>
  <div id='cardbod' >Veiw </div>
</div>

<div id='cardpink'style={{backgroundColor:"#dc5745" }} >
  <div id='cardhead'>₦{money.map(i=> i.deposit)}</div>
  <div id='cardmini' >Total invest</div>
  <div id='cardbod' >Veiw </div>
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
  <div id='cardhead'>{"0"}</div>
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

     <div style={{display:"inline-block"}} >
       
       <div style={{width:"fit-content",display:"inline-block"}}>
<div id='planbox' style={subpos("3000")} >
  <div id='planhead' >Economy</div>
  <div id="amount" >N<span id="sling">=</span>3000 </div>
  <div id="spacer" style={{height:"130px"}} ></div>
  <div>
  <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referrer Commission: ₦ 1000</div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

  <div id="plaxbot" onClick={e=> sub("3000") } style={sucolor("3000")}><div id='gazel'  >{cheksub("3000")}</div></div>
  </div>
</div>


<div id='planbox' style={subpos("5000")} >
       <div id='planhead' >Standard</div>
       <div id="amount" >N<span id="sling">=</span>5000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 1200</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("5000")} style={sucolor("5000")}><div id='gazel'  >{cheksub("5000")}</div></div>
       </div>
     </div>


     <div id='planbox' style={subpos("10000")} >
       <div id='planhead' >Elite</div>
       <div id="amount" >N<span id="sling">=</span>10000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 2000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("10000")} style={sucolor("10000")} ><div id='gazel' >{cheksub("10000")}</div></div>
       </div>
     </div>


     <div id='planbox' style={subpos("20000")} >
       <div id='planhead' >Deluxe</div>
       <div id="amount" >N<span id="sling">=</span>20000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 3000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("20000")} style={sucolor("20000")}><div id='gazel'  >{cheksub("20000")}</div></div>
       </div>
     </div>


     <div id='planbox' style={subpos("50000")} >
       <div id='planhead' >Gold</div>
       <div id="amount" >N<span id="sling">=</span>50000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 5000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot"  onClick={e=> sub("50000")} style={sucolor("50000")} ><div id='gazel' >{cheksub("50000")}</div></div>
       </div>
     </div>
       </div>







       <div id='planbox' style={subposx("3000")} >
  <div id='planhead' >Economy</div>
  <div id="amount" >N<span id="sling">=</span>3000 </div>
  <div id="spacer" style={{height:"130px"}} ></div>
  <div>
  <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referrer Commission: ₦ 1000</div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

  <div id="plaxbot" onClick={e=> sub("3000") } style={sucolor("3000")}><div id='gazel'  >{cheksub("3000")}</div></div>
  </div>
</div>


<div id='planbox' style={subposx("5000")} >
       <div id='planhead' >Standard</div>
       <div id="amount" >N<span id="sling">=</span>5000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 1200</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("5000")} style={sucolor("5000")}><div id='gazel'  >{cheksub("5000")}</div></div>
       </div>
     </div>


     <div id='planbox' style={subposx("10000")} >
       <div id='planhead' >Elite</div>
       <div id="amount" >N<span id="sling">=</span>10000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 2000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("10000")} style={sucolor("10000")} ><div id='gazel' >{cheksub("10000")}</div></div>
       </div>
     </div>


     <div id='planbox' style={subposx("20000")} >
       <div id='planhead' >Deluxe</div>
       <div id="amount" >N<span id="sling">=</span>20000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 3000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot" onClick={e=> sub("20000")} style={sucolor("20000")}><div id='gazel'  >{cheksub("20000")}</div></div>
       </div>
     </div>


     <div id='planbox' style={subposx("50000")} >
       <div id='planhead' >Gold</div>
       <div id="amount" >N<span id="sling">=</span>50000 </div>
       <div id="spacer" style={{height:"130px"}} ></div>
       <div>
       <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Referral Commission: ₦ 5000</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
       <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Daily Ad View Limit: 2</div>

       <div id="plaxbot"  onClick={e=> sub("50000")} style={sucolor("50000")} ><div id='gazel' >{cheksub("50000")}</div></div>
       </div>
     </div>




     </div>

   </div>


   <div id="dashbody" style={DS(5)} >

<div id="Refbox" >
 Referrer Code
<div id="referall" >  
<div hidden="hidden" id="grabdata" >https://www.youtube.com/results?search_query=laravel+routing</div>
<div  id="grabdata" >Referrer Code: {mainlaccount[0].id}</div>
<div  id='Bex' onClick={e=> copyText()} ><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}} ></div>Copy Code</div>
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


<div id="dashbody" style={DS(19)}>

    <center >
<div id='prochinwi' >
New Task
  <div id='inpul' >

    
 
      <div id='idiv'  style={{fontSize:'13px',float:"left",marginTop:"20px"}} >First Task</div>
      <div id="zo" ><input type='text'id='ifwfullwidth' onChange={e=> sett1(e.target.value)} /></div>

      
    <div id='withallfullwhidth' >
      <div id='idiv'  style={{fontSize:'13px',float:"left",marginTop:"20px"}} >second Task</div>
      <div id="ssk" ><input type='text'  id='ifwfullwidth' onChange={e=> sett2(e.target.value)} /></div></div>


<div id='mulpose' onClick={e=> updatetask() }  ><div id='B'><img id="svgimg" src={Withdraw} style={{height:'18px',marginTop:'1px'}} alt='img' /><div style={{width:'10px'}} ></div>Update Task</div></div>

    
  </div>
</div>
    </center>
</div>




<div id="dashbody" style={DS(20)} >

<div id='poax' >


<div id='prochinwi' >
Change Password
  <div id='inpul' >
    <center>
      
      
      <div id='withallfullwhidth' >
        <div id='idiv'  style={{fontSize:'13px'}} >Password</div>
        <div><input type='text'  id='ifwfullwidth'  /></div></div>
      
      <div id='withallfullwhidth' >
        <div id='idiv'  style={{fontSize:'13px'}} >New password</div>
        <div><input type='text' id='ifwfullwidth'  /></div></div>
      
      <div id='withallfullwhidth' >
        <div id='idiv'  style={{fontSize:'13px'}} >Confirm password</div>
        <div><input type='text' id='ifwfullwidth'  /></div></div>

<div id='mulpose' ><div id='B'><img id="svgimg" src={Withdraw} style={{height:'18px',marginTop:'1px'}} alt='img' /><div style={{width:'10px'}} ></div>Save Changes</div></div>

    </center>
    
  </div>
</div>
</div>
</div>



<div id="dashbody" style={DS(3)} >

  <div style={sDS(0)} >
<div id='withall' style={{backgroundColor:"transparent"}} >
      <div id='idiv'  style={{fontSize:'13px',color:"gray"}} >Enter Password</div>

      <div><input style={{color:"#666565"}} type='text'  onChange={e=>setepass(e.target.value)} id='ifw'  /></div></div>

        <div id='mulpose' onClick={e=> ckepass()} ><div id='B'>
          <img id="svgimg" src={Withdraw} style={{height:'18px',marginTop:'1px'}} alt='img' /><div style={{width:'10px'}}></div>Continue</div></div>
      </div>    
<div style={sDS(1)} >
<div id='poax' >

<div id='setpro' >
  <div id="proicon" ></div>
  <div style={{height:'20px'}}   ></div>

  <div id="dike"><div style={{float:"left",paddingLeft:"10px"}} >Name</div> <div style={{float:"left",paddingLeft:"10px"}}  >how are you</div> </div>
  <div id="dike"><div style={{float:"left",paddingLeft:"10px"}} >Name</div> <div style={{float:"left",paddingLeft:"10px"}}  >how are you</div> </div>
  <div id="dike"><div style={{float:"left",paddingLeft:"10px"}} >Name</div> <div style={{float:"left",paddingLeft:"10px"}}  >how are you</div> </div>
     </div>

<div id='prochinwi' >
Account Settings

  <div id='inpul' >
    <center>
    <div id='withall' >
      <div id='idiv'  style={{fontSize:'13px'}} >First Name</div>
      <div><input style={{backgroundColor:"#e7e7e7",color:"#808080"}} type='text' value={mainlaccount.map(i=> i.firstname)} onChange={e=>xsfirstname(e.target.value)} readonly id='ifw'  /></div></div>
    
    <div id='withall' >
      <div id='idiv'  style={{fontSize:'13px'}} >Last Name</div>
      <div><input style={{backgroundColor:"#e7e7e7",color:"#808080"}} type='text' value={mainlaccount.map(i=> i.lastname)} onChange={e=>xslastname(e.target.value)} readonly id='ifw'  /></div></div>
    
    <div id='withall' >
      <div id='idiv'  style={{fontSize:'13px'}} >E-mail</div>
      <div><input style={{backgroundColor:"#e7e7e7",color:"#808080"}} type='text'  value={mainlaccount.map(i=> i.email)} id='ifw' readonly /></div></div>

    <div id='withall' >
      <div id='idiv'  style={{fontSize:'13px'}} >Password</div>
      <div><input style={{color:"#666565"}} type='text' placeholder="Change Password" id='ifw' onChange={e=>xspassword(e.target.value)} /></div></div>
    
      <div id='idiv'  style={{fontSize:'13px',width:"100%"}} >Payment Methods</div>
    <div id='withallfullwhidth' >
      <div id='idiv'  style={{fontSize:'13px'}} >Bank Details</div>
      
      <div style={{fontSize:'11px',textAlign:"left",paddingLeft:'20px',marginTop:"10px"}} >Account Name</div>
      <div ><input style={{color:"#666565"}} type='text' placeholder={slt(1)}  id='ifwfullwidth' onChange={e=>xsaccountname(e.currentTarget.value)} /></div></div>
      
      <div style={{fontSize:'11px',textAlign:"left",paddingLeft:'20px',marginTop:"10px"}} >Account Number</div>
      <div ><input style={{color:"#666565"}} type='text' placeholder={slt(2)} id='ifwfullwidth' onChange={e=>xsaccountnum(e.target.value)} /></div>

      <div style={{fontSize:'11px',textAlign:"left",paddingLeft:'20px',marginTop:"10px"}} >Bank Name</div>
      <div ><input style={{color:"#666565"}} type='text' placeholder={slt(3)}   id='ifwfullwidth' onChange={e=>xsbankname(e.target.value)} /></div>

      
    <div id='withallfullwhidth' >
      <div id='idiv'  style={{fontSize:'13px'}} >USDT</div>
      <div><input type='text' placeholder='Enter Usdt Trc-20 Address' id='ifwfullwidth' onChange={e=>xsusdt(e.target.value)} /></div></div>

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
<div id='mulpose' onClick={e=> udateprofile()} ><div id='B'><img id="svgimg" src={Withdraw} style={{height:'18px',marginTop:'1px'}} alt='img' /><div style={{width:'10px'}}
 ></div>Save Changes</div></div>

    </center>
    
  </div>
</div>
</div>

</div>



</div>

<div  id="dashbody" style={DS(25)} >
<div id="tabody" >
<table id="customers">
   <tr>
   <th>User Name</th>
   <th>Total invest</th>
   <th>Current balance</th>
   <th>Pending Withdrawal</th>
   <th>Earning rate</th>
   </tr>
  <tr>
    <td>{allaccount.map(i=>  <tr>{i.accountname}</tr>)}</td>
    <td>{allaccount.map(i=>  <tr>₦{i.deposit}</tr>)}</td>
    <td>{allaccount.map(i=>  <tr>₦{i.balance}</tr>)}</td>
    <td>{allaccount.map(i=>  <tr>₦{i.pending}</tr>)}</td>
    <td>{allaccount.map(i=>  <tr>₦{i.rate}</tr>)}</td>
    </tr>
       </table>
</div>
</div>

<div id="dashbody" style={DS(18)} >



<div id="tab" >
  <div id='gen'  onClick={e=> skipchild(e)} >
    
<div  id='Bex' onClick={e=> autogen("3000",233,1000)} ><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}}  ></div>Generate 3000</div>
<div  id='Bex'  onClick={e=> autogen("5000",366,1200)}><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}}></div>Generate 5000</div>
<div  id='Bex'  onClick={e=> autogen("10000",566,2000)}><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}} ></div>Generate 10000</div>
<div  id='Bex'  onClick={e=> autogen("20000",1066,3000)}><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}} ></div>Generate 20000</div>
<div  id='Bex'  onClick={e=> autogen("50000",2340,5000)}><img src={Withdraw} id={lab3(1)} style={{height:'18px',marginTop:'2px'}} alt='img' /><div style={{width:'10px'}} ></div>Generate 50000</div>
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

<div id="tabx">
<div id="tabody"  >

<center>
  <div style={{display:"inline-flex"}} >   
  <div style={taskman(1)}  >
  <div id='cardpink'style={{backgroundColor:"magenta"}} onClick={e=> runtask(1)} >
  <div id='cardhead'>{money.map(i=> i.balance)}</div>
  <div id='cardmini' >Total Clicks</div>
  <div id='cardbod' >Perform Task</div>
</div>
</div>
<div style={taskman(2)} >
<div id='cardpink'style={{backgroundColor:"palegreen"}} onClick={e=> runtask(2)}>
  <div id='cardhead'>{money.map(i=> i.balance)}</div>
  <div id='cardmini' >Total Clicks</div>
  <div id='cardbod' >Perform  Task</div>
</div> 
</div>
</div>
</center>

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

<center >
<div id='prochinwi' >
Report
  <div id='inpul' >

    
      
    <div id='withallfullwhidth' >
      <div id="ssk" ><textarea style={{height:"100px",marginTop:"20px"}} type='text'  id='ifwfullwidth' onChange={e=> setreport(e.target.value)} /></div></div>


<div id='mulpose' onClick={e=> subreport()} ><div id='B'><img id="svgimg" src={Withdraw} style={{height:'18px',marginTop:'1px'}} alt='img' /><div style={{width:'10px'}}></div>Submit</div></div>

    
  </div>
</div>
    </center>

</div>




<div id="dashbody" style={DS(80)} >

<center >
<div id='prochinwi' >
Notice
  <div id='inpul' >

      
    <div id='withallfullwhidth' >
      <div id="ssk" ><textarea style={{height:"100px",marginTop:"20px"}} type='text'  id='ifwfullwidth' onChange={e=> setnotification(e.currentTarget.value)} /></div></div>

<div id='mulpose' onClick={e=> sendnote()} ><div id='B'><img id="svgimg" src={Withdraw} style={{height:'18px',marginTop:'1px'}} alt='img' /><div style={{width:'10px'}}></div>Submit</div></div>

  </div>
</div>
    </center>
</div>

<div id="dashbody" style={DS(81)}>

    <center >
<div id='prochinwi' >
Report list
  <div id='inpul' >


  {allreport.map(i=> 
    <div style={{fontSize:"20",textAlign:"left",marginTop:"15px"}} >{i.accountname}
    <div style={{fontSize:"16px"}} >{i.report}</div></div>
  )}

  </div>
</div>
    </center>
</div>

<div id="dashbody" style={DS(6)} >




<div id='planbox'style={{height:"430px"}} >
  <div id='planhead' style={{color:'grey',fontSize:'23px'}} >Bank Withdrawal</div>
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


<div id='planbox'style={{height:"430px"}} >
  <div id='planhead' style={{color:'grey',fontSize:'23px'}} >USDT</div>
  <div id='planhead' style={{color:'grey',fontSize:'17px'}} >Eligibility Scope</div>
  <div id="amount" style={{fontSize:'35px'}} >20 USDT </div>
  <div id="spacer"  style={{height:"70px"}} ></div>
  <div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>24/7 Customer Support</div>
  <div id="sim"> <span><img id='imm' src={good} alt='img'/></span> Charge 2 USDT </div>
  <div id="sim"><span> <img id='imm' src={good} alt='img'/></span>Processing time 24H</div>

  <div id="plaxbot" style={{color:'#501860'}} ><div id='gazel' >Withdraw Now</div></div>
  </div>
</div>

</div>




<div id="slidestartic" onClick={e=> skipchild(e)} > <Sld></Sld></div>

<div id="shohi" > <div id={ssl} onClick={e=> skipchild(e)} > <Sld></Sld></div></div>



</div>

</div>


</center>`
</div>

  );
}

export default App;
