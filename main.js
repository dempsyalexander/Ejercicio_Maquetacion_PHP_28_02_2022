addEventListener("DOMContentLoaded",async(e)=>{
  let peticion = await fetch("api.php");
  let text = await peticion.text();
  alert(text);
})