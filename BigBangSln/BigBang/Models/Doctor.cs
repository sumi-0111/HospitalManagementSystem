using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BigBang.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }
        [ForeignKey("UserId")]
        public User? User { get; set; }


        [Required(ErrorMessage = "Name cannot be empty")]
        [MinLength(5, ErrorMessage = "Name must be atleast 5 characters long")]
        public string? DoctorName { get; set; }

        [Required(ErrorMessage = "Gender cannot be empty")]
        public string? Gender { get; set; }

        [Required(ErrorMessage = "Age Cannot be Null")]
        [Range(17, 67)]
        public int Age { get; set; }
        public DateTime DOB { get; set; }

        public string? Email { get; set; }
        public string? PhoneNo { get; set; }
        public Boolean Status { get; set; }
        public string? Specialization { get; set; }
        public int Experience { get; set; }

    }
}
