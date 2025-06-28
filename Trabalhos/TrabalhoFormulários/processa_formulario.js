let nome_elem = document.querySelector("#nome");
let gen_elem = document.querySelector("#genero");
let civil_elem = document.querySelector("#estadoCivil");
let data_elem = document.querySelector("#data_nascimento");
let tel_elem = document.querySelector("#telefone");
let email_elem = document.querySelector("#email");
let pais_elem = document.querySelector("#pais");
let coment_elem = document.querySelector("#comentarios");


function processar_formulario(){

    let nome = nome_elem.value;
    let genero = gen_elem.value;
    let estadoCivil = civil_elem.value;     
    let data = data_elem.value;
    let anoNascimento = new Date(data).getFullYear();
    let telefone = tel_elem.value;
    let email = email_elem.value;
    let paises = pais_elem.value;
    let comentarios = coment_elem.value;


    if (nome.length < 4) {
        alert("O nome deve ser completo e possuír pelo menos 4 caracteres. ")
        nome_elem.focus();
        return false;
    }

    if (anoNascimento > 2005) {
        alert("Você deve ter pelo menos 18 anos, não oferecemos jovem aprendiz. ");
        data_elem.focus();
        return false;
    }   
    
    if (telefone.length < 18) {
        alert("O telefone deve incluir código do país e DDD, além do número de telefone como hífen no meio. ")
        tel_elem.focus();
        return false;
    }

    if (!email.includes("@gmail.com")) {
        alert("O email deve ter @gmail.com e para ser válido. ")
        email_elem.focus();
        return false;
    }

    let habilidades = [];
    document.querySelectorAll('input[name="habilidades"]:checked').forEach((el) => {habilidades.push(el.value);});
    
    let mensagem = `
        Nome: ${nome}
        Gênero: ${genero}
        Estado civil: ${estadoCivil}
        Data de nascimento: ${data}
        Telefone: ${telefone}
        Email: ${email}
        País: ${paises}
        Habilidades: ${habilidades.length > 0 ? habilidades.join(", ") : "Nenhuma"}
        Comentários: ${comentarios || "Nenhum"}
    `;

    alert("Dados enviados com sucesso:\n" + mensagem);
    return false;
}
        
