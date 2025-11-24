function getFormvalue() {
    //Write your code here

	const firstName= document.querySelector('input[name="fname"]').value;
	const lastName= document.querySelector('input[name="lname"]').value;
		alert(`${firstName}  ${lastName}`);

	
}
const button= document.querySelector('input[type="submit"]');
button.addEventListener("click",(e)=>{

e.preventDefault();
getFormvalue();
});



getFormvalue();