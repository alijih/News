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
    public class CategoriasController : ApiController
    {
        private NewsEntities db = new NewsEntities();
        public string MessaError { get; private set; }

        // GET: api/Categorias
        [HttpGet]
        public IQueryable<Categoria> GetCategoria()
        {
            return db.Categoria;
        }

        [HttpGet]
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

        [HttpPost]
        // PUT: api/Categorias/5
        [Route("api/Categorias/edit")]
        [ResponseType(typeof(void))]
        public IHttpActionResult edit(long id, Categoria categoria)
        {
            string MensajeError = "Error";
            Categoria cat = db.Categoria.Where(a => a.id_categoria == id).FirstOrDefault();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //CHEQUEA QUE EL NOMBRE DE USUARIO NO ESTE EN USO
            Categoria categorycheck = db.Categoria.Where(a => (a.nombre == categoria.nombre) && (a.id_categoria != id)).FirstOrDefault();
            if (categorycheck != null)
            {
                MensajeError = "CATEGORIA YA EXISTE";
                return BadRequest(MensajeError);
            }
            cat.nombre = categoria.nombre;
            cat.portada = categoria.portada;
            cat.hide = categoria.hide;

            db.Entry(cat).State = EntityState.Modified;

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
        [HttpPost]
        // POST: api/Categorias
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult PostCategoria(Categoria categoria)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Categoria categorycheck = db.Categoria.Where(a => (a.nombre == categoria.nombre)).FirstOrDefault();
            if (categorycheck != null)
            {
                MensajeError = "CATEGORIA YA EXISTE";
                return BadRequest(MensajeError);
            }

            db.Categoria.Add(categoria);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = categoria.id_categoria }, categoria);
        }

        [HttpDelete]
        // DELETE: api/Categorias/5
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult DeleteCategoria(long id)
        {
            string MensajeError = "Error";

            Categoria categoria = db.Categoria.Find(id);
            if (categoria == null)
            {
                return NotFound();
            }

            if (!CanDelete(id))
            {
                MensajeError = "NO SE PUEDE BORRAR CONTIENE NOTICIAS";
                return BadRequest(MensajeError);
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


      
        private bool CanDelete(long id) {
            bool respuesta = true;
            Noticia noticias= db.Noticia.Where(n => (n.id_categoria == id)).FirstOrDefault();
            if (noticias != null){respuesta = false; return respuesta; }

            Categoria notis = db.Categoria.Where(n => (n.id_categoria ==id)).FirstOrDefault();
            if (notis != null) {
                if (notis.nombre== "POLICY ANALISYS"|| notis.nombre == "LITERACY") { respuesta = false; return respuesta; }
                 }
            
            return respuesta; }


    }
}