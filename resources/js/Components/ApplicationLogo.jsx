import Logo from '../../images/logo.png'; 

export default function ApplicationLogo(props) {
    return (
        <img src={Logo} alt="logo" className={props.width ? props.width : 'w-10'} />
    );
}
