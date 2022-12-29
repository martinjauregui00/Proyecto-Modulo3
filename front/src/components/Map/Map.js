import { useState, useEffect } from 'react';


function Map() {

    let [data, setData] = useState(null)
    let [singleData, setSingleData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/spots")
            .then(res => res.json())
            .then(response => {
                console.log(response)
                setData(response)
            })
    }, [])

    function optionChange(e) {
        console.log(e);
        data.map(pl => {
            if (pl.name === e.target.value) {
                setSingleData(pl)
            }
        })
    }

    return (
        <>
            <div className="Map" id="map">
                <div className='content'>
                    <h2 id="title3"> Explore our spots</h2>
                    <span className='line'></span>
                    <br></br>
                    Select a location:
                    <select onChange={(e) => optionChange(e)}>
                        <option default null>Location</option>
                        <option value="La Galea">La Galea</option>
                        <option>Gorrondatxe</option>
                        <option>Meñakoz</option>
                        <option>Barrika</option>
                        <option>Azkorriaga</option>
                        <option>Armintza</option>

                    </select>

                </div>
                <div className='spotsData'>{
                    singleData !== null ?
                        (
                            <>
                                <br></br>

                                <div className='unacosa'>
                                    <h2>{singleData.name}</h2>
                                    <img src={singleData.foto}></img>
                                </div>
                                <div className='otracosa'>
                                    <p>{singleData.data}</p>
                                    <br></br>
                                    <p>Visibility: {singleData.visibility}</p>
                                    <br></br>
                                    <p>Accessibility: {singleData.accessibility}</p>
                                    <br></br>
                                    <p>Location: <a href='https://goo.gl/maps/u4M38anXg47m228q8'>Google Maps</a></p>
                                </div>
                            </>

                        )
                        : <></>
                } </div>

            </div>
        </>
    )

}

export default Map;