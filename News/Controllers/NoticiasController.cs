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
            Noticia noti = db.Noticia.Where(a => a.id_noticia == id).FirstOrDefault();
            if (noti == null)
            {
                return NotFound();
            }

            return Ok(noti);
        }

        [Route("api/Noticias/edit")]
        // PUT: api/Noticias/5       
        [ResponseType(typeof(void))]
        public IHttpActionResult edit(long id, Noticia noticia )//MODIFICA UNA NOTICIA
        {
            string MensajeError = "Error";

            if (!ModelState.IsValid)
            {
                MensajeError = "MAL EL MODELSTATE";
                return BadRequest(MensajeError);
            }

            Noticia noti = db.Noticia.Where(a => a.id_noticia == id).FirstOrDefault();
            if (noti == null)
            {
                MensajeError = "NO SE ENCUENTRA NOTICIA CON ESTE ID";
                return BadRequest(MensajeError);
            }
            if (id != noti.id_noticia)
            {
                MensajeError = "DIFERENTES ID";
                return BadRequest(MensajeError);
            }

            noti.id_categoria = noticia.id_categoria;
            noti.titulo = noticia.titulo;
            noti.subtitulo = noticia.subtitulo;
            noti.descripcion = noticia.descripcion;
            noti.foto_portada = noticia.foto_portada;
            noti.foto_noticia = noticia.foto_noticia;
            noti.video_noticia = noticia.video_noticia;
            //DATE E ID FALTA
            noti.portada = noticia.portada;
            noti.hide = noticia.hide;
            db.Entry(noti).State = EntityState.Modified;



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
                Categoria categoriacheck= db.Categoria.Where(c => c.id_categoria == noticia.id_categoria).FirstOrDefault();
                if (categoriacheck == null)
                {
                    MensajeError = "CATEGORIA NO EXISTE";
                    return BadRequest(MensajeError);
                }

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