function calcular() {
    //Declaração das variáveis para obter referência dos elementos.
      var nome = document.getElementById("nome");
      var area = document.getElementById("area");
      var servico = document.getElementById("servico");
      var mensal = document.getElementById("mensal");
      var Total;

      console.log(Total);
          //Obtendo os conteúdos assim que o usuário final informar na página do site.
          var Nome = nome.value;
          var Area = Number(area.value);
          var Servico = servico.textContent;
          var Mensal = mensal.textContent;
          

          //preco base 10rs
          //poda preco normal
          //plantio +20%
          //manutencao +50%
          //mensal +100rs valor final
        
          if (Servico = "Poda") {
           Total = 10 * Area;
          } else if (Servico="Plantio") {
            Total = 12 * Area;
          } else {
            Total = 15 * Area;
          }
          if (Mensal = "Sim") {
            Total = (15 * Area) + 100;
          }
        
          
          nome.textContent = "Orçamento para " + Nome + ":";
          servico.textContent = "Tipo de serviço: " + Servico;
          area.textContent = "Área: " + Area.toFixed(2) + "m²";
          mensal.textContent = "Manutenção mensal: " + Mensal;
          Total.textContent = "Total estimado: " + Total.toFixed(2);
        }
      //Criando a referência com o botão Resultado.
      var resultado = document.getElementById("btResultado");
      //Adicionando um evento do tipo listener, para carregar a função implementada em JavaScript.
      resultado.addEventListener("click", calcular); 