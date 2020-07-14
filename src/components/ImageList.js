require('./ImageList.css')
const ImageCard = require('./ImageCard')
const React = require('react')

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })
    return(
        <div className="image-list">
            {images}
        </div>
    )
}

module.exports = ImageList