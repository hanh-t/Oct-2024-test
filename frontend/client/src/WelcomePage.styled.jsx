export const PageContainer = styled.div`
  display: flex;
  border: 1px solid ${GREY.four};
  border-radius: 4px;
  background: ${GLOBAL.white};
`;

export const NextDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 24px;
    color: green;
    font-weight: 600;
  }
`;

export const ContainerText = styled.p`
  font-size: 14px;
  color: ${GREY.ten};
  padding-bottom: 8px;
`;

export const FreeGiftgTag = styled.div`
  text-transform: uppercase;
  background: pink;
  transform: rotate(14deg);
  padding: 3px 10px;
  font-weight: 500;
  color: purple;
`;

export const DeliveryButton = styled(Button)``;

export const NextDeliveryFooter = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
