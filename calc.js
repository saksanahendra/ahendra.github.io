<script>
function totalAssetDep(){
  return DB.assets.reduce((s,a)=>s+a.monthlyDep,0);
}

function calcHPP(bom,labor){
  let mat = 0;
  bom.forEach(b=>{
    const m = DB.materials.find(x=>x.id===b.materialId);
    mat += m.cost * b.qty;
  });
  return mat + labor + totalAssetDep();
}
</script>