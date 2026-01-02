<script>
function addAsset(name,value,lifeYear){
  DB.assets.push({
    id: generateCode("AST"),
    name,
    value,
    lifeYear,
    monthlyDep: value/(lifeYear*12)
  });
  saveDB();
}
</script>