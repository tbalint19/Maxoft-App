using MaxoftUgyfelkapu.sqlUtils;
using MaxoftUgyfelkapu.Utils;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace MaxoftUgyfelkapu.Services
{
    public class AuthService
    {
        private EncryptionHelper encrypter;
        private string key;
        private string separator;
        private string validator;

        public AuthService()
        {
            encrypter = new EncryptionHelper();
            separator = "<<<>>>";
            validator = "CONFIRMEDUSER";
        }

        public bool authenticate(string username, string password)
        {
            var user = getUser(username);
            if (user == null) { return false; }
            if (user[6] != password) { return false; }
            return true;
        }

        public string generateToken(string username)
        {
            string token = encrypter.Encrypt(username + separator + validator);
            return token;
        }

        public string validateToken(string token)
        {
            if (token == null || token == "")
            {
                return null;
            }
            string decryptedToken = encrypter.Decrypt(token);
            if (!decryptedToken.Contains(validator) || !decryptedToken.Contains(separator))
            {
                return null;
            }
            string username = decryptedToken.Split(separator.ToCharArray())[0];
            return username;
        }

        private List<string> getUser(string username)
        {
            SqlHelper helper = new SqlHelper("TorzsFelhSelect");
            helper.addParam("@UserName", SqlDbType.VarChar, "");
            helper.addParam("@Tsz", SqlDbType.VarChar, "");
            helper.addParam("@Nev", SqlDbType.VarChar, "");
            helper.addParam("@SzulDatst", SqlDbType.VarChar, "");
            helper.addParam("@Szerv", SqlDbType.VarChar, "");
            helper.addParam("@FelhNev", SqlDbType.VarChar, username);
            var result = helper.getData();
            if (result.Count == 1)
            {
                return result[0];
            }
            return null;
        }
    }
}