import nodemailer from 'nodemailer';

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    secureConnection: false,
    port: "587",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },

    tls: {
      ciphers: 'SSLv3'
    }
  })
  
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send email

const EmailSender = ({ currentDate, fullName, email, message, address, issue }) => {
  const options = {
    from: `JVA 🔩 <${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: "Message from JVA Técnico Don Jaime",
    html: `
        <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" ><img
              style="width: 100%; height: 70px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              JVA 
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>currentDate: <b>${currentDate}</b></p>
              <p>FullName: <b>${fullName}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Address:<b>${address}</b></p>
              <p>issue:<b>${issue}</b></p>
              <p>Message: <b>${message}</b></p>
            </div>
          </div>
        </div>
      </div>
      `
  };

  Email(options)
};

export default EmailSender;