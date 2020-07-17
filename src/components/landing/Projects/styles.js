import styled from 'styled-components';
import preview1 from 'assets/thumbnail/ra2.jpg'
import preview2 from 'assets/thumbnail/tts.jpg'
import preview3 from 'assets/thumbnail/kds.jpg'
import preview4 from 'assets/thumbnail/robot.jpg'

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.5rem 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px; 

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
`;


export const Content = styled.div`
   flex: 1;
   padding: 0;
   margin: 0;
   width: 100%;   
   height: 110px;
   z-index: 999;
   position: absolute;
   bottom:0;
   background-color: rgba(255,255,255,.8);
   display: grid;
   grid-template-columns: 64px auto;
   grid-template-areas: 'logo description';
`;

export const Logo = styled.div`
  grid-area: logo;
  padding: 22px 10px 0 15px;
`
export const Desc = styled.div`
  padding-top: 10px;
  grid-area: description;
`

export const Thumbnail= styled.div`
  flex: 1;
  width: 100%;
  padding-top: 100%;
`;

export const Thumbnail1 = styled(Thumbnail)`
  background: url(${preview1}) ;
  background-size: contain;
`;

export const Thumbnail2 = styled(Thumbnail)`
width: 100%;
  background: url(${preview2});
  background-size: contain;
`;

export const Thumbnail3 = styled(Thumbnail)`
  background: url(${preview3});
  background-size: contain;
`;

export const Thumbnail4 = styled(Thumbnail)`
  background: url(${preview4});
  background-size: contain;
`;