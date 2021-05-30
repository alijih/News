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
        public string MessaError { get; private set; }
        private NewsEntities db = new NewsEntities();

        // GET: api/mains
        [HttpGet]
        public IQueryable<main> Getmainppal()
        {
            return db.main;
        }

        // GET: api/mains/5
        [HttpGet]
        [ResponseType(typeof(main))]
        public IHttpActionResult Getmain(long id)
        {
            string MensajeError = "Error";
            main main = db.main.Find(id);
            if (main == null)
            {
                MensajeError = "NOT FOUND THIS ID";
                return BadRequest(MensajeError);
            }

            return Ok(main);
        }

        [HttpPost]
        // PUT: api/mains/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putmain(long id,main main)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                MensajeError = "NO CUMPLE LOS REQUISITOS";
                return BadRequest(MensajeError);
            }

            if (id != main.id_main)
            {
                MensajeError = "DISTINTOS ID";
                return BadRequest(MensajeError);
            }

            if (main.nombre != "portada")
            {
                MensajeError = "DISTINTOS ID";
                return BadRequest(MensajeError);
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
                    MensajeError = "NOT FOUND THIS ID";
                    return BadRequest(MensajeError);
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/mains
        [HttpPost]
        [ResponseType(typeof(main))]
        public IHttpActionResult Postmain(main main)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                MensajeError = "NO CUMPLE LOS REQUISITOS";
                return BadRequest(MensajeError);
            }

            main check = db.main.Where(a => a.nombre == "portada").FirstOrDefault();

            if (check == null )
            {
                main.nombre = "portada";

                db.main.Add(main);

                try
                {
                    db.SaveChanges();
                }
                catch (DbUpdateException)
                {
                    if (mainExists(main.id_main))
                    {
                        return Conflict();
                    }
                    else
                    {
                        throw;
                    }
                }


                return CreatedAtRoute("DefaultApi", new { id = main.id_main }, main);
            }
            else {
                main modificar = db.main.Where(a => a.nombre == "portada").FirstOrDefault();
                modificar.textautor = main.textautor;
                modificar.urlautor = main.urlautor;
                modificar.textwwa = main.textwwa;
                modificar.urlwwa = main.urlwwa;

                db.Entry(modificar).State = EntityState.Modified;
                try
                {
                    db.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!mainExists(modificar.id_main))
                    {
                        MensajeError = "NOT FOUND THIS ID";
                        return BadRequest(MensajeError);
                    }
                    else
                    {
                        throw;
                    }
                }

                return StatusCode(HttpStatusCode.NoContent);

            }
        }

        // DELETE: api/mains/5
        [ResponseType(typeof(main))]
        public IHttpActionResult Deletemain(long id)
        {
            string MensajeError = "Error";
            main main = db.main.Find(id);
            if (main == null)
            {
                MensajeError = "NOT FOUND THIS ID";
                return BadRequest(MensajeError);
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

        private bool mainExists(long id)
        {
            return db.main.Count(e => e.id_main == id) > 0;
        }
    }
}