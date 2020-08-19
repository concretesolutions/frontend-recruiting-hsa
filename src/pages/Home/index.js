import React from 'react';
import api from '../../api';
import Title from '../../components/Title'
import Input from '../../components/Input';
import Search from '../../components/Search';
import SearchIcon from '../../assets/icons/search-icon.svg'
import './home.css';


class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            user: '',
            userName: {},
            error: '',
            repos: []

        }
    }


    cacthUser = e => {
        this.setState({ user: e.target.value })
    }

    searchUser = async () => {
        const { user, userName, error } = this.state;


        if (user) {

            await api.get(`/users/${user}`)
                .then(res => {
                    this.setState({
                        userName: res.data,
                        error: '',
                        user: ''
                    })

                    return this.props.history.push({
                        pathname: '/result',
                        state: { data: res.data }
                    })
                })
                .catch(e => this.setState({ error: "Usuário não encontrado" }))

        } else {
            this.setState({ error: 'Digite um usuário' })
        }
    }


    render() {
        const { user, userName, error } = this.state;


        return (
            <main>
                <section className="home__container">
                    <Title
                        className="title"
                        text="Github Search"
                    />

                    <div className="search__container">
                        <Input
                            placeholder="Digite o nome do usuário que deseja encontrar"
                            type="text"
                            className="input__search"
                            onChange={this.cacthUser}
                            value={user}
                        />
                        <Search
                            className="btn__search"
                            onClick={this.searchUser}
                            src={SearchIcon}
                        />

                    </div>
                        {error && <h3 className="error__message">{error}</h3>}

                </section>

            </main>
        )
    }
}

export default Home;