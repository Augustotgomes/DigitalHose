let estudantes = [
    {
      nome: 'Álvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    }
  ];
  let miguel = {
  nome: 'Miguel',
  media: 2,
  curso: 'Android',
  };
  let joao = {
  nome: 'João',
  media: 5,
  curso:' iOS',
  };
  
  console.log(estudantes);
  console.log("-".repeat(30));
  estudantes.push(joao);
  console.log(estudantes);
  console.log("-".repeat(30));
  estudantes.push(miguel);
  console.log(estudantes);
  console.log("-".repeat(30));