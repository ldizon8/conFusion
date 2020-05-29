import React from 'react';
import Slideshow from 'react-slidez';





const slidesList = [
    require('../assets/1.jpg'),
    require('../assets/2.jpg')



];

const home = () => {
    return (
        <div>
            <div className = "Slides">
            <Slideshow
                showIndex
                autoplay
                useDotIndex = {true}
                showArrows = {true}
                enableKeyboard = {false}
                slideInterval={8000}
                defaultIndex={0}
                slides={slidesList}
                effect={'fade'}
                height={'80%'}
                width={'80%'}
            /></div>

            {/*<div className="Home">*/}
            {/*    <br/>*/}
            {/*    <h1>Home</h1>*/}
            {/*    <object data="https://drive.google.com/open?id=1Sx-5_oHPqYkDYWYEG0mgUcv0GgYQIRlA.pdf" type="application/pdf" width="300" height="200">*/}
            {/*        <a href="https://drive.google.com/open?id=1Sx-5_oHPqYkDYWYEG0mgUcv0GgYQIRlA">FUSION 2020 Spring Week9</a>*/}
            {/*    </object>*/}
            {/*</div>*/}
        </div>
    );
}


export default home;