function doGet() {
  // Lê o arquivo do site chamado 'pagina.html'
  var saida = HtmlService.createTemplateFromFile('pagina').evaluate();
  
  // Ajusta o visual para celular e computador
  saida.addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  
  // Define o título na aba do navegador (MOUNJA SLIM FUNCIONA MESMO ? VALOR, COMPOSIÇÃO, É CONFIÁVEL ? ANÁLISE COMPLETA)
  saida.setTitle("MOUNJA SLIM FUNCIONA MESMO ? VALOR, COMPOSIÇÃO, É CONFIÁVEL ? ANÁLISE COMPLETA");
  
  return saida;
}
