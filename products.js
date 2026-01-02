<script>
function addProduct(name,bom,labor,margin){
  const hpp = calcHPP(bom,labor);
  DB.products.push({
    id: generateCode("PRD"),
    name,
    bom,
    labor,
    hpp,
    price: hpp*(1+margin/100)
  });
  saveDB();
}
</script>