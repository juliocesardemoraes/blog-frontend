import styled from "styled-components";
import "./styles/container.css";

interface ITypoProps {
  center?: boolean;
  gap?: string;
  children?: Array<JSX.Element> | JSX.Element;
}

/**
 * Image tag element
 * @param {boolean} center Optional parameter that renders a centered div
 * @param {string} gap CSS property Gap between itens
 * @return {JSX.Element} img element
 */
function Container({ center = false, gap, children }: ITypoProps): JSX.Element {
  const Container = styled.div`
    justify-content: ${center && "center"};
    align-items: ${center && "center"};
    gap: ${gap};
  `;
  return <Container className={"flex__container"}>{children}</Container>;
}

export default Container;
