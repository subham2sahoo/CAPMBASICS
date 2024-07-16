const cds = require("@sap/cds");
module.exports = (srv) => {
  srv.on("READ","books",(_,next)=>{
    console.log("hit");
    return next()
  })
// srv.on("READ","books",(_,next)=>{
//     return [
//         {
//             "ID": cds.utils.uuid(),
//             "TITLE": "The Hitch Hiker's Guide To The Galaxy",
//             "author_ID": "01afafdf-0b4a-475b-b107-77fd3c9157da"
//           },
//           {
//             "ID": cds.utils.uuid(),
//             "TITLE": "Mostly Harmless",
//             "author_ID": "01afafdf-0b4a-475b-b107-77fd3c9157da"
//           }
//     ]
//   })

};