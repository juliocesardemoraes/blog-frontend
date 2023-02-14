import styled from "styled-components";

interface ITypoProps {
  width?: number;
  height?: number;
  children?: JSX.Element | Array<JSX.Element>;
  border?: boolean;
  radius?: string;
}

const ButtonDiv = styled.div<ITypoProps>`
  width: ${(props) => (props.width ? props.width - 2 : 48)}px;
  height: ${(props) => (props.height ? props.height - 2 : 48)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -0.1rem;
  transition: 1s all;
  border-radius: ${(props) => props.radius || "0 1rem 1rem 0"};
  border: ${(props) => (props.border ? "2px solid #222" : "none")};

  &:hover {
    cursor: pointer;
    background: #222;
    transition: 1s all ease-in-out;
    color: #fff;

    img {
      filter: invert(1);
      transition: 1s all ease-in-out;
    }
  }
`;

/**
 * Image tag element
 * @param {any} props classes to be built upon
 * @return {JSX.Element} img element
 */
function Button(props: ITypoProps): JSX.Element {
  return <ButtonDiv {...props}>{props.children}</ButtonDiv>;
}

export default Button;
