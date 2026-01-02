<script>
function createSPK(orderId){
  DB.spk.push({
    id: generateCode("SPK"),
    orderId,
    status:"PROCESS"
  });
  const o = DB.orders.find(x=>x.id===orderId);
  o.status="PRODUCTION";
  saveDB();
}
</script>