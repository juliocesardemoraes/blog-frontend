import styled from "styled-components";
import "./styles/container.css";

interface ITypoProps {
  center?: boolean;
  gap?: string;
  children?: Array<JSX.Element> | JSX.Element;
}

const ContainerDiv = styled.div<ITypoProps>`
  justify-content: ${(props) => props.center && "center"}
  align-items: ${(props) => props.center && "center"};
  gap: ${(props) => props.gap};
`;

/**
 * Image tag element
 * @param {ITypoProps} props ignore this param, only center and gap are valid
 * @param {boolean} center center the container
 * @param {string} gap gap between children
 * @return {JSX.Element} img element
 */
function Container(props: ITypoProps): JSX.Element {
  return (
    <ContainerDiv {...props} className={"flex__container"}>
      {props.children}
    </ContainerDiv>
  );
}

export default Container;
