import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: none;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  color: rgba(255,255,255, 0.8);
  background-color: #353536;
  box-shadow: inset 4px 4px 12px #2a2a2b, 
            inset -4px -4px 12px #404041;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: rgba(255,255,255, 0.3);
  }

}
`;
