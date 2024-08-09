const cds = require("@sap/cds");
const log = cds.log('srv');
const {books} = cds.entities('bookshop');
module.exports = (srv) => {
  // srv.after("READ","books",(data,req)=>{
  //   data.map(obj=>obj.TITLE = "Change")
  // })

  srv.on("totalStock",async ()=>{
    const res =await SELECT.columns('sum(stock) as total_Stock').from(books);
    return res.total_Stock;
})
};