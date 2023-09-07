import { Resend } from 'resend';
import 'dotenv/config';
import http from 'http';
import fetch from 'node-fetch';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

const getTemplate = (name) => {
  return `
  Dear ${name},

  Please find attached the Statement of Purpose template for your student
  visa application to Canada. Kindly edit it as per your scenario and
  needs.

  In case you would like to get the full statement of purpose drafted by
  our experts, do not hesitate to contact us.

  Here is the doc file in case you would like to edit it:
  https://docs.google.com/document/d/1exN5p_lnf9c0tboPE83byBVmgGjjMuJX92SqjkfHXDM/edit?usp=drivesdk

  Leave us a Google review if you liked our service:
  https://g.page/r/CQT2Q8IwOnqpEB0/review

  Best Regards,
  Team Effizient
  www.effizient.ca
  Ph: 226-774-9168
  Email: info@effizient.ca
`;
};

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/resend-email') {
    try {
      const requestBody = await parseRequestBody(req);
      const userEmail = requestBody.email; // Get the user's email from the request

      // Customize the email template with the user's name and email
      const emailSubject = 'Statement of Purpose Template';
      const emailMessage = getTemplate(requestBody.name);

      // Send the email
      const data = await sendEmail(userEmail, emailSubject, emailMessage);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    } catch (error) {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Function to send an email
async function sendEmail(to, subject, message) {
  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'kumar980.satish@gmail.com',
      to: to,
      subject: subject,
      html: message,
    }),
  });

  const data = await resendResponse.json();
  return data;
}

async function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const parsedBody = JSON.parse(body);
        resolve(parsedBody);
      } catch (error) {
        reject(error);
      }
    });
  });
}

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
