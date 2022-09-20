//AUTOR: Luiz Gustavo de Salles Pinho; 19/09/2022

// Inicio gerador

/*Variable área [START]*/

const gerar = document.getElementById("teste");
const espaco = String.fromCharCode(32);
let checkParenteses = document.getElementById("parenteses");
let checkPontos =document.getElementById("ponto")
const limparE = document.getElementById('clear');
let removePar = false;
let removePonto = false;
const copiar = document.getElementById('copiar');

var textogeral = "";
var fim1 = 0;
//chars
const newline = String.fromCharCode(10);
const tab = String.fromCharCode(9);
//

//regex
var limpaNewline = new RegExp(newline, "g");
var limpaTab = new RegExp(tab, "g");

/*Variable área [END]*/

/*Function área [START]*/

function gerarNowait() {
  //buscando a string bruta
  let textBruto = document.getElementById("txt1").value;

  //Iniciando o tratamento da string
  let txtClear = '';

  txtClear = limparCaracESP(textBruto,checkParenteses.checked,checkPontos.checked);

  //
  fim1 = 0;
  textogeral = '';
  let variaveis = localizaVar(txtClear);

  //escrevendo no campo
  document.getElementById("txt2").value = variaveis;
}

function limparCaracESP(textBruto,removePar,removePonto) {
  textBruto += espaco;
  let txtLimpando = textBruto;
  let textov3 = '';

  let textov1 


    if (removePar && removePonto){
      textov1 = textBruto.replace(/,|\.|\+|\/|;|{|}|\(|\)/g, espaco);
    }
    if (removePar && !removePonto){
      textov1 = textBruto.replace(/,|\+|\/|;|{|}|\(|\)/g, espaco);
    }
    if (!removePar && removePonto){
        textov1 = textBruto.replace(/,|\.|\+|\/|;|{|}/g, espaco);
    }
    if (!removePar && !removePonto){
      textov1 = textBruto.replace(/,|\+|\/|;|{|}/g, espaco);
  }

    let textov2 = textov1.replace(limpaNewline, espaco);
    textov3 = textov2.replace(limpaTab, espaco);
  return textov3;
}

function localizaVar(txtClear) {

  while (txtClear.indexOf("&", fim1) > -1) {
    if (fim1 < 1) {
      let inicio = txtClear.indexOf("&"); //7
      let fim = txtClear.indexOf(espaco, inicio);
      fim1 = fim;
      let teste2 = txtClear.slice(inicio, fim);

      textogeral =
        "msg('" +
        teste2 +
        ": '" +
        " + " +
        " toformattedstring(" +
        teste2 +
        "), nowait)" +
        "\n";
    } else {
      let inicio = txtClear.indexOf("&", fim1);
      let fim = txtClear.indexOf(espaco, inicio);
      fim1 = fim;

      let teste2 = txtClear.slice(inicio, fim);

      textogeral +=
        "msg('" +
        teste2 +
        ": '" +
        " + " +
        " toformattedstring(" +
        teste2 +
        "), nowait)" +
        "\n";
    }
  }

  return textogeral;
}

function limpar(){
    document.getElementById("txt1").value = '';
    document.getElementById("txt2").value = '';
}

function copiarr() {
  document.querySelector("#txt2").select();
  document.execCommand('copy');
  }
/*Function área [END]*/

/*Event área [START]*/

limparE.addEventListener('click', (e)=>{e.text 
    limpar();
}
    );

copiar.addEventListener('click', ()=>{
  copiarr();
})


/*Event área [START]*/

// Fim gerador
