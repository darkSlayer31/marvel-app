import { Component } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import './app.scss';
import vision from '../../resources/img/vision.png';


class App extends Component {

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className='app'>
                <AppHeader/>
                <main>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList onCharSelected={this.onCharSelected} />
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar} />
                        </ErrorBoundary>
                    </div>
                </main>
                <img className="bg-decoration" src={vision} alt="vision"></img>
            </div>
        );
    }
}

export default App;
