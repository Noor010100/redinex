// pages/api/submitForm.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body;
      // Process the form data here
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  