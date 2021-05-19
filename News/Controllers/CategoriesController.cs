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
using Newtonsoft.Json;
using System.Web.Http.Cors;

namespace News.Controllers
{
    
public class CategoriesController : ApiController
    {
        
    private NewsEntities db = new NewsEntities();

        // GET: api/Categorias
        public List<Categoria> GetCategories()
        {
            return db.Categoria.ToList();
        }


        // GET: api/Categorias/5
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult GetCategory(long id)
        {
            Categoria categoria = db.Categoria.Find(id);
            if (categoria == null)
            {
                return NotFound();
            }

            return Ok(categoria);
        }

        // PUT: api/Categorias/5
        [ResponseType(typeof(void))]
        public IHttpActionResult editCategory(long id, Categoria categoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categoria.id_categoria)
            {
                return BadRequest();
            }
            string MensajeError = "Error";
            Categoria namecheck = db.Categoria.Where(a => a.nombre == categoria.nombre).FirstOrDefault();
            if (namecheck != null)
            {
                MensajeError = "CATEGORY EXIST";
                return BadRequest(MensajeError);
            }
            db.Entry(categoria).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriaExists(id))
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

        // POST: api/Categorias
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult addCategory(Categoria categoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            string MensajeError = "Error";
            Categoria namecheck = db.Categoria.Where(a => a.nombre == categoria.nombre).FirstOrDefault();
            if (namecheck != null)
            {
                MensajeError = "CATEGORY EXIST";
                return BadRequest(MensajeError);
            }
            db.Categoria.Add(categoria);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = categoria.id_categoria }, categoria);
        }

        // DELETE: api/Categorias/5
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult DelCategory(long id)
        {
            Categoria categoria = db.Categoria.Find(id);
            if (categoria == null)
            {
                return NotFound();
            }

            db.Categoria.Remove(categoria);
            db.SaveChanges();

            return Ok(categoria);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoriaExists(long id)
        {
            return db.Categoria.Count(e => e.id_categoria == id) > 0;
        }
    }
}