import styled from "styled-components";

interface ContainerProps {
  completed: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.completed ? "#4caf50" : "#e74c3c")};
  background-color: ;
  padding: 1rem;
  border-radius: 5px;
  width: 50rem;
  color: white;
  @media (max-width: 992px) {
    width: 40rem;
  }
  @media (max-width: 676px) {
    width: 20rem;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
