using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using News.Models;

namespace News.Controllers
{
    public class FotosController : ApiController
    {
        private NewsEntities db = new NewsEntities();
        public string MessaError { get; private set; }
        // GET: api/Fotos
        [HttpGet]
        public IQueryable<Fotos> GetFotos()
        {
            return db.Fotos;
        }
        [HttpGet]
        // GET: api/Fotos/5
        [ResponseType(typeof(Fotos))]
        public IHttpActionResult GetFoto(long id)
        {
            string MensajeError = "Error";
            Fotos fotos = db.Fotos.Find(id);
            if (fotos == null)
            {
                MensajeError = "photo not found";
                return BadRequest(MensajeError);
            }

            return Ok(fotos);
        }

        [HttpPost]
        // PUT: api/Fotos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFotos(long id, Fotos fotos)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fotos.id_foto)
            {
                MensajeError = "an error has occurred. try again later ";
                return BadRequest(MensajeError);
            }

            db.Entry(fotos).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FotosExists(id))
                {
                    MensajeError = "photo not found";
                    return BadRequest(MensajeError);
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }


        [HttpPost]
        // POST: api/Fotos
        [ResponseType(typeof(Fotos))]
        public IHttpActionResult PostFotos(Fotos fotos)
        {
            byte[] imageBytesPortada = null;
            bool creardirfoto = false;
            if (fotos.url != "")
            {
                creardirfoto = true;
                imageBytesPortada = Convert.FromBase64String(fotos.url);
            }

            
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                MensajeError = "an error has occurred. try again later ";
                return BadRequest(MensajeError);
            }
            fotos.url = "";
            db.Fotos.Add(fotos);
            db.SaveChanges();
            Fotos ofoto = db.Fotos.Where(a => a.titulo == fotos.titulo).FirstOrDefault();
            if (creardirfoto)
            {
                String path = HttpContext.Current.Server.MapPath("~/images/Photos/"); //Path
                                                                                                             //Check if directory exist
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path); //Create directory if it doesn't exist
                }

                string imageName = path + ofoto.id_foto;
                //set the image path
                string imgPath = Path.Combine(path, imageName);
                File.WriteAllBytes(imgPath, imageBytesPortada);
                ofoto.url = imgPath;
                db.Entry(ofoto).State = EntityState.Modified;
                db.SaveChanges();
            }



            return CreatedAtRoute("DefaultApi", new { id = fotos.id_foto }, fotos);
        }




        // DELETE: api/Fotos/5
        [ResponseType(typeof(Fotos))]
        public IHttpActionResult DeleteFoto(long id)
        {
            string MensajeError = "Error";
            Fotos fotos = db.Fotos.Find(id);
            if (fotos == null)
            {
                MensajeError = "photo not found";
                return BadRequest(MensajeError);
            }

            db.Fotos.Remove(fotos);
            db.SaveChanges();

            return Ok(fotos);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FotosExists(long id)
        {
            return db.Fotos.Count(e => e.id_foto == id) > 0;
        }
    }
}