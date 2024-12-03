export async function verificarLogin(){
    $('#comprar').on('click', ()=>{
        if(localStorage.getItem('login') == 'true'){
            window.location.href = './checkout.html'
        }else{
            window.location.href = './login.html'
        }
    })
}
