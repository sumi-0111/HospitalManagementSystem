﻿using BigBang.Models;
using BigBang.Models.DTO;

namespace BigBang.Interface
{
    public interface IManageUser
    {
        public Task<UserDTO> Login(UserDTO user);
        public Task<UserDTO> RegisterPatient(Patient patient);
        public Task<UserDTO> RegisterDoctor(Doctor doctor);
        public Task<Doctor> Approval(int DoctorId);
        public Task<Doctor> DisapproveDoctor(int doctorId);

    }
}
