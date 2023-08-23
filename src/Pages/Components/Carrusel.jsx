import { useEffect, useState } from "react"

function Carrusel() {

    const images = ['Robot_Programando.png', 'CreativeIdeas.png', 'IPN.webp'];
    const texts = ['','',''];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);
    const [text, setText] = useState(texts[0]);

    let a = "";
    let b = "";
    let c = "";

    if(selectedImage === 0){
        console.log("Funciona :D")
    }



    /*
    AUTOPLAY

    useEffect(() => {
        const interval = setInterval(() => {
            setLoaded(false)
            const condition = selectedIndex < images.length - 1;
            const nextIndex = condition ? selectedIndex + 1 : 0;

            const i = images.length;
            console.log("image length " + i)
            console.log("nextIndex " + nextIndex)

            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 100);

        return () => clearInterval(interval);
    })*/

    const previous = () => {

        setLoaded(false)
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : images.length - 1;

        console.log(nextIndex)

        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const next = () => {

        setLoaded(false)
        const condition = selectedIndex < images.length - 1;
        const nextIndex = condition ? selectedIndex + 1 : 0;

        const i = images.length;
        console.log("image length " + i)
        console.log("nextIndex " + nextIndex)

        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }


    //

    return (
        <section className="Carrusel">
            <div className="New">
                <h2 id="TitleNew">WE ARE DIGITAL AGENCY</h2>
                <p id="InfoNew">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque</p>
                <div className="ControlsNew">
                    <button href="#" className="contextButton">Learn More</button>
                    <div className="ButtonsNew">
                        <button onClick={previous} className="PreviousNew"><i class="fa-solid fa-angle-left"></i></button>

                        <h4 id="FirstNew" className="NumberNew">01</h4>
                        <div className="ProgressBar">
                            <div id="Bar1" className="BarActive"></div>
                            <div id="Bar2" className={b}></div>
                            <div id="Bar3" className={c}></div>
                        </div>
                        <h4 id="LastNew" className="NumberNew">03</h4>
                        <button onClick={next} className="NextNew"><i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="ImagesNew">
                <img src={`public/assets/Carrousel/${selectedImage}`} alt="Cano's Code" className={loaded ? "ImgLoaded" : "ImgNo"} onLoad={() => setLoaded(true)} />
            </div>

        </section>
    )
}

export default Carrusel
