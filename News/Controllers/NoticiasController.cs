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
using System.IO;
using System.Web.Http.Cors;
using System.Web;

namespace News.Controllers
{
    public class NoticiasController : ApiController
    {
        private NewsEntities db = new NewsEntities();
        public string MessaError { get; private set; }
        public class Consulta {
            long category;
            string year;
            string keyword;
        }
        public Noticia guardar { get; private set; }

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
            string MensajeError = "Error";
            Noticia noti = db.Noticia.Where(a => a.id_noticia == id).FirstOrDefault();
            if (noti == null)
            {
                MensajeError = "AUN NO SE ENCONTRO LA NOTICIA";
                return BadRequest(MensajeError);
            }

            return Ok(noti);
        }

        [HttpGet]
        // GET: api/Noticias/5   
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult noticiaSearchNR()// BUSCA UNA NOTICIA EN PARTICULAR CON UN ID
        {
            string MensajeError = "Error";
            List<Noticia> noti = db.Noticia.Where(a => a.hide != 0).ToList();
            if (noti == null)
            {
                MensajeError = "AUN NO SE ENCONTRO LA NOTICIA";
                return BadRequest(MensajeError);
            }
            return Ok(noti);
        }

        [HttpGet]
        public IHttpActionResult GetNoticiaPolicy()// DEVUELVE POLICY
        {
            string MensajeError = "Error";
            Categoria cat = db.Categoria.Where(a => a.nombre == "POLICY ANALISYS").FirstOrDefault();
            List<Noticia> noti = db.Noticia.Where(a => a.id_categoria == cat.id_categoria&&a.hide==1).ToList();
            if (noti == null)
            {
                MensajeError = "AUN NO SE ENCONTRO LA NOTICIA";
                return BadRequest(MensajeError);
            }

            return Ok(noti);
        }
        [HttpGet]
        public IHttpActionResult GetNoticiaPolicyR()// DEVUELVE POLICY
        {
            string MensajeError = "Error";
            Categoria cat = db.Categoria.Where(a => a.nombre == "POLICY ANALISYS").FirstOrDefault();
            List<Noticia> noti = db.Noticia.Where(a => a.id_categoria == cat.id_categoria).ToList();
            if (noti == null)
            {
                MensajeError = "AUN NO SE ENCONTRO LA NOTICIA";
                return BadRequest(MensajeError);
            }

            return Ok(noti);
        }

        [HttpGet]
        public IHttpActionResult GetNoticiaLiteracy()// DEVUELVE POLICY
        {
            string MensajeError = "Error";
            Categoria cat = db.Categoria.Where(a => a.nombre == "LITERACY").FirstOrDefault();
            List<Noticia> noti = db.Noticia.Where(a => a.id_categoria == cat.id_categoria && a.hide == 1).ToList();
            if (noti == null)
            {
                MensajeError = "AUN NO SE ENCONTRO LA NOTICIA";
                return BadRequest(MensajeError);
            }

            return Ok(noti);
        }
        [HttpGet]
        public IHttpActionResult GetNoticiaLiteracyR()// DEVUELVE POLICY
        {
            string MensajeError = "Error";
            Categoria cat = db.Categoria.Where(a => a.nombre == "LITERACY").FirstOrDefault();
            List<Noticia> noti = db.Noticia.Where(a => a.id_categoria == cat.id_categoria).ToList();
            if (noti == null)
            {
                MensajeError = "AUN NO SE ENCONTRO LA NOTICIA";
                return BadRequest(MensajeError);
            }

            return Ok(noti);
        }

        [HttpGet]
        // GET: api/Noticias/5   
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult GetLatest()// BUSCA la ultima noticia
        {   string MensajeError = "Error";
            Portada port = db.Portada.Where(a => a.nombre == "portada").FirstOrDefault();
            Noticia noti;
            noti = db.Noticia.Where(a => a.id_noticia == port.latest).FirstOrDefault(); 
            //no esta logueado asi que cargo la ultima noticia que se subio habilitada para que vean todos    
            if (noti == null)
                {
                    MensajeError = "AUN NO HAY NOTICIAS";
                    return BadRequest(MensajeError);
                }
                return Ok(noti);
            }

        [HttpGet]
        // GET: api/Noticias/5   
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult GetLatestR()// BUSCA la ultima noticia
        {
            string MensajeError = "Error";
            Portada port = db.Portada.Where(a => a.nombre == "portada").FirstOrDefault();
            Noticia noti;
           if (port.igual == 0) { noti = db.Noticia.Where(a => a.id_noticia == port.latestr).FirstOrDefault(); }
                //cargo la ultima noticia que era solo para logueados
                else { noti = db.Noticia.Where(a => a.id_noticia == port.latest).FirstOrDefault(); }
            //cargo la ultima noticia que era la misma que para los no logueados
           
            if (noti == null)
            {
                MensajeError = "AUN NO HAY NOTICIAS";
                return BadRequest(MensajeError);
            }
            return Ok(noti);
        }


        [HttpGet]
        // GET: api/Noticias/5   
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult GetPortada()// BUSCA la ultima noticia
        {
            List<Noticia> noti = new List<Noticia>();
            Noticia noti0 = null;
            Noticia noti1 = null;
            Noticia noti2 = null;
            Noticia noti3 = null;
            string MensajeError = "Error";
            if (db.Noticia.Count() >= 1) { noti0 = db.Noticia.Where(n => (n.portada == 1) && (n.hide == 1)).OrderByDescending(x => x.id_noticia).FirstOrDefault(); }
            if (db.Noticia.Count() >= 2) { noti1 = db.Noticia.Where(n => (n.portada == 1) && (n.id_noticia != noti0.id_noticia) && (n.hide == 1)).OrderByDescending(x => x.id_noticia).FirstOrDefault();
                noti.Add(noti1);
            }
            if (db.Noticia.Count() >= 3) { noti2 = db.Noticia.Where(n => (n.portada == 1) && (n.id_noticia != noti0.id_noticia) && (n.id_noticia != noti1.id_noticia) && (n.hide == 1)).OrderByDescending(x => x.id_noticia).FirstOrDefault();
                noti.Add(noti2);
            }
            if (db.Noticia.Count() >= 4) {
                noti3 = db.Noticia.Where(n => (n.portada == 1) && (n.id_noticia != noti0.id_noticia) && (n.id_noticia != noti1.id_noticia) && (n.id_noticia != noti2.id_noticia) && (n.hide == 1)).OrderByDescending(x => x.id_noticia).FirstOrDefault();
                noti.Add(noti3);
            }
                
            if (noti == null)
            {
                MensajeError = "AUN NO HAY NOTICIAS";
                return BadRequest(MensajeError);
            }
            return Ok(noti);
        }

        [HttpGet]
        // GET: api/Noticias/5   
        [ResponseType(typeof(Noticia))]
        public IHttpActionResult GetPortadaR()// BUSCA la ultima noticia
        {
            string MensajeError = "Error";
            Noticia noti0 = db.Noticia.Where(n => n.portada == 1).OrderByDescending(x => x.id_noticia).FirstOrDefault();
            Noticia noti1 = db.Noticia.Where(n => (n.portada == 1) && (n.id_noticia != noti0.id_noticia)).OrderByDescending(x => x.id_noticia).FirstOrDefault();
            Noticia noti2 = db.Noticia.Where(n => (n.portada == 1) && (n.id_noticia != noti0.id_noticia) && (n.id_noticia != noti1.id_noticia)).OrderByDescending(x => x.id_noticia).FirstOrDefault();
            Noticia noti3 = db.Noticia.Where(n => (n.portada == 1) && (n.id_noticia != noti0.id_noticia) && (n.id_noticia != noti1.id_noticia) && (n.id_noticia != noti2.id_noticia)).OrderByDescending(x => x.id_noticia).FirstOrDefault();
            List<Noticia> noti = new List<Noticia>();
            noti.Add(noti1);
            noti.Add(noti2);
            noti.Add(noti3);
            if (noti == null)
            {
                MensajeError = "AUN NO HAY NOTICIAS";
                return BadRequest(MensajeError);
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
            noticia.date = Convert.ToDateTime(DateTime.Now.ToString("dd-MM-yyyy"));


            //IMAGENES NOTICIA Y PORTADA
            byte[] imageBytesPortada = null;
            byte[] imageBytesNoticia = null;
            bool creardirnoticia = false;
            bool creardirportada=false;
            string typeportada = "nada";
            string typenoticia = "nada";
            if (noticia.foto_noticia != "") {
                creardirnoticia = true;
                imageBytesNoticia = Convert.FromBase64String(noticia.foto_portada);
            }
            if (noticia.foto_portada != "")
            {
                creardirportada = true;
                imageBytesPortada = Convert.FromBase64String(noticia.foto_portada);
            }





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

                noticia.foto_portada = "";

                db.Noticia.Add(noticia);
                db.SaveChanges();
                Noticia notti = db.Noticia.Where(a => a.titulo == noticia.titulo).FirstOrDefault();//en notti para sacar id


                //AGREGAR FOTOS NOTICIA Y PORTADA 
                if (creardirportada)
                {
                    String path = HttpContext.Current.Server.MapPath("~/images/News/" + notti.id_noticia+"/"); //Path
                    //Check if directory exist
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path); //Create directory if it doesn't exist
                    }

                    string imageName = path+"portada.png";
                     //set the image path
                     string imgPath = Path.Combine(path, imageName);
                    File.WriteAllBytes(imgPath, imageBytesPortada);
                    notti.foto_portada = imgPath;
                    db.Entry(notti).State = EntityState.Modified;
                    db.SaveChanges();
                }
                if (creardirnoticia)
                {
                    String path = HttpContext.Current.Server.MapPath("~/images/News/" + notti.id_noticia + "/"); //Path
                    //Check if directory exist
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path); //Create directory if it doesn't exist
                    }

                    string imageName = path + "noticia.png";
                    //set the image path
                    string imgPath = Path.Combine(path, imageName);
                    File.WriteAllBytes(imgPath, imageBytesNoticia);
                    notti.foto_noticia = imgPath;
                    db.Entry(notti).State = EntityState.Modified;
                    db.SaveChanges();
                }




                //para latest
                Portada port = db.Portada.Where(a => a.nombre == "portada").FirstOrDefault();
                if (notti.hide == 0) { port.latestr = notti.id_noticia; port.igual = 0; }
                else { port.latest = notti.id_noticia; port.igual = 1; }
                //la guardo en latest
                db.Entry(port).State = EntityState.Modified;
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

        [HttpPost]

        public void UploadFile(FilePhoto Todoidnombreimagen) 
        {
            var archivoIntr = new FilePhoto
            {
                id = Todoidnombreimagen.id,
                nombre = Todoidnombreimagen.nombre,
                imagen = Todoidnombreimagen.imagen
            };

            var archivoSalida = archivoIntr;

        }

        



    }
}