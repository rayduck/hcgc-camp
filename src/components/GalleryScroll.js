import React, {
    Component
}
from 'react'

class GalleryScroll extends Component {
    constructor() {
        super()
        this.Scroll = this.Scroll.bind(this)
        this.state = {
            IB: '../html/images/IB.jpg',
            
        }
    }

    Scroll() {
        window.setInterval(changeImage, 3000);

        function changeImage() {
            var i = Math.floor((Math.random()));
        }
    }
    render() {
        var AR = ['../html/images/AR.jpg'];
        var IB = [require('../html/images/IB.jpg'), require('../html/images/AR.jpg')]
        var DIY = ['../html/images/DIY.jpg'];
        var Movie = ['../html/images/Movie.jpg'];
        return (
            <img src={IB[0]} alt='' />
        )
    }
}

export default GalleryScroll;
