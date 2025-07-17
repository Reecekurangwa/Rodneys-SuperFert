import React, { useState } from "react"; // Ensure useState is imported
import fieldbg from '../../assets/field.jpg'; // Assuming this path is correct


const QueriesSection = () => {
    // State variables for all input fields to make them controlled components
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState(''); // State variable for the textarea content

    // Handler to update the full name state as the user types
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    // Handler to update the email address state as the user types
    const handleEmailChange = (event) => {
        setEmailAddress(event.target.value);
    };

    // Handler to update the message state as the user types in the textarea
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    // Handler for the "Clear" button click (clears only the message textarea)
    const handleClearMessage = () => {
        setMessage(''); // This is the core action: set the message state to an empty string
    };

    // Optional: Function to clear ALL form fields (useful after submission)
    const handleClearAllFields = () => {
        setFullName('');
        setEmailAddress('');
        setMessage('');
    };

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Crucial: Prevents the default browser form submission (page reload)
        console.log("Form Submitted!");
        console.log("Full Name:", fullName);
        console.log("Email Address:", emailAddress);
        console.log("Message:", message);

        // Here you would typically send this data to a server or process it.
        // After submission, you might want to clear the form:
        handleClearAllFields(); // Clears all fields after submission
    };

    return (
        <>
            <section className="queries-section">
                <div className="text-box">
                    {/* Added alt text for accessibility */}
                    <img src={fieldbg} alt="Green field background" className='background-img' />

                    <div className="mini-textbox">
                        <h2>For Queries, or Inquiries.</h2>
                        <p>Get in touch with us.</p>
                    </div>

                    <div className="white-box">
                        {/* Attach the handleSubmit function to the form */}
                        <form onSubmit={handleSubmit} className="form-input">
                            {/* Full Name Input - now a controlled component */}
                            <input
                                type="text"
                                placeholder="Full Name*"
                                className="name-input"
                                value={fullName} // Bind value to state
                                onChange={handleFullNameChange} // Update state on change
                            />
                            {/* Email Address Input - now a controlled component */}
                            <input
                                type="text"
                                placeholder="Email Address*"
                                className="email-input"
                                value={emailAddress} // Bind value to state
                                onChange={handleEmailChange} // Update state on change
                            />
                            {/* Message Textarea - now a controlled component */}
                            <textarea
                                placeholder=" Your Message*"
                                className="message-input"
                                rows="5" // Suggests an initial height of 5 lines
                                cols="50" // Changed cols to 50 for a more reasonable default width
                                value={message} // The textarea's displayed value is controlled by the 'message' state
                                onChange={handleMessageChange} // Updates 'message' state when text changes
                            ></textarea>

                            {/* Corrected class name to "button-group" to match CSS */}
                            <div className="button-group">
                                <button type="submit" className="submit-button">Send Message</button>
                                {/* "Clear" button - Corrected type and attached onClick handler */}
                                <button
                                    type="button" // Crucial: Prevents this button from submitting the form
                                    onClick={handleClearMessage} // When clicked, this calls handleClearMessage
                                    className="clear-button"
                                >
                                    Clear
                                </button>
                            </div>
                        </form>

                        <div className="info-text-box">
                            <p>75A Kew Drive, Highlands
                                <br />Harare, Zimbabwe
                                <br />Telephone: +263 772 143 243/4/5/6
                                <br />Email: sales@fsg.co.zw
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default QueriesSection;
