<script>
function createInvoice(orderId){
  const o = DB.orders.find(x=>x.id===orderId);
  DB.invoices.push({
    id: generateCode("INV"),
    orderId,
    amount:o.total,
    status:"UNPAID"
  });
  saveDB();
}

function printInvoice(){
  window.print();
}
</script>