interface ITypoProps {
  placeholder: string;
  onChangeHook: any;
}

/**
 * Image tag element
 * @param {string} src the file path ex: "/public/icons/faiscaLogo.svg"
 * @param {any} props classes to be built upon
 * @return {JSX.Element} img element
 */
function Input({ placeholder, onChangeHook }: ITypoProps): JSX.Element {
  return (
    <input
      placeholder={placeholder}
      onChange={(e) => {
        onChangeHook(e.target.value);
      }}
    ></input>
  );
}

export default Input;
