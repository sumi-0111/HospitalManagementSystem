﻿using BigBang.Interface;
using BigBang.Models;
using BigBang.Models.DTO;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace BigBang.Services
{
    public class ManageUserService : IManageUser
    {
        private readonly IRepo<int, User> _userRepo;
        private readonly IRepo<int, Doctor> _doctorRepo;
        private readonly IRepo<int, Patient> _patientRepo;
        private readonly IGeneratePassword _passwordService;
        private readonly IGenerateToken _tokenService;
        private readonly Context _context;

        public ManageUserService(IRepo<int, User> userRepo,
            IRepo<int, Doctor> doctorRepo,
            IGeneratePassword passwordService,
            IRepo<int, Patient> patientRepo,
            IGenerateToken tokenService,
            Context context)
        {
            _userRepo = userRepo;
            _doctorRepo = doctorRepo;
            _passwordService = passwordService;
            _patientRepo = patientRepo;
            _tokenService = tokenService;
            _context = context;
        }

        public async Task<Doctor> Approval(int doctorId)
        {
            var doctor = await _doctorRepo.Get(doctorId);
            if (doctor != null)
            {
                doctor.Status = true;
                await _doctorRepo.Update(doctor);
                await _context.SaveChangesAsync(); // Save the changes to the database

                // Reload the updated doctor from the database
                doctor = await _doctorRepo.Get(doctorId);
            }
            return doctor;
        }

        public async Task<Doctor> DisapproveDoctor(int doctorID)
        {
            var doctorResult = await _doctorRepo.Get(doctorID);

            if (doctorResult != null)
            {
                doctorResult.Status = true;
                await _doctorRepo.Update(doctorResult);
                //await _doctorRepo.SaveChanges();
            }
            return doctorResult;
        }

        public async Task<UserDTO> Login(UserDTO user)
        {

            var userData = await _userRepo.Get(user.UserId);
            if (userData != null)
            {
                var hmac = new HMACSHA512(userData.PasswordKey);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != userData.PasswordHash[i])
                        return null;
                }
                user = new UserDTO();
                user.UserId = userData.UserId;
                user.Role = userData.Role;
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;
        }

        public async Task<UserDTO> RegisterDoctor(Doctor doctor)
        {
            UserDTO user = null;
            var hmac = new HMACSHA512();
            string generatedPassword = await _passwordService.GeneratePasswordDoctor(doctor);

            doctor.User = new User(); // Instantiate the User object

            doctor.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword));
            doctor.User.PasswordKey = hmac.Key;
            doctor.User.Role = "Doctor";
            doctor.Status =false;

            var userResult = await _userRepo.Add(doctor.User);
            var docResult = await _doctorRepo.Add(doctor);

            if (userResult != null && docResult != null)
            {
                user = new UserDTO();
                user.UserId = docResult.DoctorId;
                user.Role = userResult.Role;
                user.Token = _tokenService.GenerateToken(user);
            }

            return user;
        }

        public async Task<UserDTO> RegisterPatient(Patient patient)
        {
            
            UserDTO user = null;
            var hmac = new HMACSHA512();
            string generatedPassword = await _passwordService.GeneratePasswordPatient(patient);

            patient.User = new User(); // Instantiate the User object

            patient.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword));
            patient.User.PasswordKey = hmac.Key;
            patient.User.Role = "Patient";
            //patient.User.Status = "Not Approved";

            var userResult = await _userRepo.Add(patient.User);
            var patientResult = await _patientRepo.Add(patient);

            if (userResult != null && patientResult != null)
            {
                user = new UserDTO();
                user.UserId = patientResult.PatientId;
                user.Role = userResult.Role;
                user.Token = _tokenService.GenerateToken(user);
            }

            return user;
        }
      
    }
}

