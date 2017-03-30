import React, {
    Component
}
from 'react'

class GalleryScroll extends Component {
    constructor() {
        super()
        this.Scroll = this.Scroll.bind(this)
        this.state = {}
    }
    componentWillMount() {
        this.Scroll()
    }

    componentDidMount() {
        var IB = ['../../html/images/IB.jpg'];
        var AR = ['../../html/images/AR.jpg'];
        var DIY = ['../../html/images/DIY.jpg'];
        var Movie = ['../../html/images/Movie.jpg'];

    }
    Scroll() {
        window.setInterval(changeImage, 3000);
        function changeImage() {
            var i = Math.floor((Math.random()));
        }
    }
    render() {
        return (
            <img src="__dirname + ./html/images/IB.jpg" alt='' />
        )
    }
}

export default GalleryScroll;
