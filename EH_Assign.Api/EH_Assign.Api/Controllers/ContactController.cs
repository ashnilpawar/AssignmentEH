using System;
using System.Collections.Generic;
using EH_Assign.Api.Models;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace EH_Assign.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly DbContext _context;

        public ContactController(DbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Contact>> Get()
        {
            List<Contact> list = new List<Contact>();

            using (MySqlConnection conn = _context.GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("select * from user_master", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Contact()
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            FirstName = reader["first_name"].ToString(),
                            LastName = reader["last_name"].ToString(),
                            Email = reader["email_id"].ToString(),
                            MobileNo = reader["mobile_no"].ToString(),
                            DateOfBirth = Convert.ToDateTime(reader["date_of_birth"]),
                            IsActive = Convert.ToInt32(reader["is_active"])
                        });
                    }
                }
            }
            return list;
        }

        [HttpGet("{id}")]
        public ActionResult<List<Contact>> Get(int id)
        {
            List<Contact> list = new List<Contact>();

            using (MySqlConnection conn = _context.GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("select * from user_master where id=" + id, conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Contact()
                        {
                            Id = Convert.ToInt32(reader["id"]),
                            FirstName = reader["first_name"].ToString(),
                            LastName = reader["last_name"].ToString(),
                            Email = reader["email_id"].ToString(),
                            MobileNo = reader["mobile_no"].ToString(),
                            DateOfBirth = Convert.ToDateTime(reader["date_of_birth"]),
                            IsActive = Convert.ToInt32(reader["is_active"])
                        });
                    }
                }
            }
            return list;
        }

        [HttpPost()]
        public int Post([FromBody] Contact obj)
        {
            int res = 0;

            using (MySqlConnection conn = _context.GetConnection())
            {
                var str = "INSERT INTO `user_master` (`first_name`, `last_name`, `email_id`, `mobile_no`, `date_of_birth`, `is_active`) VALUES('" + obj.FirstName + "', '" + obj.LastName + "', '" + obj.Email + "', '" + obj.MobileNo + "', '" + obj.DateOfBirth.ToString("yyyy-MM-dd HH:mm:ss") + "', " + obj.IsActive + ");";
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(str, conn);
                res = cmd.ExecuteNonQuery();
            }

            return res;

        }

        [HttpPost("updateUser")]
        public int UpdateUser([FromBody] Contact obj)
        {
            int res = 0;

            using (MySqlConnection conn = _context.GetConnection())
            {
                var str = "Update `user_master` set `first_name` = '" + obj.FirstName + "' , `last_name` = '" + obj.LastName + "', `email_id` = '" + obj.Email + "', `mobile_no` = '" + obj.MobileNo + "', `date_of_birth`= '" + obj.DateOfBirth.ToString("yyyy-MM-dd HH:mm:ss") + "', `is_active`= " + obj.IsActive + " where `id`=" + obj.Id + "";
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(str, conn);
                res = cmd.ExecuteNonQuery();
            }

            return res;

        }

        [HttpPut("{id}")]
        public int Put(int id)
        {
            int res = 0;

            using (MySqlConnection conn = _context.GetConnection())
            {
                var str = "delete from `user_master` where `id`= " + id;
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(str, conn);
                res = cmd.ExecuteNonQuery();
            }

            return res;
        }
    }
}
