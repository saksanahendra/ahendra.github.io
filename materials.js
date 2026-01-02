<script>
function addMaterial(name,cost,stock){
  DB.materials.push({
    id: generateCode("MAT"),
    name,
    cost,
    stock
  });
  saveDB();
}
</script>