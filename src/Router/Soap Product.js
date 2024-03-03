import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Styles/SoapSection.css";
import Image from 'react-bootstrap/Image';
import Alovera from "../MD Organics/Alovera soap.jpg";
import Neem from "../MD Organics/Neem soap.jpg";
import potato from "../MD Organics/Potato soap.jpg";
import wine from "../MD Organics/Wine Soap.png";
import Carrot from "../MD Organics/carrat soap.jpg";
import betroot from "../MD Organics/betroot image.jpg";
import Turmeric from "../MD Organics/Turmeric soap.jpg";
import Sandal from "../MD Organics/Sandle.jpg";
import Safron from "../MD Organics/saffron.jpg";
import Paneer from "../MD Organics/Panner Rose.jpg";
import { Navigate } from 'react-router-dom';

function Soap(){

    const SoapData = [
        {  
            id:1,
            img: Alovera,
            Name: "Alovera",
            Uses: "Treat Cure Gentler an Skin, Dead Skin Cells, Scars & Hyperpiggmentaion.",
            Price: 60
        },

        {  
            id:2,
            img: Neem,
            Name: "Neem",
            Uses:"Brighter Skin, Reduce Uneven Skin Tones, Get A clear Skin, Heal the Wound Quick, Decrease Inflamation.",
            Price: 60
        },

        {  
            id:3,
            img: potato,
            Name: "Potato",
            Uses: "Remedy to soothe mild skin burns and sunburn. Tanning & Pigmentation & Sooths Sunburns, Keeping the Skin in Moiture.",
            Price: 70
        },

        {  
            id:4,
            img: wine,
            Name: "Wine Red",
            Uses: "Red wine soap with lye. & Shine, Maintains even Skin Tane, Reduce Premature Aging, Reduce Skin Acne.",
            Price: 100
        },

        {  
            id:5,
            img: betroot,
            Name: "Betroot",
            Uses: "Natural Glow, Anti-Inflammatory Properties, Rich in Nutrients, Pigmentation Reduction, Hydration and Moisture.",
            Price: 70
        },

        {  
            id:6,
            img: Carrot,
            Name: "Carrot",
            Uses: "Skin Nourishment, Complexion Enhancement, Anti-Aging Properties, Sun Damage Protection, Gentle Exfoliation.",
            Price: 70
        },
         
        {  
            id:7,
            img: Turmeric,
            Name: "Turmeric",
            Uses: "Skin Brightening, Anti-Inflammatory Benefits, Acne Control, Natural Exfoliation, Scar Reduction",
            Price: 60
        },

        {  
            id:8,
            img: Sandal,
            Name: "SandalWood",
            Uses: "Skin Cleansing, Natural Fragrance, Moisturizing Properties, Anti-Inflammatory Benefits, Aromatherapy and Stress Relief",
            Price: 60
        },

        {  
            id:9,
            img: Safron,
            Name: "Saffron",
            Uses: "Skin Brightening, Anti-Aging Benefits, Natural Moisturization, Acne Prevention, Aromatherapy and Relaxation",
            Price: 90
        },

        {  
            id:10,
            img: Paneer,
            Name: "panner Rose",
            Uses: "Gentle Cleansing, Hydration and Moisturization, Aromatherapy Benefits, Skin Soothing Properties, Mood Uplifting",
            Price: 70
        },
    ]

   return(
    <section className='block'>
       <Container fluid>
          <div className='Soap-title'>
              <h1>Soap Section</h1>
              <p>Variety Of Soaps</p>
          </div>
          <Row>
        {
            SoapData.map(soaps => {
                return(
                  <>  
                    <Col sm={4} key={soaps.id} className='Products' mb="2">
                    <div className='Product-img'>
                         <Image src={soaps.img} width={230} className='img'/>
                    </div>
                    <div className='Product-disc'>
                        <h2>{soaps.Name}</h2>
                        <p>{soaps.Uses}</p>
                        <h4>{soaps.Price}/-</h4>
                    </div>
                    <div className='Btns'>
                       <Button variant="primary" size="lg"  href='HTTPS://wa.me/919597497929'>Buy Now</Button>
                    </div>
                 </Col>
                 </>
                );
            }) 
        } 
          </Row>
    </Container>
    </section>
    );
}

export default Soap;