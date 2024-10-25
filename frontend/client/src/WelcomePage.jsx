import * as FormStyled from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <div
      style={{
        background: `{GREY.three}`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FormStyled.PageContainer
        style={{ border: `1px solid ${GREY.three}`, display: 'flex' }}
      >
        <div style={{ width: '45%' }}>
          <img alt="cat-lying-down" src="">
            PIC
          </img>
        </div>

        <div style={{ width: '65%', borderLeft: `1px solid ${GREY.three}` }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              width: 531,
              position: 'absolute',
              zIndex: 10,
            }}
          >
            <FormStyled.FreeGiftgTag>Free gift</FormStyled.FreeGiftgTag>
          </div>
          <FormStyled.NextDeliveryContainer>
            <h1>Your next delivery for Dorian and Ocie</h1>

            <FormStyled.ContainerText style={{ marginBottom: 15 }}>
              Hey Susie! In two days' time, we'll be charging you for your next
              order for Dorian and Ocie's fresh food.
            </FormStyled.ContainerText>

            <FormStyled.ContainerText style={{ fontWeight: 550 }}>
              Total price: £134.90
            </FormStyled.ContainerText>
          </FormStyled.NextDeliveryContainer>

          <FormStyled.NextDeliveryFooter>
            <FormStyled.DeliveryButton
              variant="primary"
              onClick={() => {}}
              style={{ width: 211, height: 30, backgroundColor: 'green' }}
            >
              See details
            </FormStyled.DeliveryButton>

            <FormStyled.DeliveryButton
              variant="secondary"
              onClick={() => {}}
              style={{
                width: 211,
                height: 30,
                border: '1px solid green',
                color: 'green',
              }}
            >
              Edit delivery
            </FormStyled.DeliveryButton>
          </FormStyled.NextDeliveryFooter>
        </div>
      </FormStyled.PageContainer>
    </div>
  );
};
