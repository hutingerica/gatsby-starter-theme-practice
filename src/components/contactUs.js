import React, { useState }from 'react';
import axios from 'axios'

import "./contactUs.css"


export default function ContactUs() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    const [inputs, setInputs] = useState({
        name:'',
        email: '',
        message: ''
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg }
            })
            setInputs({
            name: '',
            email: '',
            message: ''
            })
        } else {
            setStatus({
            info: { error: true, msg: msg }
            })
        }
    }
    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
        ...prev,
        [e.target.id]: e.target.value
        }))
        setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
        })
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url: 'https://formspree.io/xgepekrv',
            data: inputs
        })
        .then(response => {
            handleServerResponse(
            true,
            'Thank you, your message has been submitted.'
            )
        })
        .catch(error => {
            handleServerResponse(false, error.response.data.error)
        })
    }
    return (
        <div>
            <hr />
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                id="name"
                type="text"
                name="name"
                onChange={handleOnChange}
                placeholder="First and Last"
                required
                value={inputs.name}
                />

                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="email"
                name="_replyto"
                onChange={handleOnChange}
                placeholder="email@domain.tld"
                required
                value={inputs.email}
                />

                <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                onChange={handleOnChange}
                placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                required
                value={inputs.message}
                />

                <button type="submit" disabled={status.submitting}>
                {!status.submitting
                    ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                    : 'Submitting...'}
                </button>
            </form>
            {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </div>
      )
}