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

        // GET: api/Videos
        public IQueryable<Videos> GetVideos()
        {
            return db.Videos;
        }

        // GET: api/Videos/5
        [ResponseType(typeof(Videos))]
        public IHttpActionResult GetVideos(long id)
        {
            Videos videos = db.Videos.Find(id);
            if (videos == null)
            {
                return NotFound();
            }

            return Ok(videos);
        }

        // PUT: api/Videos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVideos(long id, Videos videos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != videos.id_video)
            {
                return BadRequest();
            }

            db.Entry(videos).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VideosExists(id))
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

        // POST: api/Videos
        [ResponseType(typeof(Videos))]
        public IHttpActionResult PostVideos(Videos videos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Videos.Add(videos);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = videos.id_video }, videos);
        }

        // DELETE: api/Videos/5
        [ResponseType(typeof(Videos))]
        public IHttpActionResult DeleteVideos(long id)
        {
            Videos videos = db.Videos.Find(id);
            if (videos == null)
            {
                return NotFound();
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