import styles from './Logo.module.scss';

interface LogoProps {
    small?: boolean;
}

const Logo: React.FunctionComponent<LogoProps> = (props) => (
    <div className={`${styles.logo} ${props.small && styles.small} ai-c`}>
        <div className={`${styles.brand}`}>Github</div>
        <div className={`${styles.feat}`}>Search</div>
    </div>
);

export default Logo;
