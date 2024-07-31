interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
    onClick: () => void;
}

// function Btn({btnName}:Props) {
//     return <button type="button" className="btn btn-primary">{btnName}</button>;
// }

// export default Btn;

export const Btn = ({ children, color='primary', onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
