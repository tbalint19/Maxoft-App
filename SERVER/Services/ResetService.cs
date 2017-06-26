using MaxoftUgyfelkapu.sqlUtils;
using MaxoftUgyfelkapu.Utils;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace MaxoftUgyfelkapu.Services
{
    public class ResetService
    {
        private Random random;

        public ResetService()
        {
            random = new Random();
        }

        public List<string> getUser(string username)
        {
            SqlHelper helper = new SqlHelper("TorzsFelhSelect");
            helper.addParam("@UserName", SqlDbType.VarChar, "");
            helper.addParam("@Tsz", SqlDbType.VarChar, "");
            helper.addParam("@Nev", SqlDbType.VarChar, "");
            helper.addParam("@SzulDatst", SqlDbType.VarChar, "");
            helper.addParam("@Szerv", SqlDbType.VarChar, "");
            helper.addParam("@FelhNev", SqlDbType.VarChar, username);
            var result = helper.getData();
            if (result.Count == 1) { return result[0]; }
            return null;
        }

        public string generateNewPassword(string userId)
        {
            Int64 password = random.Next(10000000, 99999999);
            string generatedPassword = password.ToString() + "#NG";
            // TODO
            // save new password to database based on the id !!!
            // stored procedure is needed
            return generatedPassword;
        }

        public void informUser(string email,  string password)
        {
            EmailHelper emailHelper = new EmailHelper();
            emailHelper.send(email, "New password", "Your new password is: " + password);

        }
    }
}