import { Col, Container, InputGroup, Row} from "react-bootstrap";
import { InputText} from "primereact/inputtext";
import {Card} from "primereact/card";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import "../Styles/feedback.css";
import FBack from "../MD Organics/feedbackImg.jpg";
const Feedback = () => {
  return (
    <section>
        <Container fluid>
            <div className="FeedBack">
                <Row>
                    <Col>
                       <img src={FBack} width={330} height={400} className="fb-img"></img>
                       <p className="fb-disc">Thank You For Visiting Our Website.Please Give Your FeedBack For 
                        Improving Our Product.</p>
                    </Col>
                    <Col>
                       <Card  className="Card-fb">
                              <div className="Fback-Form">
                                  <h1>FeedBack</h1>
                                    <div className="Form-fb">
                                        <InputText type="text" placeholder="UserName"/>
                                        <br></br>
                                        <InputText type="email" placeholder="Gmail"/>
                                        <br></br>
                                        <InputTextarea rows={5} cols={28} placeholder="Write Your FeedBack...!"></InputTextarea>
                                        <br></br>
                                        <Button label="Submit" className="fb-btn"/>
                                    </div>                               
                                    
                              </div>
                       </Card>
                        
                    </Col>
                </Row>
            </div>

            
        </Container>
    </section>
  )
}

export default Feedback
