const updateOneUserInfo = require('../../repo/updateOneUserInfo')

const update = async (req, res)=>{
    try {
      const user = req.user
        const userinfo = await updateOneUserInfo(user,req)
        return res.status(200).send({message: "SUCCESS UPDATE PROFILE",userinfo:userinfo});
      } catch (err) {
        console.error(err)        
        return res.status(400).send({ message: "FAIL UPDATE PROFILE" });
      }
}
module.exports = update


