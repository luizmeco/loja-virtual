
$('#btn').on('click', function () {
    var email = $('#input-email').val()
    var senha = $('#input-senha').val()
    localStorage.setItem('login', 'false')
    if(email == 'teste@teste.com' && senha == '123456'){
        localStorage.setItem('login', 'true')
        console.log(localStorage.getItem('login'))
        window.location.href = '../../index.html'
    }
    else{

        var divLoginIncorreto =  $('#login-incorreto')

        divLoginIncorreto.empty()

        var loginIncorretoHtml = `
        <span class="fs-4 text-danger">
            Email e/ou senha incorreta
        </span>
        `
       divLoginIncorreto.append(loginIncorretoHtml)

        $('#input-email').trigger('focus')

        console.log(localStorage.getItem('login'))
    }
});
