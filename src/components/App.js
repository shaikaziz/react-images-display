const React = require('react')
const unsplash = require('../api/unsplash')
const SearchBar = require('./SearchBar')
const ImageList = require('./ImageList')

class App extends React.Component {
    state = { images: [] }
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos?query='+term)
        this.setState({images: response.data.results})
    }

    render(){
            return (
                <div className="ui-container" >
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <div style={{height:'10px'}}></div>
                    <ImageList images={this.state.images}/>
                </div>
            )
    }
}

module.exports = App