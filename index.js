let Alunos = [
    {id: 1, NOME: "Lula Inacio", BIM1: 9.5, BIM2: 6.0, BIM3: 6.0, BIM4: 8.0, MEDIA: 7.0},
    {id: 2, NOME: "Padre Kelmon", BIM1: 7.0, BIM2: 8.5, BIM3: 2.0, BIM4: 4.5, MEDIA: 5.5},
    {id: 3, NOME: "Bolsonaro", BIM1: 4.5, BIM2: 5.5, BIM3: 8.0, BIM4: 6.0, MEDIA: 6.0},
    {id: 4, NOME: "Ciro Gomes", BIM1: 10, BIM2: 10, BIM3: 10, BIM4: 10, MEDIA: 10}
];

for(var i = 0; i < Alunos.length; i++){
   if(Alunos[i].MEDIA >= 7){
    console.log(`${Alunos[i].id} - ${Alunos[i].NOME}: Parabéns, você foi aprovado(a)`);
   }
   if(Alunos[i].MEDIA >= 10){
    console.log(`${Alunos[i].id} - ${Alunos[i].NOME}: Parabéns, você está com 10 na média.`);
   }
   else{
    console.log(`${Alunos[i].id} - ${Alunos[i].NOME}: REPROVADO(a), MUITO BURRO(a)`);
   };
};