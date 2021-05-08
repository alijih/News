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
    public class CategoriasController : ApiController
    {
        private NewsEntities db = new NewsEntities();

        // GET: api/Categorias
        public IQueryable<Categoria> GetCategoria()
        {
            return db.Categoria;
        }

        // GET: api/Categorias/5
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult GetCategoria(long id)
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
        public IHttpActionResult PutCategoria(long id, Categoria categoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categoria.id_categoria)
            {
                return BadRequest();
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
        public IHttpActionResult PostCategoria(Categoria categoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Categoria.Add(categoria);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = categoria.id_categoria }, categoria);
        }

        // DELETE: api/Categorias/5
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult DeleteCategoria(long id)
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