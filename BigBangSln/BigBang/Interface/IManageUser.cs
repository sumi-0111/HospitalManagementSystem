using BigBang.Models;
using BigBang.Models.DTO;

namespace BigBang.Interface
{
    public interface IManageUser
    {
        public Task<UserDTO> Login(UserDTO user);
        public Task<UserDTO> RegisterPatient(Patient patient);
        public Task<UserDTO> RegisterDoctor(Doctor doctor);

    }
}
