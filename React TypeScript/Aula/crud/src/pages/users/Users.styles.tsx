import styled from 'styled-components';

export const ContainerUsers = styled.div`
  width: 100%;
  min-height: 667px;
  background-color: #F7F8FC;
  padding: 20px 30px;
`;

export const TitleUsers = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
  color: #252733;
`;

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.16);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.16);
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.16);;
`;

export const TableUsers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;

export const HeadList = styled.div`
  display: grid;
  grid-template-columns: 300px 280px auto auto;
  padding-left: 30px;
  border-bottom: 2px solid #DFE0EB;
`;

export const EachList = styled.p`
  color: #9FA2B4;
  width: 200px;
  font-size: 14px;
`;

export const InfoUsers = styled.div`
  display: grid;
  grid-template-columns: 300px 280px 272px auto;
  border-bottom: 2px solid #DFE0EB;
  padding: 8px 0 8px 30px;
`;

export const EachDesc = styled.p`
  width: 200px;
  font-size: 14px;
`;