//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace News.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Categoria
    {
        public long id_categoria { get; set; }
        public string nombre { get; set; }
        public Nullable<byte> portada { get; set; }
        public Nullable<byte> hide { get; set; }
    
        public virtual Categoria Categoria1 { get; set; }
        public virtual Categoria Categoria2 { get; set; }
        public virtual Noticia Noticia { get; set; }
    }
}
