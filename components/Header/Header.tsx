import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
interface HeaderProps {
    value?: string;
}
const Header: React.FunctionComponent<HeaderProps> = (props) => (
    <div className={`container-full`}>
        <div className={`side-bar`}>
            <Logo small />
        </div>
        <div className={`side-container`}>
            <SearchBar value={props.value} />
        </div>
    </div>
);

export default Header;
