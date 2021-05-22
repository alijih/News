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
using System.Web.Http.Cors;

namespace News.Controllers
{
    public class NoticiasController : ApiController
    {
        private NewsEntities db = new NewsEntities();
        public string MessaError { get; private set; }
        // GET: api/Noticias
        [HttpGet]
        public IQueryable<Noticia> GetNoticia() //DEVUELVE TODAS LAS NOTICIAS
        {
            return db.Noticia;
        }

        [HttpGet]
        // GET: api/Noticias/5   
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult GetNoticia(long id)// BUSCA UNA NOTICIA EN PARTICULAR CON UN ID
        {
            Noticia noticia = db.Noticia.Find(id);
            if (noticia == null)
            {
                return NotFound();
            }

            return Ok(noticia);
        }

        [Route("api/Noticias/edit")]
        // PUT: api/Noticias/5       
        [ResponseType(typeof(void))]
        public IHttpActionResult edit(long id, Noticia noticia)//MODIFICA UNA NOTICIA
        {
            string MensajeError = "Error";
            Noticia noti = db.Noticia.Where(a => a.id_categoria == id).FirstOrDefault();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != noticia.id_noticia)
            {
                return BadRequest();
            }

            noti.id_categoria = noticia.id_categoria;
            noti.titulo = noticia.titulo;
            noti.subtitulo = noticia.subtitulo;
            noti.descripcion = noticia.descripcion;
            noti.foto_portada = noticia.foto_portada;
            noti.foto_noticia = noticia.foto_noticia;
            noti.portada = noticia.portada;
            noti.hide = noticia.hide;
            db.Entry(noti).State = EntityState.Modified;


            db.Entry(noticia).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoticiaExists(id))
                {
                    MensajeError = "NO SE ENCUENTRA NOTICIA CON ESTE ID";
                    return BadRequest(MensajeError);
        
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }




        [Route("api/Noticias/register")]
        // POST: api/Noticias
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult register(Noticia noticia)   //AGREGA UNA NOTICIA
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                //CREAR CARPETA DE ARCHIVO 

                db.Noticia.Add(noticia);
                db.SaveChanges();
            }
            return CreatedAtRoute("DefaultApi", new { id = noticia.id_noticia }, noticia);
        }




        [Route("api/Noticias/DeleteNoticia")]
        // DELETE: api/Noticias/5
        [ResponseType(typeof(Noticia))]   //BORRA UNA NOTICIA
        public IHttpActionResult DeleteNoticia(long id)
        {
            Noticia noticia = db.Noticia.Find(id);
            string MensajeError = "Error";
            if (noticia == null)
            {
                MensajeError = "User not found";
                return BadRequest(MensajeError);
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