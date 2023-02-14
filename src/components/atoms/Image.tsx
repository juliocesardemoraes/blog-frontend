import styled from "styled-components";

interface ITypoProps {
  src: string;
  width?: number;
  height?: number;
}

const ImageComponent = styled.img`
  width: ${(width) => `${width}px`};
  height: ${(height) => `${height}px`};
`;

/**
 * Image tag element
 * @param {string} src the file path ex: "/public/icons/faiscaLogo.svg"
 * @return {JSX.Element} img element
 */
function Image({ src, width = 48, height = 48 }: ITypoProps): JSX.Element {
  return (
    <ImageComponent width={width} height={height} src={src}></ImageComponent>
  );
}

export default Image;
