import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

import './ItineraryCard.scss';

const { staticUrl } = window;

import { library } from '@fortawesome/fontawesome-svg-core/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faStar,
    faEye,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faMapMarkerAlt,
    faStar,
    faEye,
);

const ItineraryCard = ({
    city,
    image,
    description,
    likes,
    photo,
    title,
    slug,
    views,
}) => {
    return (
        <Card
            className="itinerary-card"
        >
            <CardImg
                alt={`Image for ${city}`}
                top
                src={image ? image : `${staticUrl}images/genericCard.jpg`}
                className="card-image"
            />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>
                    <FontAwesomeIcon icon="map-marker-alt" /> {city}
                    &nbsp;<FontAwesomeIcon icon="eye" /> {views || '0'}
                    &nbsp;<FontAwesomeIcon icon="star" /> {likes || '0'}
                </CardSubtitle>
                <CardText>{description}</CardText>
                <Link to={slug}><Button className="main-button">More</Button></Link>
            </CardBody>
        </Card>
    );
};

ItineraryCard.defaultProps = {
    image: `${staticUrl}images/genericCard.jpg`,
    likes: 0,
    description: '',
    views: 0,
};

ItineraryCard.propTypes = {
    city: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    title: PropTypes.string.isRequired,
    views: PropTypes.number,
};

export default ItineraryCard;
