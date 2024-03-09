import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 30px;
  margin-top: 15px;

  background: var(--black-gradient);
  color: var(--white-color);
  border-radius: 10px;
  border: 1px solid var(--white-transparent-color);
  box-shadow: var(--main-shadow);
`;

export const DataWrapper = styled.div`
  max-width: 100%;
  flex: 1;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: stretch;

  margin-bottom: 5px;
`;

export const PropertyWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-grow: 2;

  font-family: var(--second-font);
  font-size: 20px;

  ::after {
    content: "";
    position: relative;
    top: -12px;
    display: inline-flex;
    flex: 1;

    margin: 0 10px;
    width: 100%;
    border-bottom: 2px dotted var(--light-gray-color);
  }
`;

export const PropertyLabel = styled.span`
  margin-left: 15px;
`;

export const PropertyValue = styled.span`
  font-family: var(--main-font);
  font-size: 16px;
`;
