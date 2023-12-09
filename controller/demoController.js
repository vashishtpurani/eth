//demo controller boilerplate code
module.exports.Demo = async(req,res)=>{
    try {
        const {aadharId} = req.body
        console.log(aadharId)
        res.json({message:"ok",status:200})
    }catch (e) {
        res.send(e)
    }
}