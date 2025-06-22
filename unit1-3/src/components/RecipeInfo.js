import React from 'react';
import PropTypes from 'prop-types';

const RecipeInfo = ({text}) => {
    return <p>{text}</p>;
}

RecipeInfo.propTypes = {
    text: PropTypes.string.isRequired
};

export default RecipeInfo;

