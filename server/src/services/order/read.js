const findOrderById = require('../../repo/findOrderById');
const findAllOrder = require('../../repo/findAllOrder');
const checkAdmin = require('../../repo/checkAdmin')
const read = async (req, res)=>{
    try {
      const user_id = req.user.user_id
      //repo내에 어드민인지 아닌지 체크하는 함수가 있습니다. (true/false를 반환합니다.)
      const isAdmin = await checkAdmin(user_id)
      // 만약 어드민이라면...
      // 같은 라우터에서도 전체 Order를 조회할 수 있고
      if (isAdmin){
        //findAllOrder가 전체적인 주문정보를 굳이 가져올필요가 없다면.
        //findAllOrder함수에서 매핑을 통해서 필요한정보만 리턴해도 되겠죠?
        const order = await findAllOrder();
        return res.status(200).send({ message: "주문 조회 성공", order });

      //만약 유저라면...
      //req.user내 user_id를 이용해서 해당유저의 Order를 가져온다.
      }else{
        //우선 중요한점은 유저의 주문내역 전체를 조회하는게 중요할것같습니다.
        //유저들의 주문이력 전체를 가져오고 프론트엔드단에서 가공하는게 좋아보입니다.
        //가공의 편의를 위해서 최신순으로 상품을 정렬해서 반환합니다.
        const order = await findOrderById(user_id)
        return res.status(200).send({ message: "주문 조회 성공", order });
      }

      } catch (err) {
        console.error(err)        
        return res.status(400).send({ message: "주문 조회 실패" });
      }
}
module.exports = read 