import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Item = styled.li`
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  color: var(--light-gray-color);
`;

export const CarName = styled.span`
  padding: 5px;

  line-height: 1;

  color: var(--black-color);
  background: var(--green-color);
  border-radius: 5px;
  box-shadow: inset 0px 12px 0px rgba(255, 255, 255, 0.2);
`;
