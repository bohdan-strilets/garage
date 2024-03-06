import Header from "../Header";
import { LayoutProps } from "src/types/props/LayoutProps";
import { Wrapper } from "./Layout.styled";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;
