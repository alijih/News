using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Mail;
using News.Models;
using System.Web.Http.Cors;

namespace News.Controllers
{
    public class MailerController : ApiController
    {
        private IHttpActionResult Enviar(Consulta Form)
        {
            string MensajeError = "Error";
            var DesdeEmail = new MailAddress("unionsquarelearning@gmail.com", "contacto");
            var HaciaEmail = new MailAddress("david@usql.org");
            var DesdeEmailPassword = "gohkxuidaofxrrkp";
            string subject = "Query of " + Form.nombre + " on the Union Square Learning page";

            string body = "<br/><br/>" + Form.consulta + "<br/><br/>" + "Answer to: " + Form.correo;

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                //Port = 465,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(DesdeEmail.Address, DesdeEmailPassword)
            };


            try
            {
                using (var message = new MailMessage(DesdeEmail, HaciaEmail)
                {
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                })
                    smtp.Send(message);

            }
            catch
            {
                MensajeError = "ERROR AL INTENTAR ENVIAR LA CONSULTA";
                return BadRequest(MensajeError);
            }
            return Ok();

        }
        [Route("api/Contacto")]
        [HttpPost]
        public IHttpActionResult EnviarContacto(Consulta Form)
        {
            return Enviar(Form);

        }
    }
}
