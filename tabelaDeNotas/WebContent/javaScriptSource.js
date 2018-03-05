/**
 * 
 */

function modify() {
		var linha = document.getElementById('linha2');
		var colunas = linha.getElementsByTagName('td');
		
		colunas[5].firstChild.nodeValue = "Reprovado";
    }

/*
$(function () {
    $(".joaoSituationClass").text("Reprovado");
});

$(function () {
    $(".quinto-td").text("aaa");
});

*/