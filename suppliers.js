<script>
function addSupplier(name,contact){
  DB.suppliers.push({
    id: generateCode("SUP"),
    name,
    contact
  });
  saveDB();
}
</script>