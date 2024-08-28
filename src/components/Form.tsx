import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const Form = () => {
  const form = useRef();
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm('service_nc5tnzo', 'template_gvvsf1b', form.current, {
        publicKey: 'H4KtkZUUKtfyT8N3S',
      })
      .then(
        () => {
          setSuccess('The message has been sent! ✅');
          form.current.reset()
        },
        (error) => {
          setError('Opss, something went wrong ❌, try again!');
          form.current.reset()
        },
      );
  };



  return (
    <div>
      <form
        ref={form}
        onSubmit={(e) => sendEmail(e)}
        className="flex flex-col justify-center items-center text-white font-serif gap-5 tracking-wider bg-[#618685] w-100 p-16 rounded-lg"
      >
        <div className="flex flex-col">
          <label>Name</label>
          <input type="text" name="user_name" className="py-2 px-2 rounded w-96 text-black" required/>
        </div>

        <div className="flex flex-col">
          <label>Email</label>
          <input type="text"  name="user_email" className="py-2 px-2 rounded w-96 text-black" required/>
        </div>

        <div className="flex flex-col">
          <label>Message</label>
          <textarea rows={5} name="message" className="py-2 px-2 rounded w-96 text-black" required/>
        </div>
        <button type="submit" className="border-2 rounded p-2 w-fit mt-5 font-serif text-white bg-[#618685]">Send Message</button>
        {success && <p className='p-2 bg-[#376E6F] rounded'>{success}</p>}
        {error && <p className='p-2 bg-red-400 rounded'>{error}</p>}
      </form>
    </div>
  );
};

export default Form;
