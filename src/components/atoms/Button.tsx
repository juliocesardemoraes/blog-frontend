import styled from "styled-components";

interface ITypoProps {
  width?: number;
  height?: number;
  children?: JSX.Element | Array<JSX.Element>;
  border?: boolean;
  radius?: string;
}

/**
 * Image tag element
 * @param {string} src the file path ex: "/public/icons/faiscaLogo.svg"
 * @param {any} props classes to be built upon
 * @return {JSX.Element} img element
 */
function Button({
  width = 50,
  height = 50,
  children,
  border = false,
  radius = "0 1rem 1rem 0",
}: ITypoProps): JSX.Element {
  const ButtonDiv = styled.div`
    width: ${width - 2}px;
    height: ${height - 2}px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -0.1rem;
    transition: 1s all;
    border-radius: ${radius};
    border: ${border ? "2px solid #222" : "none"};

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
  return <ButtonDiv>{children}</ButtonDiv>;
}

export default Button;
