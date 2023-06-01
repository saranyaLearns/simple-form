
var btn=document.getElementById('btnSubmit');


btn.addEventListener("click",()=>{
    
const form=document.getElementById("frm");

    var name=document.getElementById('txtName').value;
    document.getElementById('name').innerHTML=name;
    var fname=document.getElementById('txtFname').value;
    document.getElementById('fname').innerHTML=fname;

    var date_pick=document.getElementById('txtDate').value;
    var n=new Date(date_pick);

    date_pick.innerHTML=n;

    var date_pick=document.getElementById('date_pick');

    date_pick.innerHTML=n.toISOString().split('T')[0];

    var sign=document.getElementById('txtName').value;
    document.getElementById('signature').innerHTML=sign;
    document.getElementById("signature").style.fontFamily="Brush Script MT";
    document.getElementById("signature").style.fontSize="x-large";
    document.querySelector(".container").style.background="linear-gradient(to left,rgb(109, 109, 216),pink)";
   
    const x=document.querySelectorAll('.hide');
    for(let i=0;i<=x.length;i++){
        x[i].style.display="none";
    }

    document.getElementById("frm").reset();

});

// form.addEventListener("reset",function(e){
  
// });

