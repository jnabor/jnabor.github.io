import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const AppBar = styled.div`
  background-color: rgba(53,53,54, .97);
  display: block;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export const IntroWrapper = styled.div`

  padding: 220px 0 0 0;
  display: grid;
  grid-template-columns: 192px auto 50%;
  grid-template-areas: 'intro details thumbnail';

  @media (max-width: 1330px) {
    grid-template-columns: 340px auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'intro thumbnail'
    'details thumbnail';
  }

  @media (max-width: 1100px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'intro'
    'details' 
    'thumbnail';
  }
`;

export const IntroText = styled.div`
  grid-area: intro;
  margin: auto;
`
export const Details = styled.div`
  grid-area: details;
  margin: auto 10px;

  @media (max-width: 1330px) {
    text-align: center;
  }

  @media (max-width: 1100px) {
    margin: auto;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 28pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
      margin: auto;
      text-align: center;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  grid-area: thumbnail;

  @media (max-width: 1330px) {
    margin-left: 40px;
  }

  @media (max-width: 1100px) {
    width: 100%;
    margin: auto;
  }

  img {
    width: 100%;
  }
`;
