const mongoose =require('mongoose')

// 가급적 required true는 지양해주세요. 일일히 작성해야할 필요가 있습니다!
// 해당옵션 말고 default:"default내용"의 옵션을 넣으면 따로 작성하지 않아도 default내용이 해당 필드에 작성됩니다.
const OrderSchema = new mongoose.Schema({
    order_no: {
        type: Number, 
        unique:true 
        //unique옵션을 넣어둔다면 해당 오더번호와 중복된 값이 작성될경우 에러 처리에서도 유용하게 작성할 수 있을거에요 
    },
    user_id: {
        type:String,
        required: true
    },
    user_name: {
        type:String,

    },
    user_phone: {
        type:String,
    },
    user_address: {
        type:String,
    },
    //product_number_count는 임의로 만든 배열입니다.
    //req로 받아온 상품명: 수량을 묶어 string배열로 만들어둔것입니다.
    // 예를들어
    // {
    //     "1":3,
    //     "4":1,
    //     "2":1,
    //     "17":2,
    // }
    //위와같은 형식의 req를 받는다면 
    //product_number_count는
    //["1/3","4/1","2/1","17/2"]
    //와 같은 배열형식을 받아옵니다.
    product_number_count:{
        type:[String]
    },
    total_price: {
        type:Number,
    },
    order_status: {
        type:String,
        enum: ["상품준비중", "배송중", "배송완료"],
        required: true, 
        default: "상품준비중"
    },
    create_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Order = mongoose.model('Order',OrderSchema)
module.exports = {Order}