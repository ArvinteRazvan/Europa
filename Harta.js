//crearea hartii prin unificarea coordonatelor calculate de mana in procente a tarilor
$(document).ready(function()// cand se incarca pagina
{ 
var $a=$(window).width();// ia latimea paginii in pixeli
var $b=$(window).height();// ia lungimea paginii in pixeli
for (x in ".imgs")// parcurgem cu variabila x toate elementele din clasa .img
{
  If (x === undefined) { console.log(10) }
$c=x.getPropertyValue('margin-left');// c=valoarea marginii de stanga din ccs-ul lui x (din id) stocata in procente
$d=x.getPropertyValue('margin-top');//c=valoarea marginii de sus din ccs-ul lui x (din id) stocata in procente
// error undifinded la getPropertyValue
$x.attr('margin-left','a*c/100');//calculez care sa fie marginea-stanga a div-ului ( a lui x) in functie de pagina
$x.attr('margin-top','b*d/100');//calculez care sa fie  marginea-sus a div-ului ( a lui x) in functie de pagina
}
}
  );
//crearea hartii prin unificarea coordonatelor calculate de mana in procente a tarilor dupa in caz de resize
$(document).ready(function()// cand se incarca pagina
{ 
var $a=$(window).width();// ia latimea paginii in pixeli
var $b=$(window).height();// ia lungimea paginii in pixeli
for (x in ".imgs")// parcurgem cu variabila x toate elementele din clasa .img
{
  If (x === undefined) { console.log(10) }
$c=x.getPropertyValue('margin-left');// c=valoarea marginii de stanga din ccs-ul lui x (din id) stocata in procente
$d=x.getPropertyValue('margin-top');//c=valoarea marginii de sus din ccs-ul lui x (din id) stocata in procente
// error undifinded la getPropertyValue
$x.attr('margin-left','a*c/100');//calculez care sa fie marginea-stanga a div-ului ( a lui x) in functie de pagina
$x.attr('margin-top','b*d/100');//calculez care sa fie  marginea-sus a div-ului ( a lui x) in functie de pagina
}
}
  );

$(function() {
    // memoram tarile si steagurile
    var $steaguri = $( ".steag" ),
      $tari = $( ".imgs" );
 
    // permitem steagurilor sa fie "draggable"
    $steaguri.draggable({
      revert: "valid"
    });
 
    // permitem tarilor sa accepte steagurile
  /*  $tari.droppable({
      accept: ".steag",
      activeClass:"lumina",
      drop: function( event, ui ) {
      	Oversteag( ui.draggable , this);

      }
    });
 $("#harta").droppable({
 	accept: ".steag",
      drop: function( event, ui ) {
      	Oversteagharta( ui.draggable , this);
      }
 });
    // let the gallery be droppable as well, accepting items from the trash
    $steaguri.droppable({
      accept: ".tara",
      drop: function( event, ui ) {
        recycleImage( ui.draggable , ui.droppable);
      }
    });
*/
// inceput pentru stabilirea coordonartelor de mana
$(".imgs").draggable();
$("#body").droppable({
//sfarsit pentru stabilirea coordonatelor de mana
});
//functia de punere a steagului pe tara
  /*
function Oversteagharta($item , $location)
{
var $newitem=$item.clone();
$newitem.appendTo($location);



  };
});
*/
// functia de verificare daca steagurile sunt bine puse
/*
function Check(){
  for (x in ".imgs")
  {
    if (x.attr(''))
  }
}
*/
function Oversteag($item , $location)
{
var $newitem=$item.clone();
$newitem.appendTo($location);
$newitem.css("left","0px").css("top","0px").css("width","100%");
$newitem.css("height","100%").css("background-size","100%");


  };
