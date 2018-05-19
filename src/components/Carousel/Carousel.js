import React from 'react'
import './Carousel.css'

export default class Carousel extends React.Component {
    render() {
        return <div id="demo" class="carousel slide" data-ride="carousel" >


            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>


            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images1-fabric.practo.com/jaws-dental-clinic-implant-centre-chennai-1459252934-56fa6ec6c5339.JPG" alt="Los Angeles" width="1100" height="500" />
                </div>
                <div class="carousel-item">
                    <img src="https://images1-fabric.practo.com/jaws-dental-clinic-implant-centre-chennai-1459252934-56fa6ec6c5339.JPG" alt="Chicago" width="1100" height="500" />
                </div>
                <div class="carousel-item">
                    <img src="https://images1-fabric.practo.com/jaws-dental-clinic-implant-centre-chennai-1459252934-56fa6ec6c5339.JPG" alt="New York" width="1100" height="500" />
                </div>
            </div>


            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    }
}