﻿using Microsoft.EntityFrameworkCore;

namespace BigBang.Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions Options):base(Options)
        {
            
        }
        public DbSet<Patient>? Patients { get; set; } 
        public DbSet<User>? Users { get; set; }
        public DbSet<Doctor>? Doctors { get; set; }
    }
}
