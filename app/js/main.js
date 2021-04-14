const element = document.querySelector("#footer__callback");
element.onclick = async()=>{
    console.log(await fetch("/", {method:"POST", body:JSON.stringify({})}))
}