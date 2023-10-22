import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, News, GalleryItem } from '../containers';
import { Header, Footer } from '../components';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/news/:id" component={News} />
                        <Route exact path="/" component={Home} />
                        <Route path="/galleries/:id" component={GalleryItem} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
