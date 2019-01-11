import React from 'react'
import { connect } from 'react-redux';

const Booking = ({ data }) => (
    <section className="section-book" id="booking">
        <div className="row">
            <div className="book">
                <div className="book__form">
                    <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                            {data.title}
                        </h2>
                    </div>
                    <form  action="#" className="form">
                        {data.inputs.map((item, index) => (
                            <div key={index} className="form__group">
                                <input id={item.id} type={item.type} placeholder={item.placeholder} className="form__input" required />
                                <label htmlFor={item.id} className="form__label">{item.placeholder}</label>
                            </div>
                        ))}

                        {data.radio.map((item, index) => (
                            <div key={index} className="form__radio-group">
                                <input id={item.id} type="radio" className="form__radio-input" name="radio"/>
                                <label htmlFor={item.id} className="form__radio-label">
                                    <span className="form__radio-button"/>
                                    {item.text}
                                </label>
                            </div>
                        ))}

                        <div className="form__group u-margin-top-medium">
                            <button className="btn btn--green">
                                {data.button}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
)
const mapStateToProps = state => ({
    data: state.booking
})

export default connect(mapStateToProps)(Booking)