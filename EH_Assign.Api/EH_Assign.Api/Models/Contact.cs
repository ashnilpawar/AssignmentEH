using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EH_Assign.Api.Models
{
    public class Contact
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string MobileNo { get; set; }

        public DateTime DateOfBirth { get; set; }
        
        public int IsActive { get; set; }
        
    }
}
