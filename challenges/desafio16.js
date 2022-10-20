db.produtos.updateOne({ 
  nome: { 
    $in: ["Big Mac"],
    },
}, {
  $currentDate: {
    ultimaModificacao: { $type: "timestamp" },
  },
});
db.produtos.find({
  ultimaModificacao: {
    $exists: 1,
  },
 }, {
  nome: 1, _id: 0, 
});