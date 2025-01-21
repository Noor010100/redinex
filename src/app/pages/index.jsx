// pages/index.js
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import ToastNotification from '../components/ToastNotification';

export default function Home() {
  useEffect(() => {
    const form = document.getElementById('google-form');
    if (form) {
      form.onsubmit = (event) => {
        event.preventDefault();  // Prevent default form submission
        toast.success('Form submitted successfully!');
        // You could send data to your server here if needed
      };
    }
  }, []);

  return (
    <div>
      <h1>Google Form in Next.js</h1>
      <form
        id="google-form"
        action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
        method="POST"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </form>

      <ToastNotification />
    </div>
  );
}
