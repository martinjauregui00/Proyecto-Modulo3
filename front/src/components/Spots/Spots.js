import React from 'react'
import Mapa from './media/Mapa.png'

const Spots = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src="https://media.istockphoto.com/id/1396300777/es/foto/entrenamiento-de-buceo-en-la-piscina-con-un-instructor-sonriente.jpg?b=1&s=170667a&w=0&k=20&c=Z7PBIBYOsz4LlFkiS7zS0uuBnl35EzjHW-cqoaGJgtU=" alt='foto' />
                <div className='col-2'>
                    <h2>Get to know us</h2>
                    <span className='line'></span>
                    <p>Scuba diving is one of those activities that everyone says they want to do one day, but often never get the chance to experience. If you’re reading this right now, you are one of the lucky ones attempting to put their money where their mouths are and give scuba diving a try to explore the underwater world to explore unbelievable dive sites. 
                        </p>
                        <p>But before you dive into deep waters or off dive boats, we must cover the basics of what recreational scuba diving is and how you can do it.</p>
                </div>
            </div>
        </div>
    )
}

export default Spots;



// function Spots() {
//     return (
//         <>
//         <h2 id= "title2">Find your spot</h2>
//         <img id="mapa" src={Mapa}/>
//         <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
//         </>
//     )
// }

// export default Spots;