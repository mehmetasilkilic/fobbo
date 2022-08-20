import {
  PictureLarge,
  PictureMedium,
  Column,
  ContainerLarge,
  ContainerMedium,
  Row,
  Label,
} from "./buttons.styles";

export const Buttons = () => (
  <>
    <Row>
      <ContainerLarge>
        <PictureLarge
          source={{
            uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
          }}
        />
        <Label variant="title">Cafe</Label>
      </ContainerLarge>
      <Column>
        <ContainerMedium>
          <PictureMedium
            source={{
              uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
            }}
          />
          <Label variant="titleMedium">Cafe</Label>
        </ContainerMedium>
        <ContainerMedium>
          <PictureMedium
            source={{
              uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
            }}
          />
          <Label variant="titleMedium">Cafe</Label>
        </ContainerMedium>
      </Column>
    </Row>
    <Row>
      <ContainerMedium>
        <PictureMedium
          source={{
            uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
          }}
        />
        <Label variant="titleMedium">Cafe</Label>
      </ContainerMedium>
      <ContainerMedium>
        <PictureMedium
          source={{
            uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
          }}
        />
        <Label variant="titleMedium">Cafe</Label>
      </ContainerMedium>
    </Row>
  </>
);
