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
    public class VideosController : ApiController
    {
        private NewsEntities db = new NewsEntities();
        public string MessaError { get; private set; }
        // GET: api/Videos
        [HttpGet]
        public IQueryable<Videos> GetVideos()       //SI ESTA LOGUEADO DEVUELVE TODOS LOS VIDEOS
        {
            return db.Videos;
        }
        [HttpGet]
        public List<Videos> GetVideosNR()       //SI NO ESTA LOGUEADO DEVUELVE LOS QUE SE PUEDEN VER
        {
            return db.Videos.Where(v => v.hide != 0).ToList(); ;
        }

        // GET: api/Videos/5
        [HttpGet]
        [ResponseType(typeof(Videos))]           // devuelve video por id
        public IHttpActionResult GetVideos(long id)   
        {
            string MensajeError = "Error";
            Videos videos = db.Videos.Find(id);
            if (videos == null)
            {
                MensajeError = "AUN NO SE ENCONTRO EL VIDEO";
                return BadRequest(MensajeError);
            }

            return Ok(videos);
        }

        // PUT: api/Videos/5
        [HttpPost]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVideos(long id, Videos ovideo)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                MensajeError = "ERROR INESPERADO";
                return BadRequest(MensajeError);

            }

            if (id != ovideo.id_video)
            {
                MensajeError = "ID VIDEO NO CORRESPONDE";
                return BadRequest(MensajeError);
            }

            Videos video = db.Videos.Where(a => a.id_video == id).FirstOrDefault();
            video.url = ovideo.url;
            video.hide = ovideo.hide;
            db.Entry(video).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VideosExists(id))
                {
                    MensajeError = "VIDEO NO ENCONTRADO";
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
        // POST: api/Videos
        [ResponseType(typeof(Videos))]
        public IHttpActionResult PostVideos(Videos videos)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                MensajeError = "ERROR INESPERADO";
                return BadRequest(MensajeError);
            }

            db.Videos.Add(videos);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = videos.id_video }, videos);
        }

        [HttpDelete]
        // DELETE: api/Videos/5
        [ResponseType(typeof(Videos))]
        public IHttpActionResult DeleteVideos(long id)
        {
            string MensajeError = "Error";
            Videos videos = db.Videos.Find(id);
            if (videos == null)
            {
                MensajeError = "VIDEO NO ENCONTRADO";
                return BadRequest(MensajeError);
            }

            db.Videos.Remove(videos);
            db.SaveChanges();

            return Ok(videos);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VideosExists(long id)
        {
            return db.Videos.Count(e => e.id_video == id) > 0;
        }
    }
}