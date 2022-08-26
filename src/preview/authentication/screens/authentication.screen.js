import { SafeArea } from "../../../components/utils/safeArea.component";

import { Register } from "../components/register.component";

export const Authentication = ({ navigation }) => {
  const nav = () => navigation.navigate("Onboarding");

  return (
    <SafeArea>
      <Register onTouch={nav} />
    </SafeArea>
  );
};
