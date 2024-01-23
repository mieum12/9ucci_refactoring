import styled from "styled-components";
import {auth, db, storage} from "../firebase";
import {deleteDoc, doc, updateDoc} from "firebase/firestore";
import {deleteObject, ref } from "firebase/storage";
import React, {useContext, useState} from "react";
import {adminId} from "../admin";
import ProductAddCartForm from "./ProductAddCartForm";
import CartContext from "../store/cart-context";

// Tweet은 이전에 생성한 ITweet 인터페이스를 받게 됨
// 그 인터페이스 중 원하는 것만 추출해서 가져오기 (username, photo,tweet)
export default function Product( {id, name, description, price, photo} ) {
  const user = auth.currentUser

  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editDescription, setEditDescription] = useState(description);
  const [editPrice, setEditPrice] = useState(price);

  // CartContext를 useContext로 전달한다 연결을 설정하기 위햐
  const cartCtx = useContext(CartContext);

  //ProductItemAddForm의 onAddToCart함수를 실행하면 이곳까지 들어와 컨텍스트에 도달하게함
  const addToCartHandler = (amount) => {
    //이제 이 곳에서 컨텍스트에서 정의된 메소드 중 하나를 호출할 수 있게된다
    //이제 이 곳에 리듀서에 전달할 항목을 객체로 만들어 보낸다
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  const onDelete = async () => {
    const ok = window.confirm('이 상품을 정말로 삭제하시겠습니까?')
    if (!ok || user?.uid !== adminId) return;

    try {
      // 삭제할 문서에 대한 참조를 넣어주면 삭제
      // doc 함수를 통해 문서를 찾아온다: 만든 db안에 tweet 컬렉션 안에 존재, 문서 id는 timeline 컨포넌트에서 가져옴
      await deleteDoc(doc(db,'products',id ))
      if (photo) {
        // 우리가 만든 경로를 이용해 사진을 참조하고 있음
        // 위에서 트윗을 생성할 때 쓰는 경로와 같다
        // 이전에 우리는 사진 명과 트윗 아이디가 같게 지어줬다
        const photoRef = ref(storage, `products/${id}`)
        await deleteObject(photoRef)
      }
    } catch (e) {
      console.log(e)
    } finally {
      //
    }
  }

  const onEdit = async () => {
    if (user?.uid !== adminId) return;

    if (edit) {
      await updateDoc(doc(db, 'products',id),{
        price: editPrice,
        name: editName,
        description: editDescription
      });
      setEdit(false)
    } else {
      setEdit(true)
    }
  }
  return (
    <Wrapper>
      <Column>
        {edit ? (
          <Payload>
            <div><input
              value={editName || ''}
              onChange={(e) => setEditName(e.target.value)}
            /></div>
            <div><input
              value={editPrice || 0}
              onChange={(e) => setEditPrice(e.target.value)}
            /></div>
            <dic><input
              value={editDescription || ''}
              onChange={(e) => setEditDescription(e.target.value)}
            /></dic>
          </Payload>
        ) : <Payload>
          <Name>{name}</Name>
          <div>₩ {Number(price).toLocaleString('ko-KR')}</div>
          <div>{description}</div>
        </Payload>}
        { user?.uid === adminId ? (
          <>
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
            <EditBtn onClick={onEdit}>{edit ? 'SAVE' : 'EDIT'}</EditBtn>
          </>
        ) : null }
      </Column>
      <PhotoWrapper>
        {photo ? (<Photo src={photo}/>) : null }
      </PhotoWrapper>
      <FormWrapper>
        <ProductAddCartForm id={id} onAddToCart={addToCartHandler} />
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 20px;
  width: 70%;
  border-radius: 15px;
`
const Column = styled.div`
  margin: 10px;
  &:last-child {
    place-self: end;
  }
`
const PhotoWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`
const FormWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`
const Name = styled.span`
  font-weight: 800;
  box-shadow: inset 0 -10px 0 #D9D9D9;
  //font-size: 15px;
`
const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`
const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
`

const DeleteButton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`
const EditBtn = styled.button`
  background-color: #1c6085;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;