let slide_ativo = '0';
let progresso_principal = document.getElementById('progresso-principal');
let aux = 100/23;
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("overlay-m").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function menuSelect(tgt) {
	slide_ativo = tgt.substring(3, 6);
	let option = document.getElementById(tgt);
	option.selected = 1;
	let a = document.getElementById('conteudo');
	let b = document.getElementById('div'+slide_ativo);
	a.innerHTML = b.innerHTML;
	progresso_principal.style.width = (slide_ativo*aux)+'%';
}
function avancaSlide() {
	let parse = parseInt(slide_ativo, 10)+1;
	if (parse<32) {
		let opt = document.getElementById('opt'+parse);
		opt.selected = 1;
		slide_ativo = parse;
	}
	let a = document.getElementById('conteudo');
	let b = document.getElementById('div'+slide_ativo);
	a.innerHTML = b.innerHTML;
	progresso_principal.style.width = (slide_ativo*aux)+'%';
}
function voltaSlide() {
	let parse = parseInt(slide_ativo, 10)-1;
	if (parse>-1) {
		let opt = document.getElementById('opt'+parse);
		opt.selected = 1;
		slide_ativo = parse;
		let a = document.getElementById('conteudo');
		let b = document.getElementById('div'+slide_ativo);
		a.innerHTML = b.innerHTML;
		progresso_principal.style.width = (slide_ativo*aux)+'%';
	}
}
function voltarAoInicio(tgt){
	slide_ativo = tgt.substring(3, 6);
	let option = document.getElementById(tgt);
	option.selected = 1;
	let a = document.getElementById('conteudo');
	let b = document.getElementById('div0');
	a.innerHTML = b.innerHTML;
	progresso_principal.style.width = (slide_ativo*aux)+'%';
}
function off() {
  document.getElementById("overlay-m").style.display = "none";
}
function showContent(content) {
	let c = document.getElementById(content);
	c.style.display = 'block';
}
function hideContent(content) {
	let c = document.getElementById(content);
	c.style.display = 'none';
}
function alterarProgresso(slide, quantidade, barra) {
	let pb = document.getElementById('pb-niveis-'+barra);
	let auxiliar = 100/quantidade;
	let porcentagem = auxiliar*slide;
	pb.style.width = porcentagem+'%';
}