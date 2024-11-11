import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SliderComponent() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <img src="https://img.freepik.com/free-photo/front-view-interior-room-design-concept_23-2148786397.jpg?t=st=1731337333~exp=1731340933~hmac=c2321e25636dab2d404cbe1fbc1ebe4031fe6b7344ef84c350a8a69c49161e11&w=996" alt="" />
                </div>

                <div className="slide">
                    <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?t=st=1731338645~exp=1731342245~hmac=1fceed47e8d2809ec2a9502ccab1fb39f17a15b179a63fa726ef44c62ba6e6ca&w=1380" alt="" />
                </div>

                <div className="slide">
                    <img src="https://img.freepik.com/free-photo/interior-room-design-with-copy-space_23-2148786425.jpg?t=st=1731338665~exp=1731342265~hmac=93fdc6dfe428505966016004018c36c7ac510327b4e58536869d044f300594e2&w=1380" alt="" />
                </div>

                <div className="slide">
                    <img src="https://img.freepik.com/free-photo/room-decor-with-potted-plants-sofa_23-2149428020.jpg?t=st=1731338684~exp=1731342284~hmac=baf89f935cb0eb482fcaf4ee3dc7d2bf8247794262e1a368794e1fb5ff4490c4&w=1380" alt="" />
                </div>

                <div className="slide">
                    <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?t=st=1731338579~exp=1731342179~hmac=cb99aecfd67333b9c33613f8821d154781c910b29c96b3cab4cc7a98315e3cb7&w=1380" alt="" />
                </div>

                <div className="slide">
                    <img src="https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178329.jpg?t=st=1731338732~exp=1731342332~hmac=e313e6217135d23c43eb2d4056ec8a2dedf725138924283674d7a431c39b1324&w=1380" alt="" />
                </div>
            </Slider>
        </div>
    );
}

