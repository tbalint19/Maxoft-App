using MaxoftUgyfelkapu.Services;
using MaxoftUgyfelkapu.sqlUtils;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Web.Caching;
using System.Web.Http;
using System.Web.Mvc;

public class UserJson
{
    public string password { get; set; }
    public string username { get; set; }
}

namespace MaxoftUgyfelkapu.Controllers
{
    public class LoginController : ApiController
    {
        // POST: Login
        public Dictionary<string, Object> Post(UserJson user)
        {
            var response = new Dictionary<string, Object>();

            AuthService authService = new AuthService();
            bool isAuthenticated = authService.authenticate(user.username, user.password);

            //if (!isAuthenticated) { response.Add("isSuccessful", false); return response; }

            string token = authService.generateToken(user.username);
            response.Add("authToken", token);
            response.Add("isSuccessful", true);
            
            return response;
        }
    }
}