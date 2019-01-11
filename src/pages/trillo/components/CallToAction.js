import React from 'react'
import { connect } from 'react-redux';

export const CallToAction = ({ data }) => (
    <section className="cta">
        <h2 className="cta__book-now">{data.text}</h2>
        <button className="btn">
            <span className="btn__visbile">{data.button.visible}</span>
            <span className="btn__hidden">{data.button.hidden}</span>
        </button>
    </section>
)

const mapStateToProps = state => ({
    data: state.cta
})

export default connect(mapStateToProps)(CallToAction)