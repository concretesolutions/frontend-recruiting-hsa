import Link from 'next/link';

interface ButtonProps {
    classes: string;
    content: unknown;
    route: string;
}

const ButtonLink: React.FunctionComponent<ButtonProps> = (props) => (
    <Link href={props.route}>
        <a className={`btnLink ${props.classes}`}>{props.content}</a>
    </Link>
);

export default ButtonLink;
