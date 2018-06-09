import React from 'react';
import PropTypes from 'prop-types';

const Word = props => (
    <span
        className="word"
    >
        {props.display || props.original}
    </span>
);

Word.propTypes = {
    display: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
};

export default Word;
