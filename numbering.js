<script>
function generateCode(prefix){
  const d = new Date();
  const ym = d.getFullYear().toString().slice(2)+(d.getMonth()+1).toString().padStart(2,"0");
  const key = prefix+ym;
  let n = parseInt(localStorage.getItem(key)||"0")+1;
  localStorage.setItem(key,n);
  return `${prefix}-${ym}-${n.toString().padStart(4,"0")}`;
}
</script>