using System;
using System.Net.Mail;
using System.Text;

namespace MaxoftUgyfelkapu.Utils
{
    public class EmailHelper
    {
        private SmtpClient client;

        public EmailHelper()
        {
            client = new SmtpClient();
            setup(client);
            client.Credentials = new System.Net.NetworkCredential("toth910719balint@gmail.com", "123456");
        }

        public void send(string userEmail, string title, string text)
        {
            //TODO
            // update email address
            MailMessage message = new MailMessage("toth910719balint@gmail.com", userEmail, title, text);
            message.BodyEncoding = UTF8Encoding.UTF8;
            message.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
            client.Send(message);
        }

        private void setup(SmtpClient client)
        {
            client.Port = 587;
            client.Host = "smtp.gmail.com";
            client.EnableSsl = true;
            client.Timeout = 10000;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
        }
    }
}