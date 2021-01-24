using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace EH_Assign.Api.Models
{
    public class DbContext
    {
        public string ConnectionString { get; set; }

        public DbContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
        
    }
}
