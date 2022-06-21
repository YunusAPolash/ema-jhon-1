import emailjs from 'emailjs-com';
import React from 'react';

const Contact = () => {
    const formHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6utncjb', 'template_55z4ll2', e.target, 'ErQdSLJ5WKeJ3aIPz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div>
            <form method='post' onSubmit={formHandler}>
                <div className="form_item">
                    <label htmlFor="">Name:</label> <br />
                    <input type="text" name='name' placeholder='Ex. Jhon Doe' />
                </div>

                <div className="form_item">
                    <label htmlFor="">Subject:</label> <br />
                    <input type="text" name='subject' placeholder='i want to make a business deal...' />
                </div>

                <div className="form_item">
                    <label htmlFor="">Email:</label> <br />
                    <input type="email" name='email' placeholder='jhondoe@mail.com' />
                </div>

                <div className="form_item">
                    <label htmlFor="">Messages:</label> <br />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Messages...'></textarea>
                </div>

                <button type='submit'>Send Messages</button>
            </form>
        </div>
    );
};

export default Contact;