using BigBang.Interface;
using BigBang.Models;
using BigBang.Models.DTO;
using BigBang.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BigBang.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("AngularCors")]
    public class UserController : ControllerBase
    {
        private readonly IManageUser _manageUser;
        private readonly IRepo<int, Patient> _patientRepo;
        private readonly IRepo<int, Doctor> _doctorRepo;
        private readonly ILogger<User> _logger;

        public UserController(IManageUser manageUser, IRepo<int, Patient> patientRepo,IRepo<int,Doctor> doctorRepo, ILogger<User> logger)
        {
            _manageUser = manageUser;
            _patientRepo = patientRepo;
            _doctorRepo = doctorRepo;
            _logger = logger;
        }

        [HttpPost("Patient")]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> RegisterPatient(PatientDTO intern)
        {
            var result = await _manageUser.RegisterPatient(intern);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to register at this moment");
        }

        [HttpPost("Doctor")]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> RegisterDoctor(DoctorDTO doc)
        {
            var result = await _manageUser.RegisterDoctor(doc);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to register at this moment");
        }


        [HttpPost]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> Login(UserDTO user)
        {
            var result = await _manageUser.Login(user);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to login");
        }

        [HttpGet]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> GetAllDoctors()
        {
            var doctors = await _doctorRepo.GetAll();

            try
            {

                if (doctors != null)
                    return Ok(doctors);

                return NotFound();
            }
            catch (Exception ex)
            {
     
                return  BadRequest("An error occurred while retrieving the doctors.");
            }
        }
    }
}
