import {auth, db, storage} from "../firebase";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {updateProfile} from "firebase/auth";
import {collection, getDocs, limit, orderBy, query, where} from "firebase/firestore";
import PostProductsForm from "../components/PostProductsForm";
import {adminId} from "../admin";
import MyOrder from "../components/MyOrder";

export default function MyPage(){
  const user = auth.currentUser
  const [avatar, setAvatar] = useState(user?.photoURL)
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user?.displayName);
  const [orders, setOrders] = useState([])
  const onAvatarChange = async (e) => {
    const {files} = e.target
    if (!user) return;

    if(files && files.length===1) {
      const file = files[0]
      // 1. user 이미지를 저장할 수 있는 ref를 만들어야한다
      // 기존의 이미지를 덮어쓰기할 것이기때문에 유저아이디로 프로필 파일 이름을 저장한다
      const locationRef = ref(storage, `avatars/${user?.uid}`)
      // 2. 파일 저장
      const result = await uploadBytes(locationRef, file)
      // 3. 저장된 파일의 url을 가져옴, 상태도 함께 업데이트
      const avatarUrl = await getDownloadURL(result.ref)
      setAvatar(avatarUrl)
      // 4. 유저 프로필 업데이트
      await updateProfile(user, {
        photoURL: avatarUrl
      })
    }
  }

  const onEdit = async () => {
    if (!user) return;

    if (edit) {
      await updateProfile(user, {
        displayName: name,
      });
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const fetchOrders = async () => {
    const orderQuery = query(collection(db, 'order'),
      where('userId', '==', user?.uid),
      orderBy('createdAt','desc'),
      )
    // getDocs에 쿼리를 전달해주면 스냅샷 반환
    const snapshot = await getDocs(orderQuery)
    const orders = snapshot.docs.map((doc)=>{
      const {userInfo, orderedItems, createdAt, userId, totalAmount} = doc.data()
      return {
        userInfo, orderedItems, createdAt, userId, totalAmount,
        id: doc.id
      };
    });
    setOrders(orders)
  }

  const orderList = orders.length === 0
    ? '주문 내역이 없습니다!'
    : orders.map((item, idx) => (
      <MyOrder key={item.id} order={item} index={idx} />
    ));

  useEffect(()=>{
    fetchOrders()
  },[])

  return (
    <Wrapper>
      <h3>나의 프로필</h3>
      <AvatarUpload htmlFor='avatar'>
        { avatar ? (
          <AvatarImg src={avatar}/>
        ) : (
          <svg
            data-slot="icon"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
        )}
      </AvatarUpload>
      <AvatarInput
        onChange={onAvatarChange}
        id='avatar'
        type='file'
        accept='image/*'
      />
      { edit ? (
        <input
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <div>
          {/*
          아래처럼 짧게 줄일 수 있다!
          {user?.displayName ? user.displayName : 'Anonymous' }
          */}
          <Name>{user?.displayName ?? 'Anonymous' }</Name>
          <EditBtn onClick={onEdit}>{ edit ? 'SAVE' : 'EDIT' }</EditBtn>
        </div>
      )}
      <Email>이메일: {user?.email}</Email>
      <CreatedAt>가입일: {user?.metadata.creationTime}</CreatedAt>

      {/* 나의 주문한 정보*/}
      <Order>
        <h3>나의 주문 정보 목록</h3>
        {orderList}
      </Order>

      {/*관리자 전용 상품 등록 폼*/}
      {(user?.uid === adminId) ? <PostProductsForm/> : ''}

    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  gap: 10px;
`;
const AvatarUpload = styled.label`
  //overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`;

const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const AvatarInput = styled.input`
  display: none;
`;
const Name = styled.span`
  font-size: 22px;
  box-shadow: inset 0 -10px 0 #D9D9D9;
`;
const Email = styled.span`
  color: #8c8c8c;`
const CreatedAt = styled.span`
  color: #8c8c8c;
`
const EditBtn = styled.button`
  background-color: #1c6085;
  color: white;
  font-weight: 600;
  border: 1px solid ;
  font-size: 10px;
  padding: 5px 10px;
  margin-left: 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;
const Order = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
`