import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';

const Search: React.FunctionComponent = () => (
    <div className="page jc-c">
        <div className="container-static d-flex fd-c ai-c">
            <Logo />
            <div className="w-100">
                <SearchBar />
            </div>
        </div>
    </div>
);

export default Search;
