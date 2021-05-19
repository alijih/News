using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace News.Models
{
    public class CategoriaPartial
    {
        [Required]
        [StringLength(50)]
        [Display(Name = "Nombre de Categoria")]
        public string nombre { get; set; }
        [Required]
        [Display(Name = "Portada")]
        public byte portada { get; set; }
        [Required]
        [Display(Name = "Hide")]
        public byte hide { get; set; }
       
    }

}