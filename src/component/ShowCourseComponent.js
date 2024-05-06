import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col from react-bootstrap for layout

function ShowCourseComponent({ filterCourseFunction, addCourseToCartFunction }) {
    // Render courses in groups of three
    const renderCourses = () => {
        const courseGroups = [];
        for (let i = 0; i < filterCourseFunction.length; i += 3) {
            const courseGroup = filterCourseFunction.slice(i, i + 3);
            courseGroups.push(courseGroup);
        }
        return courseGroups.map((group, index) => (
            <Row key={index} className="mb-4">
                {group.map(course => (
                    <Col key={course.id}>
                        <div className="product">
                            <img src={course.image} alt={course.name} />
                            <h2>{course.name}</h2>
                            <p>Price: ₹{course.price}</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => addCourseToCartFunction(course)}
                            >
                                Add to Shopping Cart
                            </button>
                        </div>
                    </Col>
                ))}
            </Row>
        ));
    };

    return (
        <div>
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Sorry, No matching Product found.
                </p>
            ) : (
                renderCourses()
            )}
        </div>
    );
}

export default ShowCourseComponent;