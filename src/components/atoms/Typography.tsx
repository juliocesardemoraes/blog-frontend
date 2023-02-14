interface ITypoProps {
  Tag: any;
  children: string;
  classes?: any;
}

/**
 * Typography Element
 * @param {any} Tag The Type html tag that you want to render as text
 * @param {string} children The text for the Typography text
 * @param {any} classes Classes for html styling
 * @return {JSX.Element}
 */
function Typography({ Tag, children, ...classes }: ITypoProps): JSX.Element {
  return <Tag className={`${classes.classes}`}>{children}</Tag>;
}

export default Typography;
