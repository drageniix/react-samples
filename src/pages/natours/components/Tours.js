import React from 'react'
import { connect } from 'react-redux';

const Tours = ({ data, onButton })=> (
    <section className="section-tours" id="tours">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                {data.title}
            </h2>
        </div>
        <div className="row">
            {data.tours.map((item, index) => (
                <div key={index} className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className={"card__picture card__picture--" + (index + 1)}></div>
                            <h4 className="card__heading">
                                <span className={"card__heading-span card__heading-span--" + (index + 1)}>
                                    {item.title}
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    {item.features.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={"card__side card__side--back card__side--back--" + (index + 1)}>
                            <div className="card__cta">
                                <p className="card__cta--main">
                                    {data.cta.main}
                                </p>
                                <p className="card__cta--value">
                                    {item.price}
                                </p>
                                <button onClick={(e => onButton(item.popup))} href="#" className="btn btn--white">
                                    {data.cta.button}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
                {data.button_more}
            </a>
        </div>
    </section>
)

const mapStateToProps = state => ({
    data: state.tours
})

export default connect(mapStateToProps)(Tours)