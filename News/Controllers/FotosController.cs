using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using News.Models;

namespace News.Controllers
{
    public class FotosController : ApiController
    {
        private NewsEntities db = new NewsEntities();

        // GET: api/Fotos
        [HttpGet]
        public IQueryable<Fotos> GetFotos()
        {
            return db.Fotos;
        }
        [HttpGet]
        // GET: api/Fotos/5
        [ResponseType(typeof(Fotos))]
        public IHttpActionResult GetFotos(long id)
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
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                MensajeError = "an error has occurred. try again later ";
                return BadRequest(MensajeError);
            }

            db.Fotos.Add(fotos);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = fotos.id_foto }, fotos);
        }




        // DELETE: api/Fotos/5
        [ResponseType(typeof(Fotos))]
        public IHttpActionResult DeleteFotos(long id)
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