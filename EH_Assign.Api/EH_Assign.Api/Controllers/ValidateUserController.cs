using EH_Assign.Api.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace EH_Assign.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValidateUserController : ControllerBase
    {
        private readonly DbContext _context;

        public ValidateUserController(DbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public bool Post([FromBody] User obj)
        {
            bool valid = false;

            using (MySqlConnection conn = _context.GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("select * from user_login where email_id = '" + obj.email_id + "' and password = '" + obj.password + "'", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        valid = true;
                        break;
                    }
                }
            }
            return valid;
        }
    }
}
