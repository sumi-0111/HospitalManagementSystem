using BigBang.Models.DTO;

namespace BigBang.Interface
{
    public interface IGenerateToken
    {
        public string GenerateToken(UserDTO user);

    }
}
