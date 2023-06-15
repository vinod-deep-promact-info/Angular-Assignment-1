using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;

namespace EmployeeCRUDAPI.Model
{
    public class Employee
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string contact { get; set; }
        public string gender { get; set; }
        public string skills { get; set; }
    }
}
