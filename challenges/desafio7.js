db.produtos.find({
  tags: {
    $exists: 0,
  }, 
  vendidos: {
    $ne: 50,
  },
}, {
  nome: 1, vendidos: 1, _id: 0, 
});
