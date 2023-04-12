const hb = document.querySelector('.menu .bar .navlist .hb');
const mobile = document.querySelector('.menu .bar .navlist ul');
const menu = document.querySelector('.menu.bar');
hb.addEventListener('click',() => {

    hb.classList.toggle('active');
    mobile.classList.toggle('active');
}
);

function  nimmic()
{
    var n =document.getElementById("nimmu");
   var crs = [ "blue","orange","darkred","yellow","pink","white","#262626","purple" ];
   var currentc = n.style.color;
   var i = crs.indexOf(currentc);
   if(i == crs.length-1)
   {
    n.style.color= crs[0];   
   }
   else 
   {
    n.style.color = crs[i+1];
   }
}
function  nimmia()
{
    var d =document.getElementById("say");
   var crs = [ "blue","orange","darkred","yellow","pink","white","purple"];
   var currentc = d.style.color;
   var i = crs.indexOf(currentc);
   if(i == crs.length-1)
   {
    d.style.color= crs[0];   
   }
   else 
   {
    d.style.color = crs[i+1];
   }
}