<script>
const DB = {
  assets: JSON.parse(localStorage.getItem("assets") || "[]"),
  materials: JSON.parse(localStorage.getItem("materials") || "[]"),
  suppliers: JSON.parse(localStorage.getItem("suppliers") || "[]"),
  products: JSON.parse(localStorage.getItem("products") || "[]"),
  orders: JSON.parse(localStorage.getItem("orders") || "[]"),
  spk: JSON.parse(localStorage.getItem("spk") || "[]"),
  invoices: JSON.parse(localStorage.getItem("invoices") || "[]")
};

function saveDB(){
  Object.keys(DB).forEach(k=>{
    localStorage.setItem(k, JSON.stringify(DB[k]));
  });
}

function rupiah(v){
  return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(v);
}
</script>