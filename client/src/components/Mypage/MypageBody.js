import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const MyPageBody = () => {
  const [userinfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://react-cart-88b00-default-rtdb.firebaseio.com/users.json"
      );
      if (!response.ok) {
        throw new Error("오류가 발생했습니다!!!");
      }

      const responseData = await response.json();
      const User = [];
      //key는 우리가 가져오는 id
      for (const key in responseData) {
        User.push({
          id: key,
          name: responseData[key].name,
          address: responseData[key].address,
          detailAddress: responseData[key].detailAddress,
          phone: responseData[key].phone,
        });
      }

      setUserInfo(User);
    };

    fetchUser()
      .then()
      .catch((error) => console.log("오류,,,", error));
  }, []);

  // TODO : user정보 가져오기 map 말로 로그인 유저만 가져오는걸로 바꾸기
  const UserInfo = userinfo.map((user) => (
    <div>
      <img
        src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
        alt="profile-img"
        style={{ height: "300px" }}
      />
      <div>
        address = {user.address} {user.detailAddress}
      </div>
      <div>phoneNumber = {user.phone}</div>
    </div>
  ));

  return (
    <>
      <div>{UserInfo}</div>
      <Button
        style={{ width: "100px", fontWeight: "600", fontSize: "20px" }}
        onClick={() => {
          navigate("/edit");
        }}
      >
        Edit
      </Button>
    </>
  );
};

export default MyPageBody;
