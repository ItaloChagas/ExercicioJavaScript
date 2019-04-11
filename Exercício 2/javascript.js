    var botao = document.querySelector("#botao");
    botao.addEventListener("click", function(evt){
        evt.preventDefault();
        var formulario = document.cadastro;
        var nome = formulario.nome.value;
        var rg = formulario.rg.value;
        var cpf = formulario.cpf.value;
        var endereco = formulario.endereco.value;
        var genero = formulario.genero.value;
        var data = formulario.datanasc.value;
        var civil = formulario.civil.value;

        NomeValido = nome.trin().length > 0;
        console.log(NomeValido);

        var relatorio = document.querySelector("#relatorio");
        relatorio.textContent += nome + "\n";
        relatorio.textContent += rg + "\n";
        relatorio.textContent += cpf + "\n";
        relatorio.textContent += endereco + "\n";
        relatorio.textContent += genero + "\n";
        relatorio.textContent += data + "\n";
        relatorio.textContent += civil + "\n";


        
        console.log("botao clicado");


    });
