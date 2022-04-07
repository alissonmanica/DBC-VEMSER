import styled from 'styled-components';
import GifLoading from '../images/LoadingGif.gif'

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImageLogin = styled.img.attrs({
  src: `${GifLoading}`
})`
  width: 300px;
  height: 300px;
  border-radius: 100%;
`;