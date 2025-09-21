import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ disabled }) => (disabled ? '#d1d5db' : '#16a34a')};
  color: ${({ disabled }) => (disabled ? '#6b7280' : 'white')};

  font-style: ${({ disabled }) => (disabled ? 'italic' : 'normal')};
  transition: background-color 0.2s ease;

  white-space: nowrap; /* keep text on one line */

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#d1d5db' : '#15803d')};
  }
`;

export default StyledButton;
