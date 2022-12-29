import React from 'react'
import Foto1 from './media/foto1.png'
import Foto2 from './media/foto2.png'
import Foto3 from './media/foto3.png'

const Materials = () => {
    return (
        <div className='materials' id='materials'>
            <div className='container'>
                <h2>Our Courses</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={Foto1} alt='img1'/>
                        <p>If you want to get started with diving, if its your first time you should get this course. You will get a pack of 10 classes and learn how to dive safely</p>
                        <p><span>35,50€</span></p>
                        <p>LEARN HOW TO DIVE</p>
                    </div>
                    <div className='card'>
                        <img src={Foto2} alt='img2'/>
                        <p>With this pack, apart from what you get in the first pack, 10 classes, you will also have the opportunity to take the bautism and get your first step to get your degree in diving.</p>
                        <p><span>45,50€</span></p>
                        <p>BAPTISM</p>
                    </div>
                    <div className='card'>
                        <img src={Foto3} alt='img3'/>
                        <p>With this special pack, apart from a pack of 20 classes and bautism you will have a trip to Canary Islands to have a dive there and enjoy the nature.</p>
                        <p><span>150,00€</span></p>
                        <p>BAUTISM + TRIP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materials;
