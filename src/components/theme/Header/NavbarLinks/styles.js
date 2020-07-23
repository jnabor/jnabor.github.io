import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1200px;
	margin: auto;
	display: grid;
	justify-items: center;
	justify-content: center;
	grid-template-columns: 60px 124px 95px 114px;
	grid-gap: 20px;
	justify-items: center;
	@media (max-width: 520px) {
		grid-gap: 10px;
		grid-template-columns: 45px 104px 75px 94px;
	}
	@media (max-width: 380px) {
		grid-gap: 5px;
	}
`;

export const HomeIcon = styled.div`
  height: 24px;
  width: 24px;
  padding: 14px;
  border-radius: 32px;
  &:hover {
		background-color: rgba(0,0,0, 0.03);
  }

  @media (max-width: 520px) {
	padding: 8px;
  }
			 
  ${({current}) => 
	  current ? `
	  box-shadow:  4px 4px 4px #2d2d2e inset, 
			 -4px -4px 4px #3d3d3e inset;
	  ` : `
	  box-shadow:  4px 4px 4px #2d2d2e, 
			 -4px -4px 4px #3d3d3e;
	  `
	}
`
export const NavButton = styled.div`
  padding: 18px 22px;
  border-radius: 32px;
  color: rgba(255,255,255,0.7);  
  font-size: 12px;	
  letter-spacing: 2px;		 
  &:hover {
		background-color: rgba(0,0,0, 0.03);
  }

  @media (max-width: 520px) {
	padding: 12px 12px;
  }

  ${({current}) => 
	  current ? `
	  box-shadow:  4px 4px 4px #2d2d2e inset, 
			 -4px -4px 4px #3d3d3e inset;
	  ` : `
	  box-shadow:  4px 4px 4px #2d2d2e, 
	  -4px -4px 4px #3d3d3e;
	  `
	}
`
