using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using News.Models;
using News.Models.WS;
using System.Web.Http.Cors;

namespace News.Controllers
{
    public class AccesoController : ApiController
    {
        [HttpPost]
        public Respuesta Login([FromBody] AccesoViewModel model)
        {
            Respuesta oRes = new Respuesta();
            oRes.resultado = 0;
            try
            {
                using (NewsEntities db = new NewsEntities())
                {
                    string pswd = Encrypt.GetSHA256(model.password);
                    Usuario user = db.Usuario.Where(a => a.email == model.email).FirstOrDefault();
                    if (user != null)
                    {

                        if (user.password == pswd)
                        {
                            if (user.active == true)
                            {
                                oRes.resultado = 1;
                                var tkn = Guid.NewGuid().ToString();
                                oRes.datos = new
                                {
                                    token = tkn,
                                    user_id = user.id_usuario,
                                    rol = user.rol,
                                    nicname = user.nickname,
                                    imgperfil = user.user_foto
                                };
                                user.token = tkn;
                                db.Entry(user).State = System.Data.Entity.EntityState.Modified;
                                db.SaveChanges();
                            }
                            else
                            {
                                oRes.mensaje = "the user is not active";
                            }
                        }
                        else
                        {
                            oRes.mensaje = "wrong password ";
                        }
                    }
                    else
                    {
                        oRes.mensaje = "wrong email";
                    }
                }
            }
            catch (Exception ex)
            {
                oRes.mensaje = "An error has occurred. try again later" + ex;
            }
            return oRes;
        }

        [HttpGet]
        [ResponseType(typeof(Respuesta))]
        public IHttpActionResult Logout(string token)
        {
            Respuesta oRes = new Respuesta();
            using (NewsEntities db = new NewsEntities())
            {
                Usuario user = db.Usuario.Where(a => a.token == token).FirstOrDefault();
                if (user != null)
                {
                    oRes.resultado = 0;
                    user.token = "";
                    db.Entry(user).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }
            return Ok(oRes);
        }

    }
}