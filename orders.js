<script>
function createOrder(customer,productId,qty){
  const p = DB.products.find(x=>x.id===productId);
  DB.orders.push({
    id: generateCode("ORD"),
    customer,
    productId,
    qty,
    total: p.price*qty,
    status:"NEW"
  });
  saveDB();
}
</script>