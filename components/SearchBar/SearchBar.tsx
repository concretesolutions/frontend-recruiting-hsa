import { useState } from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import styles from './SearchBar.module.scss';
import { useRouter } from 'next/router';
interface SearchBarProps {
    value?: string;
}
function validateRoute(url: string) {
    if (url === '') {
        return '';
    }
    const lowUrl = url.toLowerCase();
    return `/search/user/${encodeURIComponent(lowUrl)}`;
}
const SearchBar: React.FunctionComponent<SearchBarProps> = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const [inputObject, setInputObject] = useState({
        value: props.value ? props.value : ''
    });
    const router = useRouter();
    const searchIcon = <img src="/svg/search-icon.svg" alt="Búsqueda" />;
    const handleEnter = (k) => {
        if (k === 'Enter') {
            const goTo = validateRoute(searchValue);
            if (goTo !== '') {
                router.push(goTo);
            }
        }
    };
    return (
        <div className={`${styles.searchBar} main-shadow`}>
            <div className={'fg-1'}>
                <input
                    onKeyDown={(e) => handleEnter(e.key)}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                        setInputObject({ ...inputObject, value: event.target.value });
                    }}
                    name="userSearch"
                    type="text"
                    value={inputObject.value}
                />
            </div>
            <div>
                <ButtonLink
                    classes="primaryBtn"
                    content={searchIcon}
                    route={validateRoute(searchValue)}
                />
            </div>
        </div>
    );
};

export default SearchBar;
