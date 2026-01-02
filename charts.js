<script>
function totalRevenue(){
  return DB.invoices.reduce((s,i)=>s+i.amount,0);
}
</script>