import {
  PictureLarge,
  PictureMedium,
  Column,
  ContainerLarge,
  ContainerMedium,
  Row,
  Label,
} from "./buttons.styles";

export const Buttons = ({ goBack }) => (
  <>
    <Row>
      <ContainerLarge onPress={goBack}>
        <PictureLarge
          source={{
            uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
          }}
        />
        <Label variant="titleBig">Cafe</Label>
      </ContainerLarge>
      <Column>
        <ContainerMedium onPress={goBack}>
          <PictureMedium
            source={{
              uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
            }}
          />
          <Label variant="titleMedium">Cafe</Label>
        </ContainerMedium>
        <ContainerMedium onPress={goBack}>
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
      <ContainerMedium onPress={goBack}>
        <PictureMedium
          source={{
            uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
          }}
        />
        <Label variant="titleMedium">Cafe</Label>
      </ContainerMedium>
      <ContainerMedium onPress={goBack}>
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
