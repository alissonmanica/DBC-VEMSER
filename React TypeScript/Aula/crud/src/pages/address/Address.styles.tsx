import styled from 'styled-components';

export const DivFormik = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #F7F8FC;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerForm = styled.form`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px 50px;
`;

export const DivButtonForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonStyled = styled.button`
  width: 200px;
  height: 30px;
  margin: 20px 0;
  background-color: #3751FF;
  cursor: pointer;

  :hover {
    background-color: #4242cc;
  }
`;

export const HeadList = styled.div`
  display: grid;
  grid-template-columns: 100px 180px 90px 150px 136px 80px 70px auto;
  padding-left: 30px;
  border-bottom: 2px solid #DFE0EB;
`;

export const InfoUsers = styled.div`
  display: grid;
  grid-template-columns: 100px 180px 90px 150px 150px 68px 70px 118px auto;
  padding: 8px 0 0 30px;
  border-bottom: 2px solid #DFE0EB;
`;

export const EachList = styled.p`
  font-size: 14px;
  color: #9FA2B4;
`;

export const EachDesc = styled.p`
  font-size: 14px;
`;

export const LogradouroDesc = styled.p`
  width: 160px;
  font-size: 14px;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonUpdate = styled.button`
  width: 120px;
  background-color: #5db2f8;

  :hover{
    background-color: #4eaf4e;
  }
`;

export const ButtonDelete = styled.button`
  width: 120px;
  background-color: #f55151;

  :hover {
    background-color: orange;
  }
`;
