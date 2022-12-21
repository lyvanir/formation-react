import {useState} from "react";
import pokeball from "../../assets/images/pokeball.svg"

interface ISearchCallback {
    searchCallback: (searchTerms: string) => void
}

const SearchBar = ({searchCallback}: ISearchCallback) => {

    const [search, setSearch] = useState('');

    const handleChange = (e: any) => {
        setSearch(e.target.value);
    };

    return (
        <section className="container-searchbar">
            <article className="content-searchbar">
                <h1 className="inter-bold title-search">Which Pokémon do you want to catch?</h1>
                <div className="inline-inp-btn">
                    <input type="text" name="searchb" id="searchb" className="search-input"
                           placeholder="Ex: Pikachu..." autoComplete="off" value={search}
                           onChange={(e) => handleChange(e)}/>
                    <button className="btn-search" onClick={() => searchCallback(search)}>
                        <svg className="w-6 h-6" width="24" height="24" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </article>
            <article className="container-pokeball">
                <img src={pokeball} alt="Pokeball" className="pokeball"/>
            </article>
        </section>
    )
}

export default SearchBar