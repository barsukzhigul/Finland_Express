// "use strict"
//
// document.addEventListener('DOMContentLoaded', function () {
//     const callback = document.getElementById('callback');
//     callback.addEventListener('submit', formSend);
//
//     async function formSend(e) {
//         e.preventDefault();
//
//         let error = callbackValidate(callback);
//
//         if (error===0){
//
//         }else{
//             alert('заполните обязательные поля');
//         }
//     }
//
//     function callbackValidate(callback) {
//         let error = 0;
//         let callbackReq = document.querySelectorAll('._req');
//
//         for (let index = 0; index < callbackReq.length; index++) {
//             const input = callbackReq[index];
//             callbackRemoveError(input);
//
//             if(input.classList.contains('_email')) {
//                 if (emailTest(input)) {
//                     callbackAddError(input);
//                     error++;
//                 } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
//                     callbackAddError(input);
//                     error++
//                 }else{
//                     if (input.value === '') {
//                         callbackAddError(input);
//                         error++;
//                     }
//                 }
//             }
//             return error;
//         }
//     }
//     function callbackAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function callbackRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
// });