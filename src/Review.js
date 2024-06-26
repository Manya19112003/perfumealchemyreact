import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Review.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import star from './star.png';

const RatingComponent = ({ message }) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

function Review() {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const [review, setReview] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        switch (newRating) {
            case 1:
                setMessage('I just hated.');
                break;
            case 2:
                setMessage('I dont like it.');
                break;
            case 3:
                setMessage('Average.');
                break;
            case 4:
                setMessage('Very Good.');
                break;
            case 5:
                setMessage('I just love It.');
                break;
            default:
                setMessage('');
        }
    };

    const handleCancel = () => {
        setRating(0);
        setMessage('');
        setText('');
        setReview('');
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        setReview(`Rating: ${rating}, Review: ${text}`);
    };

    return (
        <Container fluid >
            <Row className='justify-content-center'>
                <Col></Col>
                <Col className='title justify-content-center'>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{
                                cursor: 'pointer',
                                color: star <= rating ? 'gold' : 'white',
                                fontSize: '40px', // Increase font size for larger stars
                                marginRight: '5px', // Add spacing between stars
                                animation: 'starAnimation 0.5s'
                            }}
                            onClick={() => handleRatingChange(star)}
                        >
                            &#9733;
                        </span>
                    ))}
                    <p className='msg'>{message}</p>
                    <textarea placeholder='Describe your experience' value={text} onChange={handleTextChange}></textarea>
                    <RatingComponent />
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                </Col>

                <Col>

                </Col>

            </Row>
            <Row>
                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Absolutely love this perfume site! The selection is fantastic, and the prices are unbeatable. I ordered a couple of fragrances for myself and my partner, and we couldn't be happier with the quality. Shipping was super fast too!</p>


                </Col>
                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Great services..</p>


                </Col>

                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Very fast responses and easy to deal with.</p>

                </Col>
            </Row>
            <Row>
                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>I ordered a perfume gift set for my mom's birthday, and she absolutely loved it! The packaging was beautiful, and the perfumes smelled divine.</p>
 

                </Col>
                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>

                    <br></br>
                    <p className='xt'>Great experience shopping on this site</p>


                </Col>

                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Not Satisfied.</p>

                </Col>
            </Row>
        </Container>
    );
}

export default Review;
