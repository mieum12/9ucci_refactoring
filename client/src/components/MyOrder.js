import styled from "styled-components";

export default function MyOrder ({order,index}) {

// createdAtDate를 사용하여 원하는 형식으로 날짜를 표시
  const createdAtDate = new Date(order.createdAt);
  const formattedDate = `${createdAtDate.getFullYear()}-${createdAtDate.getMonth() + 1}-${createdAtDate.getDate()}`;

  return ( <Wrapper>
    <Table>
      <thead>
        <tr>
          <th colSpan="2">주문 {index + 1}</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <th>주문 번호</th>
        <td>{order.id}</td>
      </tr>
      <tr>
        <th>주문 날짜</th>
        <td>{formattedDate}</td>
      </tr>
      <tr>
        <th>주문자</th>
        <td>{order.userInfo.name}</td>
      </tr>
      <tr>
        <th>연락처</th>
        <td>{order.userInfo.phone}</td>
      </tr>
      <tr>
        <th>주소</th>
        <td>{order.userInfo.address} {order.userInfo.detailAddress}</td>
      </tr>
      <tr>
        <th>총 결제 금액</th>
        <td>{order.totalAmount}</td>
      </tr>
      <tr>
        <th>주문 내역</th>
        <td>{order.orderedItems.map(item => (
          <div>{item.name} ({item.amount}개)</div>
        ))}</td>
      </tr>
      </tbody>
    </Table>
</Wrapper>)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

const Table = styled.table`
  width: 100%;
  margin: auto;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  th {
    background-color: #f2f2f2;
  }
  `