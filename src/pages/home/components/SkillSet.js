import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SkillSet = ({ summary: { skills } }) => {
    return (
        <ul className="skillset">
            {skills.map((item, index) => (
                <React.Fragment key={index}>
                    <SkillStyle index={index + 1} svg={item.svg} />
                    <li className="skillset--item">{item.name}</li>
                </React.Fragment>
            ))}
        </ul>
    );
};

const SkillStyle = ({ index, svg }) => {
    return (
        <style
            dangerouslySetInnerHTML={{
                __html: `
        .skillset--item:nth-of-type(${index}) {
            animation-duration: ${index * 0.5}s;
        }
        .skillset--item:nth-of-type(${index})::before {    
            -webkit-mask-image: url("data:image/svg+xml;utf8,${svg}");
            -moz-mask-image: url("data:image/svg+xml;utf8,${svg}");
            mask-image: url("data:image/svg+xml;utf8,${svg}");
        }`
            }}
        />
    );
};

SkillStyle.propTypes = {
    index: PropTypes.number,
    svg: PropTypes.string
};

SkillSet.propTypes = {
    summary: PropTypes.object
};

const mapStateToProps = state => ({
    summary: state.home.summary
});

export default connect(mapStateToProps)(SkillSet);
