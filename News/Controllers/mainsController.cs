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
    public class mainsController : ApiController
    {
        private NewsEntities db = new NewsEntities();

        // GET: api/mains
        public IQueryable<main> Getmain()
        {
            return db.main;
        }

        // GET: api/mains/5
        [ResponseType(typeof(main))]
        public IHttpActionResult Getmain(string id)
        {
            main main = db.main.Find(id);
            if (main == null)
            {
                return NotFound();
            }

            return Ok(main);
        }

        // PUT: api/mains/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putmain(string id, main main)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != main.whoweare)
            {
                return BadRequest();
            }

            db.Entry(main).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!mainExists(id))
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

        // POST: api/mains
        [ResponseType(typeof(main))]
        public IHttpActionResult Postmain(main main)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.main.Add(main);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (mainExists(main.whoweare))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = main.whoweare }, main);
        }

        // DELETE: api/mains/5
        [ResponseType(typeof(main))]
        public IHttpActionResult Deletemain(string id)
        {
            main main = db.main.Find(id);
            if (main == null)
            {
                return NotFound();
            }

            db.main.Remove(main);
            db.SaveChanges();

            return Ok(main);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool mainExists(string id)
        {
            return db.main.Count(e => e.whoweare == id) > 0;
        }
    }
}