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
    public class NoticiasController : ApiController
    {
        private NewsEntities db = new NewsEntities();

        // GET: api/Noticias
        public IQueryable<Noticia> GetNoticia()
        {
            return db.Noticia;
        }

        // GET: api/Noticias/5
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult GetNoticia(long id)
        {
            Noticia noticia = db.Noticia.Find(id);
            if (noticia == null)
            {
                return NotFound();
            }

            return Ok(noticia);
        }

        // PUT: api/Noticias/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNoticia(long id, Noticia noticia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != noticia.id_noticia)
            {
                return BadRequest();
            }

            db.Entry(noticia).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoticiaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Noticias
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult PostNoticia(Noticia noticia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Noticia.Add(noticia);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = noticia.id_noticia }, noticia);
        }

        // DELETE: api/Noticias/5
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult DeleteNoticia(long id)
        {
            Noticia noticia = db.Noticia.Find(id);
            if (noticia == null)
            {
                return NotFound();
            }

            db.Noticia.Remove(noticia);
            db.SaveChanges();

            return Ok(noticia);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NoticiaExists(long id)
        {
            return db.Noticia.Count(e => e.id_noticia == id) > 0;
        }
    }
}