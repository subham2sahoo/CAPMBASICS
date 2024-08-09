const cds = require("@sap/cds");
module.exports = (srv) => {
    const { PROJECT } = cds.entities('TRANS_SRV');
    srv.on("Project_Fun", async (req, res) => {
        // debugger
        const data = JSON.parse(req.data.items);
        if (data.FLAG === "UPDATE") {
            const items = data.item;
            items.forEach(async item => {
                let PROJ_NO = item.PROJ_NO
                    , REGISTER = item.REGISTER;
                await UPDATE(PROJECT, PROJ_NO).with({
                    REGISTER: REGISTER
                })
            })
        }
    });
};