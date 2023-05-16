let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  let formData = new FormData(form);
  // console.log(formData);
  const name = formData.get("name");
  const country = formData.get("country");
  console.log(name,country);
});