import React, { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import './Greetings.css';
import config from "../../config/config.js";

const BASE_URL = config.apiBaseUrl;
const API_ENDPOINT = config.endpoints;

const Greetings = ({ apiUrl = `${BASE_URL}${API_ENDPOINT.greet}` }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setName(e.target.value);
        setError(null);
    };

    const fetchGreeting = async () => {
        if (!name.trim()) {
            setError('Name is required');
            setMessage('');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${apiUrl}?name=${encodeURIComponent(name)}`);
            setMessage(response.data.message);
        } catch (error) {
            setError(error.response?.data?.error || "Failed to fetch greeting");
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchGreeting();
        }
    };

    return (
        <div className="greetings-container">
            <h1>Greetings</h1>
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Enter your name"
                    aria-label="Name input"
                    value={name}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    disabled={isLoading}
                    className={error ? 'error' : ''}
                />
                <button 
                    onClick={fetchGreeting}
                    disabled={isLoading}
                    aria-busy={isLoading}
                    className="submit-button"
                >
                    {isLoading ? 'Loading...' : 'Get Greeting'}
                </button>
            </div>
            {error && <p className="error-message" role="alert">{error}</p>}
            {message && (
            <p 
                key={message} 
                className="greeting-message"
            >
                {message}
            </p>
        )}
        </div>
    );
};

Greetings.propTypes = {
    apiUrl: PropTypes.string
};

export default Greetings;
