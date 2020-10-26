import styles from './IconTextItem.module.scss';

interface IconTextItemProps {
    icon: string;
    text: string | number;
}

const IconTextItem: React.FunctionComponent<IconTextItemProps> = (props) => (
    <p className={`${styles.iconTextItem} ai-c fw-l c-neutro mb-1`}>
        <img src={props.icon} alt="Favoritos" className={`mr-1`} />
        {props.text}
    </p>
);

export default IconTextItem;
