let getProducts = (req,res) => {
    const db = req.app.get("db")
    db.get_products().then(products => {
        res.json(products)
    }).catch(err => console.log(err))
}

module.exports = {
    getProducts
}