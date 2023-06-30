using BigBang.Models;

namespace BigBang.Interface
{
    public interface IGeneratePassword
    {
        public Task<string?> GeneratePasswordDoctor(Doctor doctor);
        public Task<string?> GeneratePasswordPatient(Patient patient);


    }
}