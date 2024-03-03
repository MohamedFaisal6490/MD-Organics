import Carousel from 'react-bootstrap/Carousel';
import "../Styles/Home.css";
import { useNavigate } from 'react-router-dom';
// this section for image
import MDCover from "../MD Organics/CoverImg.jpg";
import Label from "../MD Organics/soap-label-examples.jpg";
import SoapCover from "../MD Organics/ProductSoapCover.jpg";
import ShampooCover from "../MD Organics/productSampoocover.jpg";
import oilCover from "../MD Organics/productOilCover.jpg";
// this section for frame works
import { Container,Row,Col, Button,Image } from 'react-bootstrap';
import { Card } from 'primereact/card';
import Footer from '../Components/Footer';

function Home(){
   const Navigate = useNavigate();
   const ProductPack = [
      {
         id:1,
         disc:"Soap Varities",
         title:"Soaps",
         // img:SoapCover,
         Nav:"/SoapProduct",
      },

      {
         id:2,
         disc:"Face Cream Varities",
         title:"Face Creames",
         // img:ShampooCover,
         Nav:"/CreamProduct"
      },

      {
         id:3,
         disc:"Oil Varities",
         title:"Oils",
         // img:oilCover,
         Nav:"/OilProduct"
      },
   ];
  
   // const check = ()=>{ 


       
   //       ProductPack.map(pack=>{
   //          return( 
   //             <div key={pack.id}>
   //                {console.log(pack.Nav)}
   //                {Navigate("/")}
   //            </div>
   //          );
   //       }
   //    )
      
   // }


     return(
        <section>
         <Container fluid>
           <div className='ScrollBar'>
               <Carousel data-bs-theme="dark" className='Carousel' sm={100}>
                    <Carousel.Item>
                      <img
                      className="One"
                        src={MDCover}
                        alt="First slide"
                      />
               </Carousel.Item>
               <Carousel.Item>
                     <img
                        className="One"
                        src={Label}
                        alt="Second slide"
                     />
                     </Carousel.Item>
                     <Carousel.Item>
                     <img
                        className="One"
                        src="https://uploads.dailyvanity.sg/wp-content/uploads/2017/12/handmade-soap-featured.jpg"
                        alt="Third slide"
                     />
                     <Carousel.Caption style={{color:"white", paddingBottom:"100px", fontSize:"10rem"}}>
                         <h1 style={{fontSize:"30px"}}>Our Products</h1>
                     </Carousel.Caption>
                     </Carousel.Item>
                  </Carousel>
               </div>
            <hr></hr>

            {/* this section contains the Product Nav */}

               <div className='Products'>
               <Container fluid >
                  <div className='Product-Titles'>
                         <h1>Our Products</h1>
                  </div>
                 <Row>
                  {   /* { mapping the nav Products */
                     ProductPack.map(prdcts =>{
                        return(
                        
                              <Col sm={4} key={prdcts.id} mb="2" className='ProductsNav' >
                                <Card title={prdcts.title} subTitle={prdcts.disc} className='Cards'>
                                  <Button type='primary' onClick={(e) =>{Navigate(prdcts.Nav)}}>Check In</Button>
                                </Card>
                              </Col>
                        );
                     })
                     
                  }

                    </Row>
                    </Container>
               </div>

               {/* this section id for footer */}

               <div className='Footer-Section'>
                      <Footer/>
               </div>
               </Container>   
        </section>
     );
}

export default Home;