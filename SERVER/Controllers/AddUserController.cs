using MaxoftUgyfelkapu.Services;
using MaxoftUgyfelkapu.sqlUtils;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

public class NewUserJson
{
    public string password { get; set; }
    public string username { get; set; }
    public string tsz { get; set; }
    public string email { get; set; }
}

namespace MaxoftUgyfelkapu.Controllers
{
    public class AddUserController : ApiController
    {
        // POST: AddUser
        public Dictionary<string, Object> Post(NewUserJson newUser)
        {
            var response = new Dictionary<string, Object>();

            AuthService authService = new AuthService();
            var token = HttpContext.Current.Request.Headers["auth-token"];
            string username = authService.validateToken(token);

            //if (username == null) { return response; }

            SqlHelper helper = new SqlHelper("UserCreateAdmin");
            helper.addParam("@UserName", SqlDbType.VarChar, username);
            helper.addParam("@Tsz", SqlDbType.VarChar, newUser.tsz);
            helper.addParam("@FelhNev", SqlDbType.VarChar, newUser.username);
            helper.addParam("@Jelszo", SqlDbType.VarChar, newUser.password);
            helper.addParam("@Email", SqlDbType.VarChar, newUser.email);
            bool isSuccessful = helper.updateRow();
            response.Add("isSuccessful", isSuccessful);
            return response;
        }
    }
}