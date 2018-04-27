// Expressões Regulares

// ^ -> negação, utilizado dentro de lista

var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.';

text.match(/[^abc]/g); //(683)

text.match(/[^aeiou]/g); //(497)

// \W -> qualquer caractere, menos os alfańuméricos

text.match(/\W/g); //(168)

// \D -> qualquer caractere, menos os dígitos

text.match(/\D/g); //(756) 

// \S -> qualquer caractere, menos espaço em branco

text.match(/\S/g); //(652) 

// Repetidores

// intervalo {n, m} - item anterior ao menos n vezes, e no máximo m vezes

text.match(/\d{2,4}/g); //(7) ["13", "1804", "18", "1875", "1817", "1821", "1820"]