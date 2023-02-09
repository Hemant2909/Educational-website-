let a = document.getElementById('navlist')
let b = document.getElementById('clickmenu')
let c = document.getElementById('cancelitem')
let d = document.getElementById('body')
function clickmenu(){
 
  a.style.width = '100%'
  b.style.display = 'none' 
  c.style.display = 'block'
  d.style.touchAction='none'
}
function cancelitem(){
  b.style.display ='block'
  c.style.display ='none'
  a.style.width = '0%'
  d.style.touchAction = 'auto'
}