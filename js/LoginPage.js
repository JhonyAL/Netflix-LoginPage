const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target }) => { 
   const span = target.previousElementSibling; 
   span.classList.add('label-input'); 
 		span.classList.remove('span')
 } 
  
 const handleFocusOut = ({ target }) => { 
   if (target.value === '') { 
    const span = target.previousElementSibling; 
     span.classList.remove('label-input');
 			 span.classList.add('span') 
   } 
 }

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
