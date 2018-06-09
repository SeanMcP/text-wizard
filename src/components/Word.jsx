import React from 'react';
import PropTypes from 'prop-types';

const Word = props => (
    <span
        className="word"
        id={props.id}
        onClick={props.handleClick}
    >
        {props.value || props.original}
    </span>
);

Word.propTypes = {
    value: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
};

export default Word;
