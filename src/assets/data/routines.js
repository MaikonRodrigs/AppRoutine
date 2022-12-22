const Routines = {
  routine: [
    {
      title: "acordar",
      hour: "08:40",
      description: "se alongar e beber 1 copo de agua",
      next: "08:50 FAZER CAFÉ",
      color: "var(--wake)",
      id: '001',
    },
    {
      title: "FAZER CAFÉ",
      hour: "08:50",
      description: "FAZER O CAFÉ PRETO E COLOCAR NA GARRAFA",
      next: "08:50 FAZER CAFÉ",
      color: "var(--food)",
      id: '001',
    },
  ],
};

export default Routines;