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
    public class PortadasController : ApiController
    {
        private NewsEntities db = new NewsEntities();

        // GET: api/Portadas
        public IQueryable<Portada> GetPortada()
        {
            return db.Portada;
        }

        // GET: api/Portadas/5
        [ResponseType(typeof(Portada))]
        public IHttpActionResult GetPortada(int id)
        {
            Portada portada = db.Portada.Find(id);
            if (portada == null)
            {
                return NotFound();
            }

            return Ok(portada);
        }

        // PUT: api/Portadas/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPortada(int id, Portada portada)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != portada.id_portada)
            {
                return BadRequest();
            }

            db.Entry(portada).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PortadaExists(id))
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

        // POST: api/Portadas
        [ResponseType(typeof(Portada))]
        public IHttpActionResult PostPortada(Portada portada)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Portada.Add(portada);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PortadaExists(portada.id_portada))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = portada.id_portada }, portada);
        }

        // DELETE: api/Portadas/5
        [ResponseType(typeof(Portada))]
        public IHttpActionResult DeletePortada(int id)
        {
            Portada portada = db.Portada.Find(id);
            if (portada == null)
            {
                return NotFound();
            }

            db.Portada.Remove(portada);
            db.SaveChanges();

            return Ok(portada);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PortadaExists(int id)
        {
            return db.Portada.Count(e => e.id_portada == id) > 0;
        }
    }
}